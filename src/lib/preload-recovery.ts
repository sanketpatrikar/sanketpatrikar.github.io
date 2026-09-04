export const reloadOnPreloadErrorScript = `
(function () {
  if (window.__preloadRecoveryInstalled) return
  window.__preloadRecoveryInstalled = true
  var reloading = false
  var key = "preload-recovery-attempted"
  var recover = function (event) {
    if (reloading) {
      event.preventDefault()
      return
    }
    try {
      if (window.sessionStorage.getItem(key)) return
      window.sessionStorage.setItem(key, "1")
    } catch (_) {
      return
    }
    reloading = true
    event.preventDefault()
    window.location.reload()
  }
  var isModuleError = function (message) {
    return String(message).includes("Failed to fetch dynamically imported module")
  }
  window.addEventListener("vite:preloadError", recover)
  window.addEventListener("error", function (event) {
    if (isModuleError(event.message)) recover(event)
  })
  window.addEventListener("unhandledrejection", function (event) {
    if (isModuleError(event.reason)) recover(event)
  })
})()
`
