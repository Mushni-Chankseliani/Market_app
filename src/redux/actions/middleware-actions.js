import {
  AUTO_LOGIN,
  AUTO_IMPORT_DATA,
  AUTO_FETCH_USERS,
} from '../action-types/middleware-types';

export const autoLoginAction = () => ({ type: AUTO_LOGIN });
export const autoImportDataAction = () => ({ type: AUTO_IMPORT_DATA });
export const autoFetchUsers = () => ({ type: AUTO_FETCH_USERS });
