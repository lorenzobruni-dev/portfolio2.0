import {
  Box,
  Button,
  Flex,
  Image,
  Sx,
  Text,
  Textarea,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import emailjs from "@emailjs/browser";
import React, { useEffect, useState } from "react";
import { MailForm } from "../../../utils/const";
import iconInsta from "../../../assets/social/brand-instagram.svg";
import iconGithub from "../../../assets/social/brand-github.svg";
import iconLinkedin from "../../../assets/social/brand-linkedin.svg";
import { CommonProps } from "../../../pages/Contact/Contact";
import { toastMessageWithIcon } from "../../../utils/toastHelper";
import {
  isAllFieldsAreSetUpCorrectly,
  sendEmail,
} from "../../../utils/emailSenderHelper";

const FormValidation = ({ isMobile }: CommonProps) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const theme = useMantineTheme();
  const [form, setForm] = useState<MailForm>({
    MailUtente: "",
    NomeUtente: "",
    DescrizioneUtente: "",
  });

  const styleInputForm: Sx = {
    input: {
      fontSize: 16,
      border: "1px solid #9ea7b5",
      borderRadius: 8,
      backgroundColor: theme.colors.gray[6],
    },
    error: {
      backgroundColor: "red",
    },
  };

  const styleSocial: Sx = {
    cursor: "pointer",
    ...(isMobile
      ? {
          width: 24,
          height: 24,
          marginBottom: 24,
        }
      : {}),
  };

  useEffect(() => {
    setButtonDisabled(!Boolean(isAllFieldsAreSetUpCorrectly(form)));
  }, [form]);

  useEffect(() => {
    const emailServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    if (emailServiceId) emailjs.init(emailServiceId);
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const resetAllFields = () => {
    setForm({ MailUtente: "", DescrizioneUtente: "", NomeUtente: "" });
  };

  const handleSubmit = () => {
    setButtonDisabled(true);
    setLoading(true);
    if (isAllFieldsAreSetUpCorrectly(form))
      sendEmail(form).then(() => {
        setLoading(false);
        resetAllFields();
        toastMessageWithIcon("Messaggio inoltrato correttamente");
      });
  };

  const targetBlank = (url: string) => {
    window.open(url, "_blank");
  };

  console.log(form);

  return (
    <Flex
      align={"center"}
      direction={isMobile ? "column" : "row"}
      sx={{ justifyContent: "center" }}
      gap={isMobile ? 8 : 32}
    >
      <Flex align={"center"} direction={"column"} gap={12} miw={200} maw={500}>
        <Text
          ta={"center"}
          fz={isMobile ? 32 : 50}
          color={"#c5d9ca"}
          fw={400}
          mb={12}
          sx={{
            width: "100%",
            height: "100%",
            letterSpacing: -3,
          }}
        >
          Hey yo!💻👋
        </Text>
        <Text fz={14} fw={400} c={theme.colors.gray[6]}>
          If you have an interesting idea, a job offer, or a project that you
          would like to start, if you want to ask me anything, or if you just
          want to say hello, contact me!
        </Text>
        <Box w={"100%"}>
          <TextInput
            variant={"filled"}
            placeholder="Name"
            name="NomeUtente"
            value={form.NomeUtente}
            onChange={handleInputChange}
            sx={styleInputForm}
            mb={10}
          />
          <TextInput
            variant={"filled"}
            placeholder="Email"
            name="MailUtente"
            value={form.MailUtente}
            onChange={handleInputChange}
            sx={styleInputForm}
            mb={10}
          />
          <Textarea
            variant="filled"
            placeholder="Type a short caption..."
            autosize
            name="DescrizioneUtente"
            value={form.DescrizioneUtente}
            onChange={handleInputChange}
            minRows={2}
            maxRows={4}
            sx={(theme) => ({
              "& .mantine-Textarea-root": {
                border: "1px solid #9ea7b5",
                borderRadius: 8,
                backgroundColor: theme.colors.gray[6],
              },
              "& .mantine-Textarea-input": {
                backgroundColor: theme.colors.gray[6],
                fontSize: 16,
              },
              "textarea::-webkit-scrollbar": {
                width: 12,
              },

              "textarea::-webkit-scrollbar-thumb": {
                backgroundColor: "darkgrey",
                borderRadius: 3,
                outline: " 1px solid slategrey",
              },
            })}
          />
          <Box
            sx={{
              cursor: buttonDisabled ? "not-allowed" : "pointer",
            }}
          >
            <Button
              w={"100%"}
              loading={loading}
              disabled={buttonDisabled}
              mt="sm"
              variant={"outline"}
              onClick={handleSubmit}
              sx={{
                backgroundColor: "inherit",
                border: `1px solid ${theme.colors.yellow[3]}`,
                color: theme.colors.yellow[3],
                transition: "all 400ms cubic-bezier(.47,1.64,.41,.8)",
              }}
            >
              {loading ? "" : "Submit"}
            </Button>
          </Box>
        </Box>
        <Flex direction={"row"} h={"100%"} align={"center"} gap={8}>
          <Image
            src={iconInsta}
            sx={styleSocial}
            onClick={() =>
              targetBlank("https://www.instagram.com/brunilorenzoo/")
            }
          />
          <Image
            src={iconGithub}
            sx={styleSocial}
            onClick={() => targetBlank("https://github.com/lorenzobruni-dev")}
          />
          <Image
            src={iconLinkedin}
            sx={styleSocial}
            onClick={() =>
              targetBlank("https://www.linkedin.com/in/lorenzo-b-945073155/")
            }
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default FormValidation;
