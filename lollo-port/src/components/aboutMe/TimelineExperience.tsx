import { Image, Timeline, useMantineTheme } from "@mantine/core";
import iconDev from "../../assets/social/brand-github.svg";
import iconIT from "../../assets/generics/icon-it.svg";
import { TimelinePropsCommon } from "./TimelineFormation";
import TimelineCustom from "./TimelineCustom";

const TimelineExperience = ({ isMobile }: TimelinePropsCommon) => {
  const itemsTimeline = {
    sidaFactory: {
      title: "Sida Autosoft Multimedia",
      description: "Frontend web developer",
      periodWorking: "'22 July - currently",
      icon: iconDev,
    },
    elmecFactory: {
      title: "Elmec Informatica",
      description: "IT Support",
      periodWorking: "'22 March to '22 June",
      icon: iconIT,
    },
    incaFactory: {
      title: "Inca Cosmetica",
      description: "IT Support",
      periodWorking: "'21 February to '22 February",
      icon: iconIT,
    },
  };
  const theme = useMantineTheme();

  const listOfItemValue = Object.entries(itemsTimeline);
  return (
    <Timeline active={3} lineWidth={3} bulletSize={22}>
      {listOfItemValue.map(([key, value]) => {
        return (
          <Timeline.Item
            key={key}
            c={theme.colors.blue[7]}
            bullet={<Image src={value.icon} />}
            title={value.title}
            fz={isMobile ? 12 : 22}
          >
            <TimelineCustom key={key} item={value} isMobile={isMobile} />
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};
export default TimelineExperience;
