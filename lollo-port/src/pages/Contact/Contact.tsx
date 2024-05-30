import FormValidation from "../../components/contactMe/formValidation/FormValidation";
import { Flex } from "@mantine/core";

export interface CommonProps {
  isMobile: boolean;
}

const Contact = ({ isMobile }: CommonProps) => {
  return (
    <Flex
      justify={"center"}
      direction={"column"}
      mx={25}
      mb={25}
      h={"100%"}
      wrap={"wrap"}
    >
      <FormValidation isMobile={isMobile} />
    </Flex>
  );
};
export default Contact;
