import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { Loader } from './components/loader';
import HomePage from './pages/home-page';

import * as routes from './utils/routePaths';
const AuthPage = React.lazy(() => import('./pages/auth'));
const ProfilePage = React.lazy(() => import('./pages/profile-page'));
const AddProductPage = React.lazy(() => import('./pages/product-page'));

function Routes() {
  return (
    <Suspense fallback={<Loader message="Pages is loading..." />}>
      <Switch>
        <Route path={routes.PROFILE_PATH}>
          <ProfilePage />
        </Route>
        <Route path={routes.ADD_PRODUCT}>
          <AddProductPage />
        </Route>
        <Route path={routes.AUTH_PATH}>
          <AuthPage />
        </Route>
        <Route path={routes.HOME_PATH}>
          <HomePage />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default Routes;
