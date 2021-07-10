import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import SignUpForm from '../../../components/forms/sign-up-form';
import { SIGN_IN_PATH } from '../../../utils/routePaths';

export default function SignUp() {
  const { pathname } = useLocation();

  return (
    <div className="row flex-column align-items-center">
      <h2 className="text-center mb-4">Sign Up To Market</h2>
      <div className="col-md-8 col-12 mb-3 bg-light rounded p-3">
        <SignUpForm />
      </div>
      <div className="text-center">
        have account?
        <Link
          to={SIGN_IN_PATH}
          className={classNames('nav-link', {
            active: pathname.includes(SIGN_IN_PATH),
          })}>
          Sign In
        </Link>
      </div>
    </div>
  );
}
