import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { loadingReducer } from "./loading";
import {
  authReducer,
  loginEpic,
  logoutEpic,
  onFetchUserSuccessEpic,
  fetchPermissionsEpic,
  fetchUserEpic,
} from "./auth";

export const rootEpic: any = combineEpics(
  loginEpic,
  logoutEpic,
  fetchUserEpic,
  onFetchUserSuccessEpic,
  fetchPermissionsEpic
);

export const rootReducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
});
