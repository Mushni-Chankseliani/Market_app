import classNames from 'classnames';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';

import SignIn from './sign-in';
import SignUp from './sign-up';
import { withNoAuthProtected } from '../../hoc';
import { SIGN_IN_PATH, SIGN_UP_PATH } from '../../utils/routePaths';

function AuthPage() {
  const { pathname } = useLocation();
  return (
    <div className="row bg-light p-5">
      <div className="col-12 mb-5">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link
              to={SIGN_IN_PATH}
              className={classNames('nav-link', {
                active: pathname.includes(SIGN_IN_PATH),
              })}>
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={SIGN_UP_PATH}
              className={classNames('nav-link', {
                active: pathname.includes(SIGN_UP_PATH),
              })}>
              Sign up
            </Link>
          </li>
        </ul>
      </div>

      <div className="row">
        <Switch>
          <Route path={SIGN_IN_PATH}>
            <SignIn />
          </Route>
          <Route path={SIGN_UP_PATH}>
            <SignUp />
          </Route>
          <Redirect to={SIGN_IN_PATH} />
        </Switch>
      </div>
    </div>
  );
}

export default withNoAuthProtected(AuthPage);
