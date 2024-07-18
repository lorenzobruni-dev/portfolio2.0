import { Box, Burger, Drawer, Grid, useMantineTheme } from "@mantine/core";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./MainPage.module.css";
import Homepage from "../Homepage/Homepage";
import Contact from "../Contact/Contact";
import { useDisclosure, useElementSize } from "@mantine/hooks";
import SidebarMobile from "../../components/sidebar/SidebarMobile";
import { useLocationHook } from "../../utils/hooks";
import About from "../About/About";

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
  switch (location) {
    case "/":
      return <Homepage isMobile={isMobile} />;
    case "/about-me":
      return <About isMobile={isMobile} />;
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

  return (
    <>
      {isMobile && (
        <Drawer.Root opened={opened} onClose={toggle} closeOnClickOutside>
          <Drawer.Content>
            <SidebarMobile
              onAboutMeIconClick={aboutMe}
              onContactMeIconClick={contact}
              onHomePageIconClick={homePage}
              toggle={toggle}
            />
          </Drawer.Content>
        </Drawer.Root>
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
    </>
  );
};

export default MainPage;
