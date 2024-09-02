import { createFileRoute, useParams, useRouter } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
// import MainApp from 'website/MainApp';

export const Route = createFileRoute('/app/$')({
  component: MyComponent,
});

function MyComponent() {
  const { _splat } = Route.useParams();
  const router = useRouter();
  const routeId = router.state.matches[1].id;

  const MainAppA = lazy(() => import('websiteA/MainApp'));
  const MainAppB = lazy(() => import('websiteB/MainApp'));

  console.log('ROUTE IDD>>>>', routeId, router.state.matches);
  console.log(_splat);

  return (
    <div
      className="container"
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
    >
      <div
        className="left"
        style={{ background: 'lightgreen', height: '80vh' }}
      >
        {routeId.includes('/$a') && (
          <Suspense fallback={<div>Loading...</div>}>
            <MainAppA />
          </Suspense>
        )}
      </div>
      <div
        className="right"
        style={{ background: 'lightblue', height: '80vh' }}
      >
        {routeId.includes('/$b') && (
          <Suspense fallback={<div>Loading...</div>}>
            <MainAppB />
          </Suspense>
        )}
      </div>
    </div>
  );
}
