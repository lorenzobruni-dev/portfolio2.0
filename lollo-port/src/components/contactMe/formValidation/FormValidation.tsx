import {
  Box,
  Button,
  Sx,
  Text,
  Textarea,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { handleSend } from "../../../utils/formValid";

const FormValidation = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const theme = useMantineTheme();
  const styleInputForm: Sx = {
    input: { fontSize: 16, borderTop: 0, backgroundColor: "none" },
    error: { fontSize: 16 },
  };
  const form = useForm({
    validateInputOnChange: true,
    initialValues: { name: "", email: "", description: "" },
    validate: {
      name: (value: string) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
      description: (value: string) =>
        value.length <= 0
          ? "Tell me something about your job opportunity"
          : null,
    },
  });

  useEffect(() => {
    emailjs.init("NwEaXwEcudX7XpxtT");
  }, []);

  return (
    <Box maw={500} miw={300}>
      <Text
        ta={"left"}
        fz={50}
        color={theme.colors.blue[7]}
        fw={400}
        sx={{
          letterSpacing: -3,
          fontFamily: "Coolvetica",
        }}
      >
        <h2>Get in touch</h2>
      </Text>
      <TextInput
        placeholder="Name"
        sx={styleInputForm}
        {...form.getInputProps("name")}
      />
      <TextInput
        mt={10}
        placeholder="Email"
        sx={styleInputForm}
        {...form.getInputProps("email")}
      />
      <Textarea
        mt={10}
        placeholder="Autosize with no rows limit"
        autosize
        minRows={2}
        sx={{ input: { fontSize: 1 } }}
        {...form.getInputProps("description")}
      />
      <Button
        w={"100%"}
        disabled={buttonClicked}
        type="submit"
        mt="sm"
        onClick={(e) => handleSend(e, setButtonClicked, form)}
      >
        Submit
      </Button>
    </Box>
  );
};
export default FormValidation;
