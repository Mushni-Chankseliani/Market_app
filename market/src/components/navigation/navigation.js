import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { setAuthGuestAction } from '../../redux/actions';
import { authSelector } from '../../redux/selectors';
import { logOut } from '../../services';

import * as routes from '../../utils/routePaths';

import css from './navigation.module.css';

function Navigation() {
  const authorized = useSelector(authSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogOut = async () => {
    await logOut();

    dispatch(setAuthGuestAction());
    history.replace(routes.AUTH_PATH);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 p-3">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={routes.HOME_PATH}
              exact
              activeClassName={css['active-class']}>
              Home Page
            </NavLink>
          </li>

          {authorized && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={routes.ADD_PRODUCT}
                activeClassName={css['active-class']}>
                Add product
              </NavLink>
            </li>
          )}

          {authorized && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={routes.PROFILE_PATH}
                activeClassName={css['active-class']}>
                Profile
              </NavLink>
            </li>
          )}

          {!authorized && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={routes.AUTH_PATH}
                activeClassName={css['active-class']}>
                AuthPage
              </NavLink>
            </li>
          )}
        </ul>
        {authorized && (
          <button className="btn btn-link" type="button" onClick={onLogOut}>
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
