import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic, rootReducer } from "./modules/root";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const epicMiddleware = createEpicMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(persistedReducer, applyMiddleware(epicMiddleware));
  const persistor = persistStore(store);

  epicMiddleware.run(rootEpic);

  return { store, persistor };
}
