import { Flex, Sx, Text } from "@mantine/core";
import React from "react";
import { SidebarProps } from "./Sidebar";

interface SidebarMobileProps {
  toggle: () => void;
}

const SidebarMobile = (props: SidebarProps & SidebarMobileProps) => {
  const {
    toggle,
    onHomePageIconClick,
    onContactMeIconClick,
    onAboutMeIconClick,
  } = props;

  const cursorPointerSidebarMobile: Sx = {
    cursor: "pointer",
  };

  return (
    <Flex align={"center"} h={"100%"} justify={"center"}>
      <Flex direction={"column"} gap={40}>
        <Text
          fz={14}
          lts={"2"}
          sx={cursorPointerSidebarMobile}
          onClick={() => {
            onHomePageIconClick();
            toggle();
          }}
        >
          home/
        </Text>
        <Text
          fz={14}
          lts={"2"}
          sx={cursorPointerSidebarMobile}
          onClick={() => {
            onContactMeIconClick();
            toggle();
          }}
        >
          contact/
        </Text>
        <Text
          fz={14}
          lts={"2"}
          sx={cursorPointerSidebarMobile}
          onClick={() => {
            onAboutMeIconClick();
            toggle();
          }}
        >
          about/
        </Text>
      </Flex>{" "}
    </Flex>
  );
};
export default SidebarMobile;
