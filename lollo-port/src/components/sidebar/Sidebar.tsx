import { ActionIcon, Flex, useMantineTheme } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const URL = "/portfolio_lorenzobruni-dev/";
  const handleClick = (action: () => void, index: number) => {
    const newActive = Array(active.length).fill(false);
    newActive[index] = true;
    setActive(newActive);
    action();
  };

  useEffect(() => {
    if (location === `${URL}/`) setActive([true, false, false]);
    else if (location === `${URL}/contact`) setActive([false, true, false]);
    else setActive([false, false, true]);
  }, [location]);

  const actions = [
    { actions: onHomePageIconClick, icon: faHome },
    { actions: onContactMeIconClick, icon: faEnvelope },
    { actions: onAboutMeIconClick, icon: faUser },
  ];

  return (
    <Flex
      direction={"column"}
      wrap={"nowrap"}
      align={"center"}
      h={"100%"}
      justify={"space-around"}
    >
      <Flex gap={30} direction={"column"} align={"center"} justify={"center"}>
        {actions.map((act, index) => (
          <ActionIcon
            key={index}
            size={30}
            sx={{
              "&:hover": {
                transition: "all 400ms cubic-bezier(.47,1.64,.41,.8)",
                transform: "scale(1.1)",
              },
            }}
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
