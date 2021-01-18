import { Action } from "../../../models/redux/action";

export const ENABLE_LOADING = "ENABLE_LOADING";
export const DISABLE_LOADING = "DISABLE_LOADING";

export const enableLoading = (opacity?: number): Action => ({
  type: ENABLE_LOADING,
  payload: { opacity },
});

export const disableLoading = () => ({
  type: DISABLE_LOADING,
});
