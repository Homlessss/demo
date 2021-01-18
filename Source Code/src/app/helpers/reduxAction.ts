import { Action } from "../models/redux/action";
import { ListState } from "../models/redux/listState";
import { DEFAULT_PAGE_SIZE } from "../constants/pagination";

export const fetchListState = (action: Action) => {
  return {
    list: [],
    loading: true,
    ...action.payload,
  };
};

export const baseFetchListState: <T>() => ListState<T> = () => ({
  list: [],
  query: {
    per_page: DEFAULT_PAGE_SIZE,
    page: 1,
    filter: {},
  },
  error: null,
  loading: false,
});

export const fetchListStateSuccess = (action: Action, state: ListState) => {
  if (action.payload.response) {
    for (let key of action.payload.response.content) {
      for (let x in key) {
        if (key[x] === null) {
          key[x] = "";
        }
        if (x === "agency") {
          key["isAgency"] = `${key[x]}`;
          delete key.agency;
        }
      }
    }
    return {
      ...state,
      list: [...action.payload.response.content],
      loading: false,
    };
  }
  return {
    ...state,
    list: [action.payload],
    loading: false,
  };
};

export const fetchListStateFailed = (action: Action, state: ListState) => {
  return {
    ...state,
    list: [],
    loading: false,
    error: action.payload,
  };
};

// ADD

export const addInit = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: true,
  };
};

export const addSuccess = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: false,
  };
};
export const addFailed = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};

// EDIT

export const editInit = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: true,
  };
};

export const editSuccess = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: false,
  };
};

export const editFailed = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};

// DELETE

export const deleteInit = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: true,
  };
};

export const deleteSuccess = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: false,
  };
};

export const deleteFailed = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};

// ADD SHIP SCHEDULE

export const addShipScheduleInit = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: true,
  };
};

export const addShipScheduleSuccess = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: false,
  };
};
export const addShipScheduleFailed = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};

// DELETE SHIP SCHEDULE

export const deleteShipScheduleInit = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: true,
  };
};

export const deleteShipScheduleSuccess = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: false,
  };
};

export const deleteShipScheduleFailed = (action: Action, state: ListState) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};
