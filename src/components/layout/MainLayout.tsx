import { AppShell, Container, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Breadcrumb from "./components/PageTitle";

interface MainLayoutProps {}

const MainLayout: React.FunctionComponent<MainLayoutProps> = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <Header
        mobileOpened={mobileOpened}
        desktopOpened={desktopOpened}
        toggleMobile={toggleMobile}
        toggleDesktop={toggleDesktop}
      />
      <Navbar />
      <AppShell.Main>
        <Container fluid px={0}>
          <Stack>
            <Breadcrumb />
            <Outlet />
          </Stack>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default MainLayout;
