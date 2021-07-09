import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { Loader } from './components/loader';
import * as routes from './utils/routePaths';
const AuthPage = React.lazy(() => import('./pages/auth'));

function Routes() {
  return (
    <Suspense fallback={<Loader message="Pages is loading..." />}>
      <Switch>
        <Route path={routes.PROFILE_PATH}>
          <h1>profile works</h1>
          {/* <Profile /> */}
        </Route>
        <Route path={routes.AUTH_PATH}>
          <AuthPage />
        </Route>
        <Route path={routes.HOME_PATH}>
          <h1>home works</h1>

          {/* <HomePage /> */}
        </Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;
