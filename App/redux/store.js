import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {todoListReducer} from '../redux/reducers/todoReducers';
import {userInfoReducer} from '../redux/reducers/userReducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  todoList: todoListReducer,
  userInfoData: userInfoReducer,
});

const initialState = {};

const middleware = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middleware);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(middlewareEnhancer),
);

export const persistor = persistStore(store);
