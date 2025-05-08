import { createFileRoute, notFound } from '@tanstack/react-router';

export const Route = createFileRoute('/contact/$')({
  loader: () => {
    throw notFound();
  },
  notFoundComponent: () => (
      <div className="contact-404">
        <h2>Invalid Contact Subpage</h2>
        <p>This contact path doesn't exist</p>
      </div>
  ),
  component: () => null,
});
