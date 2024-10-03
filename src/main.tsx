import { createRoot } from "react-dom/client";
import ThemeProvider from "@/components/theme";
import { Provider } from "react-redux";
import store from "@/states/store";
import MainRoute from "@/components/routers";
import "@/assets/styles/global.scss";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <MainRoute />
    </ThemeProvider>
  </Provider>
);
