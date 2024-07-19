import { Flex, Text } from "@mantine/core";
import React from "react";
import { SidebarProps } from "./Sidebar";
import mapValues from "lodash/mapValues";
import { sidebarMapValues } from "../../utils/const";

interface SidebarMobileProps {
  toggle: () => void;
}

type SidebarKey = "homePage" | "contactMe" | "aboutMe" | "myProject";

type ActionItem = {
  action: () => void;
  name: string;
};

export type SidebarMap = Record<SidebarKey, ActionItem>;

const SidebarMobile = (props: SidebarProps & SidebarMobileProps) => {
  const mapSidebar: SidebarMap = mapValues(
    sidebarMapValues(props),
    (mapVal) => {
      return { action: mapVal.action, name: mapVal.name };
    },
  );

  const actionItems = (Object.keys(mapSidebar) as SidebarKey[]).map((key) => {
    return mapSidebar[key];
  });

  return (
    <Flex align={"center"} h={"100%"} justify={"center"}>
      <Flex direction={"column"} gap={40}>
        {actionItems.map((item, key) => {
          return (
            <Text
              key={key}
              fz={14}
              lts={"2"}
              sx={{ cursor: "pointer" }}
              onClick={item.action}
            >
              {item.name}
            </Text>
          );
        })}
      </Flex>
    </Flex>
  );
};
export default SidebarMobile;
