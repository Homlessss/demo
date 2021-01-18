import { ENABLE_LOADING, DISABLE_LOADING } from "./actions";
import { Action } from "../../../models/redux/action";

export const loadingReducer = (
  state: any = { isLoading: false },
  action: Action
) => {
  switch (action.type) {
    case ENABLE_LOADING:
      return {
        isLoading: true,
        opacity: action.payload.opacity || 0.5,
      };
    case DISABLE_LOADING:
      return {
        isLoading: false,
      };

    default:
      return state;
  }
};
