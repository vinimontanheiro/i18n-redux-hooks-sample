import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import Reducer from './reducer';

const rootReducer = combineReducers(Reducer);
const persistConfig = {
  key: `any-key`,
  storage,
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(pReducer);
export const persistor = persistStore(store);
