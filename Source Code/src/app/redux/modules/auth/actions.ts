import { Permission } from "../../../models/Permission";
import { LoginUser } from "../../../models/LoginUser";
import { ReduxCallbacks } from "../../../models/redux/Callbacks";
import { Action } from "../../../models/redux/action";
import { User } from "../../../models/User";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_CANCELLED = "LOGIN_CANCELLED";

export const login = (user: LoginUser, callbacks?: ReduxCallbacks): Action => ({
  type: LOGIN,
  payload: { user, callbacks },
});

export const loginSuccess = ({
  token,
  user_type,
}: {
  token: string;
  user_type?: string;
}): Action => ({
  type: LOGIN_SUCCESS,
  payload: { token, user_type },
});

export const loginFailed = (error: any): Action => ({
  type: LOGIN_FAILED,
  payload: error,
});

export const loginCancelled = (): Action => ({
  type: LOGIN_CANCELLED,
});

// FETCH CURRENT USER
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export const FETCH_CURRENT_USER_SUCCESS = "FETCH_CURRENT_USER_SUCCESS";
export const FETCH_CURRENT_USER_FAILED = "FETCH_CURRENT_USER_FAILED";
export const FETCH_CURRENT_USER_CANCELLED = "FETCH_CURRENT_USER_CANCELLED";

export const fetchUser = (): Action => ({
  type: FETCH_CURRENT_USER,
});

export const fetchUserSuccess = (user: User): Action => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailed = (error: any): Action => ({
  type: FETCH_CURRENT_USER_FAILED,
  payload: error,
});
export const fetchUserCancelled = (): Action => ({
  type: FETCH_CURRENT_USER_CANCELLED,
});

// FETCH PERMISSIONS
export const FETCH_PERMISSIONS = "FETCH_PERMISSIONS";
export const FETCH_PERMISSIONS_SUCCESS = "FETCH_PERMISSIONS_SUCCESS";
export const FETCH_PERMISSIONS_FAILED = "FETCH_PERMISSIONS_FAILED";
export const FETCH_PERMISSIONS_CANCELLED = "FETCH_PERMISSIONS_CANCELLED";

export const fetchPermissions = (unitId?: number): Action => ({
  type: FETCH_PERMISSIONS,
  payload: { unitId },
});

export const fetchPermissionsSuccess = (permissions: Permission[]): Action => ({
  type: FETCH_PERMISSIONS_SUCCESS,
  payload: { permissions },
});

export const fetchPermissionsFailed = (error: any): Action => ({
  type: FETCH_PERMISSIONS_FAILED,
  payload: error,
});
export const fetchPermissionsCancelled = (): Action => ({
  type: FETCH_PERMISSIONS_CANCELLED,
});

// LOGOUT USER
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const logout = (callbacks?: ReduxCallbacks): Action => ({
  type: LOGOUT,
  payload: { callbacks },
});

export const logoutSuccess = (): Action => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailed = (): Action => ({
  type: LOGOUT_FAILED,
});
