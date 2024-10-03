import { Theme } from "@/states/commonSlice";
import { UserAuthDetail } from "../types/user";

const USER_AUTHENTICATED_DETAIL_KEY = "user-authenticated-detail";
const THEME_MODE_KEY = "theme-mode";
export const getUserAuthenticatedDetail = (): UserAuthDetail => {
  const json = localStorage.getItem(USER_AUTHENTICATED_DETAIL_KEY) as string;
  return json ? JSON.parse(json) : {};
};

export const setUserAuthenticatedDetail = (data: UserAuthDetail) => {
  localStorage.setItem(USER_AUTHENTICATED_DETAIL_KEY, JSON.stringify(data));
};
export const getThemeMode = (): Theme => {
  return (localStorage.getItem(THEME_MODE_KEY) as Theme) || "dark";
};

export const setThemeMode = (mode: Theme) => {
  localStorage.setItem(THEME_MODE_KEY, mode);
};
