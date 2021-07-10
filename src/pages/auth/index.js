import { Redirect, Route, Switch } from 'react-router-dom';

import SignIn from './sign-in';
import SignUp from './sign-up';
import { withNoAuthProtected } from '../../hoc';
import { SIGN_IN_PATH, SIGN_UP_PATH } from '../../utils/routePaths';

function AuthPage() {
  return (
    <div className="row p-5 d-flex justify-content-center">
      <div className="col-md-8 col-xl-4 col-12">
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
