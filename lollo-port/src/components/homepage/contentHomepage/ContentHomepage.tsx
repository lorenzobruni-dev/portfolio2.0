import { Button, Flex, Text, useMantineTheme } from "@mantine/core";
import { useLocation } from "wouter";
import { HomepageProps } from "../../../pages/Homepage/Homepage";

const ContentHomepage = ({ isMobile }: HomepageProps) => {
  const theme = useMantineTheme();
  const [, setLocation] = useLocation();

  return (
    <>
      <Flex direction={"column"} gap={10} w={"100%"}>
        <Text
          fz={30}
          fw={400}
          sx={{
            letterSpacing: -2,
            fontFamily: "Coolvetica",
          }}
        >
          Hi, <br />
          I'm Lorenzo Bruni
          <br />
          web developer
        </Text>
        <Text fz={18} color={theme.colors.gray[7]} sx={{ letterSpacing: 5 }}>
          Frontend Developer / React <br />
          Developer
        </Text>
        <Button
          variant="default"
          onClick={() => setLocation("/contact")}
          w={!isMobile ? 350 : "calc(100% - 150px)"}
          sx={{
            backgroundColor: "inherit",
            border: `1px solid ${theme.colors.yellow[3]}`,
            color: theme.colors.yellow[3],
            transition: "all 400ms cubic-bezier(.47,1.64,.41,.8)",
            "&:hover": {
              backgroundColor: "inherit",
              transform: "scale(1.1)",
            },
          }}
        >
          Contact me
        </Button>
      </Flex>
    </>
  );
};
export default ContentHomepage;
