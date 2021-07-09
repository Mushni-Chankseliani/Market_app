import { AUTH_TOKEN } from '../utils/constants';

export const login = async (credentials) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.error('[login] error');
    console.trace(error);
  }
  return undefined;
};

export const register = async (credentials) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.error('[register] error');
    console.trace(error);
  }
  return undefined;
};

export const logOut = async () => {
  localStorage.removeItem(AUTH_TOKEN);
};
