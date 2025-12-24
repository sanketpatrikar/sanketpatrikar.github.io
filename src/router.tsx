import { createRouter, notFound } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

const NotFound = () => (
  // TODO: waving graident animation
  <div className='min-h-screen flex items-center justify-center flex-col'>
    <p className='text-6xl font-bold text-center text-gray-400 mb-8 [letter-spacing:-0.052em]'>404 Not Found</p>
  </div>
)

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    defaultNotFoundComponent: NotFound,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  return router
}
