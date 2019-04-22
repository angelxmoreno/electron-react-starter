
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import createElectronStorage from "redux-persist-electron-storage";

import { rootReducer } from './rootReducers';
const persistConfig = {
    key: 'root',
    storage: createElectronStorage()
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store)
