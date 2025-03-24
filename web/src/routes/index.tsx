import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mt-10 text-2xl font-bold text-blue-500">Hello "/"!</div>
  );
}
