import { selectTheme } from "@/states/commonSlice";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";
import { useSelector } from "react-redux";

type ThemeProviderProps = { children: React.ReactNode | React.ReactNode[] };

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const customTheme = createTheme({
    primaryColor: "yellow",
    colors: {
      yellow: [
        "#9E86FF",
        "#9E86FF",
        "#9E86FF",
        "#9E86FF",
        "#9E86FF",
        "#9E86FF",
        "#9E86FF",
        "#9E86FF",
        "#9E86FF",
        "#9E86FF",
      ],
    },
  });

  const theme = useSelector(selectTheme);

  return (
    <MantineProvider forceColorScheme={theme} theme={customTheme}>
      <NavigationProgress />
      <Notifications position="top-right" zIndex={1000} withinPortal={false} />
      {children}
    </MantineProvider>
  );
}
