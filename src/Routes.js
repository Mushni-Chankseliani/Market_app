import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router';
import { Loader } from './components/loader';
import ProductProviderComponent from './context';
import HomePage from './pages/home-page';

import * as routes from './utils/routePaths';
const AuthPage = React.lazy(() => import('./pages/auth'));
const ProfilePage = React.lazy(() => import('./pages/profile-page'));
const MyProductPage = React.lazy(() => import('./pages/product-page'));
const FavouritesPage = React.lazy(() => import('./pages/favourites-page'));
const ProductInnerPage = React.lazy(() => import('./pages/product-inner-page'));

function Routes() {
  return (
    <Suspense fallback={<Loader message="Pages is loading..." />}>
      <Switch>
        <Route path={routes.PROFILE_PATH}>
          <ProfilePage />
        </Route>
        <Route path={routes.MY_PRODUCTS_PATH}>
          <MyProductPage />
        </Route>
        <Route path={routes.PRODUCT_INNER_PAGE_PATH}>
          <ProductProviderComponent>
            <ProductInnerPage />
          </ProductProviderComponent>
        </Route>
        <Route path={routes.FAVOURITES_PATH}>
          <FavouritesPage />
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
