import store from "@/states/store";

export type IStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type TList<V> = {
  total: number;
  data: V[];
};
