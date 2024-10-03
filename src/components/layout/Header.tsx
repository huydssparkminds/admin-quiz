import { AppShell, Burger, Flex, Group, Image } from "@mantine/core";
import Logo from "../../assets/react.svg";
import User from "./components/User";

interface HeaderProps {
  mobileOpened: boolean;
  desktopOpened: boolean;
  toggleMobile: () => void;
  toggleDesktop: () => void;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  mobileOpened,
  desktopOpened,
  toggleDesktop,
  toggleMobile,
}) => {
  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Flex gap="sm" justify="flex-start" align="center">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Image h={40} w={110} fit="contain" src={Logo} />
        </Flex>
        <Flex gap="lg" justify="flex-end" align="center">
          <User />
        </Flex>
      </Group>
    </AppShell.Header>
  );
};

export default Header;
