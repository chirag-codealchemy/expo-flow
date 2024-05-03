import useReducer from './user';
import * as reactRedux from 'react-redux';
import {persistReducer} from 'redux-persist';
import {TypedUseSelectorHook} from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {key: 'root', storage: AsyncStorage};

const combineReducer = combineReducers({user: useReducer});

const persistedReducer = persistReducer(persistConfig, combineReducer);

export const store = configureStore({reducer: persistedReducer});

export const persistStorage = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = reactRedux.useDispatch;

export const useSelector: TypedUseSelectorHook<RootState> =
  reactRedux.useSelector;
