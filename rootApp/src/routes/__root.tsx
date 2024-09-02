import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div>App Root</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to="/app/$" params={{ _splat: 'a' }}>
          Navigate to /app/a
        </Link>
        <Link to="/app/$" params={{ _splat: 'b' }}>
          Navigate to /app/b
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
