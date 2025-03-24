import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_admin/item-registration/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_admin/item-registration/"!</div>;
}
