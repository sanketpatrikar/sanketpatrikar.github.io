import { runInNewContext } from "node:vm"
import { describe, expect, it, vi } from "vitest"

import { reloadOnPreloadErrorScript } from "./preload-recovery"

function setup(storage = new Map<string, string>(), storageBlocked = false) {
  const listeners = new Map<string, Array<(event: object) => void>>()
  const window = {
    sessionStorage: {
      getItem: (key: string) => {
        if (storageBlocked) throw new Error("blocked")
        return storage.get(key)
      },
      setItem: (key: string, value: string) => storage.set(key, value),
    },
    location: { reload: vi.fn() },
    addEventListener: (name: string, handler: (event: object) => void) => {
      listeners.set(name, [...(listeners.get(name) ?? []), handler])
    },
  }
  const install = () => runInNewContext(reloadOnPreloadErrorScript, { window })
  install()
  return {
    window,
    install,
    listeners,
    dispatch: (name: string, properties: object = {}) => {
      const event = { preventDefault: vi.fn(), ...properties }
      listeners.get(name)?.forEach((handler) => handler(event))
      return event
    },
  }
}

describe("preload recovery", () => {
  it("retries once across page loads, then preserves the default error", () => {
    const storage = new Map<string, string>()
    const first = setup(storage)
    expect(first.dispatch("vite:preloadError").preventDefault).toHaveBeenCalledOnce()
    first.dispatch("vite:preloadError")
    expect(first.window.location.reload).toHaveBeenCalledOnce()
    const next = setup(storage)
    expect(next.dispatch("vite:preloadError").preventDefault).not.toHaveBeenCalled()
    expect(next.window.location.reload).not.toHaveBeenCalled()
  })

  it("does not retry if storage cannot persist the retry limit", () => {
    const app = setup(new Map(), true)
    expect(app.dispatch("vite:preloadError").preventDefault).not.toHaveBeenCalled()
    expect(app.window.location.reload).not.toHaveBeenCalled()
  })

  it("installs listeners only once", () => {
    const app = setup()
    app.install()
    expect([...app.listeners.values()].map((handlers) => handlers.length)).toEqual([1, 1, 1])
  })

  it.each(["error", "unhandledrejection"])("recovers module failures from %s", (name) => {
    const app = setup()
    const message = "Failed to fetch dynamically imported module: /assets/missing.js"
    const event = app.dispatch(name, { message, reason: new Error(message) })
    expect(event.preventDefault).toHaveBeenCalledOnce()
    expect(app.window.location.reload).toHaveBeenCalledOnce()
  })

  it("leaves unrelated failures alone", () => {
    const app = setup()
    expect(app.dispatch("error", { message: "other failure" }).preventDefault).not.toHaveBeenCalled()
    expect(app.dispatch("unhandledrejection", { reason: new Error("other failure") }).preventDefault).not.toHaveBeenCalled()
    expect(app.window.location.reload).not.toHaveBeenCalled()
  })
})
