import { RootState } from "@/types/common";
import { getThemeMode, setThemeMode } from "@/utils/localStore";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Theme = "dark" | "light";

type CommonState = { theme: Theme; title: string };

const initialState: CommonState = {
  theme: getThemeMode(),
  title: "Admin",
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      // setThemeMode(state.theme);
    },
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
      document.title = action.payload;
    },
  },
});

export const { changeTheme, changeTitle } = commonSlice.actions;

export const selectTheme = (state: RootState) => state.common.theme;
export const selectTitle = (state: RootState) => state.common.title;

export default commonSlice.reducer;
