import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

let initialState = {userInfo: {}, isLoginInProgress: false, error: ''};
export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {...state, isLoginInProgress: true};
    case USER_LOGIN_SUCCESS:
      return {isLoginInProgress: false, userInfo: action.payload};
    case USER_LOGIN_FAIL:
      return {isLoginInProgress: false, error: action.payload};
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
