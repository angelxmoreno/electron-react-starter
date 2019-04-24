
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import createElectronStorage from "redux-persist-electron-storage";

import { rootReducer } from './rootReducers';

import { createLogicMiddleware } from 'redux-logic';
import rootLogics from './rootLogics';

const logicDeps = {}
const logicMiddleware = createLogicMiddleware(rootLogics as []);
const composedMiddleware = composeWithDevTools(applyMiddleware(logicMiddleware));

const persistConfig = {
    key: 'root',
    storage: createElectronStorage()
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, composedMiddleware);
// export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store)
