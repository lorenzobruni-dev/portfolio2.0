import { Flex, Stack, Text, useMantineTheme } from "@mantine/core";
import React from "react";
import TimelineExperience from "../../components/aboutMe/TimelineExperience";
import TimelineFormation from "../../components/aboutMe/TimelineFormation";
import { CommonProps } from "../Contact/Contact";

const About = ({ isMobile }: CommonProps) => {
  const theme = useMantineTheme();
  return (
    <Flex
      align={"center"}
      justify={"center"}
      h={"100%"}
      wrap={"wrap"}
      mx={isMobile ? 20 : 0}
    >
      <Stack spacing={"md"}>
        <Flex direction={"column"} gap={8}>
          <Text
            ta={"left"}
            fz={isMobile ? 24 : 50}
            color={theme.colors.blue[7]}
            fw={400}
            mb={16}
            sx={{
              width: "100%",
              height: "100%",
              letterSpacing: -3,
            }}
          >
            🖥 Working experience
          </Text>
          <TimelineExperience isMobile={isMobile} />
        </Flex>
        <Flex direction={"column"} gap={8}>
          <Text
            ta={"left"}
            fz={isMobile ? 24 : 50}
            color={theme.colors.blue[7]}
            fw={400}
            mb={16}
            sx={{
              width: "100%",
              height: "100%",
              letterSpacing: -3,
            }}
          >
            👨‍🏫 Formation
          </Text>
          <TimelineFormation isMobile={isMobile} />
        </Flex>
      </Stack>
    </Flex>
  );
};

export default About;
