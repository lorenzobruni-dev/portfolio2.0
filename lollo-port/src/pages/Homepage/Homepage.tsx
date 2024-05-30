import { Flex } from "@mantine/core";
import ContentHomepage from "../../components/homepage/contentHomepage/ContentHomepage";
import styleHomepage from "./Homepage.module.css";

export interface HomepageProps {
  isMobile: boolean;
}

const Homepage = ({ isMobile }: HomepageProps) => {
  return (
    <Flex
      className={styleHomepage.home}
      direction={"column"}
      align={"center"}
      h={"100%"}
      justify={"space-evenly"}
      pos={"relative"}
    >
      <ContentHomepage isMobile={isMobile} />
    </Flex>
  );
};
export default Homepage;
