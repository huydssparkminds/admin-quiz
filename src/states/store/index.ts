import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";

import userSlice, { userApi } from "../userSlice";

const reducer = combineReducers({
  user: userSlice,
  [userApi.reducerPath]: userApi.reducer,
});

const store = configureStore({
  reducer,
});

export const apiMiddlewares: Middleware[] = [userApi.middleware];

export default store;
