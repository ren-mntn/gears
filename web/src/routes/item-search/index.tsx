import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/item-search/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/item-search/"!</div>
}

