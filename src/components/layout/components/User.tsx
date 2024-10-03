import { Avatar, Menu } from "@mantine/core";
import { IconLogout, IconSettings } from "@tabler/icons-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserDetail } from "../../../states/userSlice";

const { Target, Dropdown, Item, Divider, Label } = Menu;

interface UserProps {}

const User: React.FunctionComponent<UserProps> = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUserDetail);
  const dispatch = useDispatch();

  // const hanldeLogout = () => {
  //   dispatch(logout({ toastError: true }));
  // };

  // useEffect(() => {
  //   dispatch(getUserDetail({}));
  // }, []);

  return (
    <Menu offset={5} arrowPosition="center" shadow="xs" width={200}>
      <Target>
        <Avatar
          src={user?.avatar}
          alt={`${user?.firstName}${user?.lastName}`}
          color="red"
          style={{ cursor: "pointer" }}
        >
          {user
            ? `${user?.firstName?.substring(0, 1)}${user?.lastName?.substring(
                0,
                1
              )}`
            : null}
        </Avatar>
      </Target>
      <Dropdown>
        <Label>{"Profile"}</Label>
        <Item
          leftSection={<IconSettings style={{ width: "20px" }} />}
          onClick={() => navigate("/account-setting")}
        >
          {"Settings"}
        </Item>
        <Divider />
        <Item leftSection={<IconLogout style={{ width: "20px" }} />}>
          'Log Out'
        </Item>
      </Dropdown>
    </Menu>
  );
};

export default User;
