import SignInForm from '../../../components/forms/sign-in-form';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { SIGN_UP_PATH } from '../../../utils/routePaths';
export default function SignIn() {
  const { pathname } = useLocation();

  return (
    <div className="row flex-column align-items-center">
      <h2 className="text-center mb-4">Sign In To Market</h2>
      <div className="col-md-8 col-12 mb-3 bg-light rounded p-3">
        <SignInForm />
      </div>
      <div className="text-center">
        dont have account?
        <Link
          to={SIGN_UP_PATH}
          className={classNames('nav-link', {
            active: pathname.includes(SIGN_UP_PATH),
          })}>
          Sign up
        </Link>
      </div>
    </div>
  );
}
