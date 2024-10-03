import { changeTheme, selectTheme } from "@/states/commonSlice";
import { ActionIcon } from "@mantine/core";
import { IconMoon, IconSunHigh } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";

interface LightDarkModeProps {}

const LightDarkMode: React.FunctionComponent<LightDarkModeProps> = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectTheme);
  console.log(themeMode);

  return (
    <ActionIcon
      variant="default"
      autoContrast
      style={{ cursor: "pointer" }}
      onClick={() => dispatch(changeTheme())}
    >
      {themeMode === "light" ? (
        <IconSunHigh style={{ width: "70%", height: "70%" }} />
      ) : (
        <IconMoon style={{ width: "70%", height: "70%" }} />
      )}
    </ActionIcon>
  );
};

export default LightDarkMode;
