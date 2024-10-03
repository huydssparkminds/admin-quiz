import customBaseQuery from "@/utils/httpClient";
import { createSlice } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "../types/common";
import { UserAuthDetail, UserDetail } from "../types/user";
import { getUserAuthenticatedDetail } from "../utils/localStore";

export interface UserState {
  authenticatedDetail: UserAuthDetail;
  userDetail?: UserDetail | null;
}

const initialState: UserState = {
  authenticatedDetail: getUserAuthenticatedDetail(),
  userDetail: {
    id: 10,
    firstName: "Xin",
    lastName: "Nguoiwf",
    email: "Hali@gmail.com",
    role: "admin",
    registerType: "email",
  },
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    getExampleData: builder.query({
      query: () => "/example",
    }),
    getAnotherData: builder.query({
      query: () => "/another",
    }),
  }),
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectAuthenticatedDetail = (state: RootState) =>
  state.user.authenticatedDetail;
export const selectUserDetail = (state: RootState) => state.user.userDetail;

export default userSlice.reducer;
