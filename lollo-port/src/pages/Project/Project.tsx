import { CommonProps } from "../Contact/Contact";
import { Anchor, Breadcrumbs, Flex, useMantineTheme } from "@mantine/core";

const Project = ({ isMobile }: CommonProps) => {
  const theme = useMantineTheme();
  const items = [
    { title: "Projects", href: "#" },
    { title: "First", href: "#first" },
    { title: "Second", href: "#second" },
  ].map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      sx={{ fontStyle: "italic", color: theme.colors.gray[6] }}
    >
      {item.title}
    </Anchor>
  ));
  return (
    <Flex
      align={"flex-start"}
      justify={isMobile ? "center" : "unset"}
      sx={{ overflow: "hidden" }}
      wrap={"wrap"}
      my={isMobile ? 30 : 10}
      mx={20}
    >
      <Breadcrumbs separator="/" mt="xs">
        {items}
      </Breadcrumbs>
    </Flex>
  );
};
export default Project;
