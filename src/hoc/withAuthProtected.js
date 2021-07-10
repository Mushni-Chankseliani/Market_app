import { useEffect } from 'react';
import { Redirect } from 'react-router';
import { AUTH_TOKEN } from '../utils/constants';
import { HOME_PATH } from '../utils/routePaths';

export const withAuthProtected = (Component) => {
  const WithAuthProtected = (props) => {
    useEffect(() => {
      console.log('accessing secured page');
    }, []);

    const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
    if (!token) return <Redirect to={HOME_PATH} />;

    return <Component {...props} />;
  };

  return WithAuthProtected;
};

export default withAuthProtected;
