import { ActionType } from "../contanst/action-type";

const initialState = {
  datas: [],
};

export const dataGetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.GET_DATA:
      return { ...state, datas: payload };
    default:
      return state;
  }
};

export const dataPostReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.POST_DATA:
      return { state, data: payload };
    default:
      return state;
  }
};

export const dataPutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.PUT_DATA:
      return { state, data: payload };
    default:
      return state;
  }
};
