import { Image, Timeline, useMantineTheme } from "@mantine/core";
import iconSchool from "../../assets/generics/icon-school.svg";
import TimelineCustom from "./TimelineCustom";

export interface TimelinePropsCommon {
  isMobile: boolean;
}

const TimelineFormation = ({ isMobile }: TimelinePropsCommon) => {
  const itemsTimeline = {
    scuola1: {
      title: "Università degli Studi dell'Insubria",
      description: "IT Degree",
      periodWorking: "'20 August - currently",
      icon: iconSchool,
    },
    scuola2: {
      title:
        "Istituto Statale di Istruzione Superiore 'Città di Luino - Carlo Volontè'",
      description: "IT Science",
      periodWorking: "'16 September - '20 June",
      icon: iconSchool,
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
export default TimelineFormation;
