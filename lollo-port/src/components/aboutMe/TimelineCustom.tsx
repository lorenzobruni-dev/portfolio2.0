import { Sx, Text } from "@mantine/core";

interface TimelineCustomProps {
  key: string;
  item: {
    icon: string;
    title: string;
    description: string;
    periodWorking: string;
  };
  isMobile: boolean;
}

const TimelineCustom = ({ item, isMobile }: TimelineCustomProps) => {
  const styleSXTexts: Sx = {
    fontSize: isMobile ? 12 : 16,
    fontStyle: "italic",
  };
  const { description, periodWorking } = item;
  return (
    <>
      <Text color="dimmed" sx={styleSXTexts}>
        {description}
      </Text>
      <Text size="xs" mt={4} sx={styleSXTexts}>
        {periodWorking}
      </Text>
    </>
  );
};
export default TimelineCustom;
