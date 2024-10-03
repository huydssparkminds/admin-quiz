import { AppShell, NavLink, ScrollArea } from "@mantine/core";
import {
  IconAppWindow,
  IconGauge,
  IconReportAnalytics,
  IconStack2,
  IconUsers,
} from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./style.module.scss";
import { UserMenu } from "../../types/user";

interface NavbarProps {}

const getMenuIcon = (icon: string) => {
  switch (icon) {
    case "gauge":
      return <IconGauge size="1rem" stroke={1.5} />;
    case "stack2":
      return <IconStack2 size="1rem" stroke={1.5} />;
    case "reportAnalytics":
      return <IconReportAnalytics size="1rem" stroke={1.5} />;
    case "users":
      return <IconUsers size="1rem" stroke={1.5} />;
    case "appWindow":
      return <IconAppWindow size="1rem" stroke={1.5} />;
    default:
      return null;
  }
};

const checkMenuOpen = (menu: UserMenu, pathname?: string) => {
  if (menu.link === pathname) {
    return true;
  }
  const childrens = menu?.childrens;
  if (!childrens || childrens.length === 0) {
    return false;
  }
  const hasActive: UserMenu[] = childrens.filter((m) =>
    checkMenuOpen(m, pathname)
  );
  return hasActive.length > 0;
};

const renderMenu = (
  menu: UserMenu,
  handleChangePage: (link: string) => void,
  pathname?: string
) => {
  const hasChildren = menu.childrens && menu.childrens.length > 0;
  const active = pathname?.startsWith(menu.link) && !hasChildren;
  const defaultOpen = checkMenuOpen(menu, pathname);

  return (
    <NavLink
      key={menu.link}
      label={menu.label}
      leftSection={menu.icon && getMenuIcon(menu.icon)}
      childrenOffset={20}
      defaultOpened={defaultOpen}
      active={active}
      style={{ fontWeight: "600", borderRadius: "16px", marginBottom: "10px" }}
      onClick={() => !hasChildren && handleChangePage(menu.link)}
    >
      {hasChildren
        ? menu?.childrens?.map((children) =>
            renderMenu(children, handleChangePage, pathname)
          )
        : null}
    </NavLink>
  );
};

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const menus: UserMenu[] = [
    {
      label: "dashboard",
      link: "/",
    },
  ];

  const handleChangePage = (link: string) => {
    navigate(link);
  };

  return (
    <AppShell.Navbar p="md" className={classes.navbar}>
      <ScrollArea>
        {menus.map((menu) => renderMenu(menu, handleChangePage, pathname))}
      </ScrollArea>
    </AppShell.Navbar>
  );
};
export default Navbar;
