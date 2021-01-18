import { Action } from "../models/redux/action";
import { log } from "./log";

export const onEpicSuccess = (action: Action, data: any, next: any) => {
  if (action.payload.callbacks) {
    if (action.payload.callbacks.onSuccess) {
      action.payload.callbacks.onSuccess(data);
    }
  }
  return next;
};

export const onEpicFailed = (action: Action, data: any, next: any) => {
  log("fetch failed");
  if (action.payload.callbacks) {
    if (action.payload.callbacks.onFailed) {
      action.payload.callbacks.onFailed(data);
    }
  }
  return next;
};
