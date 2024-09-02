import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
export const Route = createRootRoute({
  component: () => (
    <>
      <div>App A RC</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
