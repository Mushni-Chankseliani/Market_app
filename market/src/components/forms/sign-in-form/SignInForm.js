import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setAuthUserAction } from '../../../redux/actions';
import { login } from '../../../services';
import { AUTH_TOKEN, AUTH_USER, USERS } from '../../../utils/constants';
import { HOME_PATH } from '../../../utils/routePaths';

function SignInForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, touchedFields },
  } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    const loggedIn = await login(formData);
    const users = JSON.parse(localStorage.getItem(USERS));
    const getCurrentUser = users.find((item) => item.email === formData.email);
    localStorage.setItem(AUTH_USER, JSON.stringify(getCurrentUser));
    localStorage.setItem(AUTH_TOKEN, JSON.stringify(loggedIn.token));
    dispatch(setAuthUserAction(loggedIn.token, getCurrentUser));
    history.replace(HOME_PATH);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          defaultValue="eve.holt@reqres.in"
          id="email"
          {...register('email', {
            required: true,
          })}
        />
        {(touchedFields.email || errors.email) && (
          <span className="text-danger form-text">
            {!errors.email ??
              (errors.email.type === 'required' && 'Email is required')}
            {touchedFields.email &&
              Boolean(getValues('email').length) &&
              'Email is required'}
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          defaultValue="cityslicka"
          {...register('password', {
            required: true,
          })}
        />
        {(touchedFields.password || errors.password) && (
          <span className="text-danger form-text">
            {!errors.password ??
              (errors.password.type === 'required' && 'Password is required')}
            {touchedFields.password &&
              Boolean(getValues('password').length) &&
              'Password is required'}
          </span>
        )}
      </div>
      <button className="btn btn-primary w-100" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default SignInForm;
