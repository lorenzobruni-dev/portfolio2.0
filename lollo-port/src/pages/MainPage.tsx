import {Box, Burger, Drawer, Flex, Grid, Text, useMantineTheme} from "@mantine/core";
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "./MainPage.module.css";
import Homepage from "./Homepage";
import Contact from "./Contact";
import { useDisclosure, useElementSize } from "@mantine/hooks";
import SidebarMobile from "../components/sidebar/SidebarMobile";
import { useLocationHook } from "../hooks";
import {useSwipeable} from "react-swipeable";

type MainPageProps = {
  location: string;
  isHomepage: boolean;
};

interface PropsRenderComponent {
  location: string;
  isMobile: boolean;
}

const RenderCorrectComponent: React.FC<PropsRenderComponent> = ({
  location,
  isMobile,
}) => {

  const theme = useMantineTheme()
  switch (location) {
    case "/":
      return <Homepage isMobile={isMobile} />;
    case "/about-me":
      return <Flex align={"center"} justify={"center"} h={"100%"}><Text fs={"italic"}  color={theme.colors.gray[6]}>404 Working progress...</Text></Flex>;
    case "/contact":
      return <Contact isMobile={isMobile} />;
    default:
      return <Homepage isMobile={isMobile} />;
  }
};

const MainPage = ({ location, isHomepage }: MainPageProps) => {
  const theme = useMantineTheme();
  const { homePage, contact, aboutMe } = useLocationHook();
  const { ref: refGrid, width } = useElementSize();
  const [opened, { toggle }] = useDisclosure();
  const isMobile = width < 800;

  const handlerOnSwipeRight = useSwipeable({
    onSwipedRight: () => toggle(),
  })

  return (
    <Box {...handlerOnSwipeRight}>
      {isMobile && (
        <Drawer
          opened={opened}
          onClose={toggle}
          closeOnClickOutside
          withCloseButton={false}
        >
          <SidebarMobile
            onAboutMeIconClick={aboutMe}
            onContactMeIconClick={contact}
            onHomePageIconClick={homePage}
            toggle={toggle}
          />
        </Drawer>
      )}

      <Grid
        ref={refGrid}
        data-testid={"chat-page"}
        h={"100vh"}
        columns={15}
        gutter={0}
        styles={{
          inner: { height: "100%" },
          col: {
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "space-between",
          },
        }}
      >
        {!isMobile && (
          <Grid.Col span={1} h={"100vh"} bg={theme.colors.gray[9]}>
            <Sidebar
              onAboutMeIconClick={aboutMe}
              onContactMeIconClick={contact}
              onHomePageIconClick={homePage}
            />
          </Grid.Col>
        )}
        <Grid.Col
          span={isMobile ? 15 : 14}
          className={isHomepage ? styles.home : styles.others}
        >
          {isMobile && (
            <Box sx={{ position: "absolute", top: 10, left: 10, zIndex: 1000 }}>
              <Burger opened={opened} onClick={() => toggle()} />
            </Box>
          )}

          <RenderCorrectComponent location={location} isMobile={isMobile} />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default MainPage;
