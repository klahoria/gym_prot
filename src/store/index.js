import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducre/index";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// export const store = createStore(reducer, applyMiddleware(thunk));
//
// store.subscribe((e) => console.log(e));











export default () => {
  // let store_configure = configureStore({
  //   reducer: persistedReducer
  // })
  let store = createStore(persistReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};
