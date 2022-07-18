import { combineReducers } from "redux";
import { dataGetReducer, dataPostReducer, dataPutReducer } from "./dataReducer";

const reducers = combineReducers({
  getallDatas: dataGetReducer,
  postdatas: dataPostReducer,
  putDatas: dataPutReducer,
});
export default reducers;
