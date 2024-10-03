import { UserAuthDetail } from "../types/user";

const USER_AUTHENTICATED_DETAIL_KEY = "user-authenticated-detail";

export const getUserAuthenticatedDetail = (): UserAuthDetail => {
  const json = localStorage.getItem(USER_AUTHENTICATED_DETAIL_KEY) as string;
  return json ? JSON.parse(json) : {};
};

export const setUserAuthenticatedDetail = (data: UserAuthDetail) => {
  localStorage.setItem(USER_AUTHENTICATED_DETAIL_KEY, JSON.stringify(data));
};
