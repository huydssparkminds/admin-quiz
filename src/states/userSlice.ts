import { createSlice } from "@reduxjs/toolkit";
import { UserAuthDetail, UserDetail } from "../types/user";
import { getUserAuthenticatedDetail } from "../utils/localStore";
import { RootState } from "../types/common";

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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectAuthenticatedDetail = (state: RootState) =>
  state.user.authenticatedDetail;
export const selectUserDetail = (state: RootState) => state.user.userDetail;

export default userSlice.reducer;
