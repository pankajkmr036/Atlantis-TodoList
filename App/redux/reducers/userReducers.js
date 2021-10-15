import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../constants/userConstants';

export const userInfoReducer = (
  state = {userInfo: {}, isLoginInProgress: false, error: ''},
  action,
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {...state, isLoginInProgress: true};
    case USER_LOGIN_SUCCESS:
      return {isLoginInProgress: false, userInfo: action.payload};
    case USER_LOGIN_FAIL:
      return {isLoginInProgress: false, error: action.payload};
    default:
      return state;
  }
};
