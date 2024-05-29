import {
    Box,
    Button,
    Flex, Image,
    Sx,
    Text,
    Textarea,
    TextInput,
    useMantineTheme,
} from "@mantine/core";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { handleSend } from "../../../utils/formValid";
import { MailForm } from "../../../const";
import iconInsta from "../../../assets/social/brand-instagram.svg"
import iconGithub from "../../../assets/social/brand-github.svg"
import iconLinkedin from "../../../assets/social/brand-linkedin.svg"
import {ContactProps} from "../../../pages/Contact";



const FormValidation = ({isMobile}:ContactProps) => {
    const [buttonClicked, setButtonClicked] = useState(false);
    const theme = useMantineTheme();

    const styleInputForm: Sx = {
        input: { fontSize: 16, borderTop: 0, backgroundColor: "none", border: "1px solid #9ea7b5" ,borderRadius: 8 },
    };

    const styleSocial :Sx = {
        cursor: 'pointer'
    }

    const [form, setForm] = useState<MailForm>({ MailUtente: '', NomeUtente: '', DescrizioneUtente: '' });

    useEffect(() => {
        emailjs.init("NwEaXwEcudX7XpxtT");
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSend(e, setButtonClicked, form);
    };

    const targetBlank = (url: string) => {
        window.open(url , '_blank')
    }


    return (
      <Flex
        align={"center"}
        direction={isMobile ? "column" : "row"}
        sx={{ justifyContent: "center" }}
        gap={8}
      >
        <Flex
          direction={isMobile ? "row" : "column"}
          h={"100%"}
          align={"center"}
          justify={"center"}
          gap={8}
        >
          <Image
            src={iconInsta}
            w={25}
            h={25}
            sx={styleSocial}
            onClick={() =>
              targetBlank("https://www.instagram.com/brunilorenzoo/")
            }
          />
          <Image
            src={iconGithub}
            w={25}
            h={25}
            sx={styleSocial}
            onClick={() => targetBlank("https://github.com/lorenzobruni-dev")}
          />
          <Image
            src={iconLinkedin}
            w={25}
            h={25}
            sx={styleSocial}
            onClick={() =>
              targetBlank("https://www.linkedin.com/in/lorenzo-b-945073155/")
            }
          />
        </Flex>
        <Flex
          align={"center"}
          direction={"column"}
          gap={12}
          miw={200}
          maw={500}
        >
          <Text
            ta={"left"}
            fz={50}
            color={theme.colors.blue[7]}
            fw={400}
            mb={16}
            sx={{
              width: "100%",
              height: "100%",
              letterSpacing: -3,
              fontFamily: "Coolvetica",
            }}
          >
            👋 Hey yo!💻
          </Text>
          <Text fz={14} fw={400} c={theme.colors.gray[6]}>
            If you have an interesting idea, a job offer, or a project that you
            would like to start, if you want to ask me anything, or if you just
            want to say hello, contact me!
          </Text>
          <Box w={"100%"} onSubmit={handleSubmit}>
            <TextInput
              variant={"unstyled"}
              placeholder="Name"
              name="NomeUtente"
              value={form.NomeUtente}
              onChange={handleInputChange}
              sx={styleInputForm}
              mb={10}
            />
            <TextInput
              variant={"unstyled"}
              placeholder="Email"
              name="MailUtente"
              value={form.MailUtente}
              onChange={handleInputChange}
              sx={styleInputForm}
              mb={10}
            />
            <Textarea
              variant={"unstyled"}
              placeholder="Type a short caption..."
              autosize
              name="DescrizioneUtente"
              value={form.DescrizioneUtente}
              onChange={handleInputChange}
              minRows={2}
              maxRows={4}
              p={8}
              sx={{ border: "1px solid #9ea7b5" ,borderRadius: 8  }}
            />
            <Button
              w={"100%"}
              disabled={buttonClicked}
              mt="sm"
              sx={{
                backgroundColor: "inherit",
                border: `1px solid ${theme.colors.yellow[3]}`,
                color: theme.colors.yellow[3],
                transition: "all 400ms cubic-bezier(.47,1.64,.41,.8)",
              }}
            >
              Invia
            </Button>
          </Box>
        </Flex>
      </Flex>
    );
};
export default FormValidation;
