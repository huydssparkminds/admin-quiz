import { selectTitle } from "@/states/commonSlice";
import { Breadcrumbs, Group, Text } from "@mantine/core";
import { useSelector } from "react-redux";

interface BreadcrumbProps {}

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({ ...props }) => {
  const title = useSelector(selectTitle);

  return (
    <Group mb={10}>
      <Breadcrumbs {...props}>
        <Text fw={700} color="yellow" size="lg">
          {title}
        </Text>
      </Breadcrumbs>
    </Group>
  );
};

export default Breadcrumb;
