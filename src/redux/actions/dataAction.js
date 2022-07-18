import { ActionType } from "../contanst/action-type";

export const setDatas = (datas) => {
  return {
    type: ActionType.GET_DATA,
    payload: datas,
  };
};

export const postDatas = (data) => {
  return {
    type: ActionType.POST_DATA,
    payload: data,
  };
};

export const putDatas = (data) => {
  return {
    type: ActionType.PUT_DATA,
    payload: data,
  };
};
