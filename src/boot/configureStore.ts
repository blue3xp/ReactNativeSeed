import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import {rootReducer} from "./rootReducer";
export default function configureStore(onCompletion: () => void): any {
  let middlewares = [];
  if (__DEV__ === true) {
    middlewares.push(logger);
  }
  middlewares.push(thunk);
  const enhancer = compose(
    applyMiddleware(...middlewares),
  );

  const store = createStore(rootReducer, enhancer);

  return store;
}