import { combineReducers } from "redux";

import examplesReducer from "../features/example/redux/reducer";
import listReducer from "../features/exampleList/redux/reducer";


const reducerMap = {
  examples: examplesReducer,
  list:listReducer
  };
export const rootReducer =  combineReducers(reducerMap);
export type RootState = ReturnType<typeof rootReducer>

