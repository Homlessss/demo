import { Action } from "../../../models/redux/action";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_CANCELLED,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAILED,
  FETCH_PERMISSIONS_SUCCESS,
  FETCH_PERMISSIONS_FAILED,
  LOGOUT_SUCCESS,
} from "./actions";
import { log } from "../../../helpers/log";

const initState = {
  user: null,
  user_type: null,
  token: null,
  error: null,
  permissions: [],
};

export const authReducer = (state: any = initState, action: Action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      log("user logged in");
      return {
        ...state,
        token: action.payload.token,
        user_type: action.payload.user_type
          ? action.payload.user_type
          : state.user_type,
      };
    case LOGIN_FAILED:
      return {
        user: null,
        token: null,
        permissions: [],
        error: action.payload,
      };
    case LOGIN_CANCELLED:
    case LOGOUT_SUCCESS:
      log("user logged out");

      return {
        user: null,
        token: null,
        permissions: [],
      };
    case FETCH_CURRENT_USER_SUCCESS:
      log("fetched user");
      return {
        ...state,
        user: action.payload,
      };
    case FETCH_CURRENT_USER_FAILED:
      log("fetch user failed");
      return {
        ...state,
        user: null,
        error: action.payload,
      };

    // Permissions
    case FETCH_PERMISSIONS_SUCCESS:
      log("fetched permissions");
      return {
        ...state,
        permissions: action.payload.permissions,
      };

    case FETCH_PERMISSIONS_FAILED:
      log("fetch permission failed");
      return {
        ...state,
        error: action.payload,
        permissions: [],
      };

    default:
      return state;
  }
};
