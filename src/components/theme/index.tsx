import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { NavigationProgress } from "@mantine/nprogress";

type ThemeProviderProps = { children: React.ReactNode | React.ReactNode[] };

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const customTheme = createTheme({
    primaryColor: "yellow",
    colors: {
      yellow: [
        "#f6a710",
        "#f6a710",
        "#f6a710",
        "#f6a710",
        "#f6a710",
        "#f6a710",
        "#f6a710",
        "#f6a710",
        "#f6a710",
        "#f6a710",
      ],
    },
  });

  return (
    <MantineProvider forceColorScheme={"dark"} theme={customTheme}>
      <NavigationProgress />
      <Notifications position="top-right" zIndex={1000} withinPortal={false} />
      {children}
    </MantineProvider>
  );
}
