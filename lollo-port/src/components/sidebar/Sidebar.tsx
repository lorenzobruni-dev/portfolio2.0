import { ActionIcon, Box, Flex, Image, useMantineTheme } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconDev from "../../assets/sidebar/icon-dev.svg.png";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

type SidebarProps = {
  onHomePageIconClick: () => void;
  onAboutMeIconClick: () => void;
  onContactMeIconClick: () => void;
};
const Sidebar = ({
  onAboutMeIconClick,
  onHomePageIconClick,
  onContactMeIconClick,
}: SidebarProps) => {
  const theme = useMantineTheme();
  const [location] = useLocation();
  const [active, setActive] = useState([false, false, false]);
  const handleClick = (action: () => void, index: number) => {
    const newActive = Array(active.length).fill(false);
    newActive[index] = true;
    setActive(newActive);
    action();
  };

  useEffect(() => {
    if (location === "/") setActive([true, false, false]);
    else if (location === "/contact") setActive([false, true, false]);
    else setActive([false, false, true]);
  }, [location]);

  const actions = [
    { actions: onHomePageIconClick, icon: faHome },
    { actions: onContactMeIconClick, icon: faEnvelope },
    { actions: onAboutMeIconClick, icon: faUser },
  ];

  console.log(active);
  return (
    <Flex
      direction={"column"}
      wrap={"nowrap"}
      align={"center"}
      h={"100%"}
      justify={"space-around"}
    >
      <Box p={5} pos={"absolute"} top={0}>
        <Image src={iconDev} />
      </Box>
      <Flex gap={30} direction={"column"} align={"center"} justify={"center"}>
        {actions.map((act, index) => (
          <ActionIcon
            size={30}
            onClick={() => handleClick(act.actions, index)}
            c={active[index] ? theme.colors.yellow[3] : "none"}
          >
            <FontAwesomeIcon size={"lg"} icon={act.icon} />
          </ActionIcon>
        ))}
      </Flex>
    </Flex>
  );
};
export default Sidebar;
