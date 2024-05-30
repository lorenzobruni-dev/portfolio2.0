import { Image, Text, Timeline, useMantineTheme } from "@mantine/core";
import iconSchool from "../../assets/generics/icon-school.svg";

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

  const arrayOfFactory = Object.entries(itemsTimeline);
  return (
    <Timeline active={3} lineWidth={3} bulletSize={22}>
      {arrayOfFactory.map(([key, value]) => {
        return (
          <Timeline.Item
            key={key}
            c={theme.colors.blue[7]}
            bullet={<Image src={value.icon} />}
            title={value.title}
            fz={isMobile ? 14 : 22}
          >
            <Text color="dimmed" fz={12}>
              {value.description}
            </Text>
            <Text size="xs" mt={4} fz={12}>
              {value.periodWorking}
            </Text>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};
export default TimelineFormation;
