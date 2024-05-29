import FormValidation from "../components/contactMe/formValidation/FormValidation";
import { Flex } from "@mantine/core";

const Contact = () => {
  return (
    <Flex
      justify={"center"}
      direction={"column"}
      mx={25}
      mb={25}
      h={"100%"}
      wrap={"wrap"}
    >
      <FormValidation />
    </Flex>
  );
};
export default Contact;
