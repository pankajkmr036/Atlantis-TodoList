import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

export const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

export const userLoginSuccess = userInfo => ({
  type: USER_LOGIN_SUCCESS,
  payload: userInfo,
});

export const userLoginFail = () => ({type: USER_LOGIN_FAIL});

export const userLogout = () => ({type: USER_LOGOUT});
