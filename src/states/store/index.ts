import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";

import userSlice, { userApi } from "../userSlice";
import commonSlice from "@/states/commonSlice";

const reducer = combineReducers({
  user: userSlice,
  common: commonSlice,
  [userApi.reducerPath]: userApi.reducer,
});

const store = configureStore({
  reducer,
});

export const apiMiddlewares: Middleware[] = [userApi.middleware];

export default store;
