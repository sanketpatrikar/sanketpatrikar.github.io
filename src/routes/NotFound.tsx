import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/NotFound')({
  notFoundComponent: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/NotFound"!</div>
}
