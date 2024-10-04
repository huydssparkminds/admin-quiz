import { AppShell, NavLink, ScrollArea } from "@mantine/core";
import {
  IconApps,
  IconBrandDatabricks,
  IconCategory2,
  IconGauge,
  IconHelpOctagon,
  IconUsers,
} from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserMenu } from "../../types/user";
import classes from "./style.module.scss";
import { menus } from "../routers/route";

interface NavbarProps {}

const getMenuIcon = (icon: string) => {
  switch (icon) {
    case "gauge":
      return <IconGauge size="1rem" stroke={1.5} />;
    case "question":
      return <IconHelpOctagon size="1rem" stroke={1.5} />;
    case "mana":
      return <IconApps size="1rem" stroke={1.5} />;
    case "users":
      return <IconUsers size="1rem" stroke={1.5} />;
    case "category":
      return <IconCategory2 size="1rem" stroke={1.5} />;
    case "exam":
      return <IconBrandDatabricks size="1rem" stroke={1.5} />;
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
