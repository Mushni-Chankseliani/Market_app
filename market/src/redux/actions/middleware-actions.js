import { BLOCKED_ACTION, AUTO_LOGIN } from '../action-types/middleware-types';

export const blockAction = () => ({ type: BLOCKED_ACTION });
export const autoLoginAction = () => ({ type: AUTO_LOGIN });
