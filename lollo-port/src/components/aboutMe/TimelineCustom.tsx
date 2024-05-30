import { Image, Text, Timeline, useMantineTheme } from "@mantine/core";

interface TimelineCustomProps {
  key: string;
  item: {
    icon: string;
    title: string;
    description: string;
    periodWorking: string;
  };
}

const TimelineCustom = ({ item, key }: TimelineCustomProps) => {
  const theme = useMantineTheme();
  const { title, icon, description, periodWorking } = item;
  return (
    <Timeline.Item
      key={key}
      c={theme.colors.blue[7]}
      bullet={<Image src={icon} />}
      title={title}
      fz={22}
    >
      <Text color="dimmed" fz={14}>
        {description}
      </Text>
      <Text size="xs" mt={4}>
        {periodWorking}
      </Text>
    </Timeline.Item>
  );
};
export default TimelineCustom;
