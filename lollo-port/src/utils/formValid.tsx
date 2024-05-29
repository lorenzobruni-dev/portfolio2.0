import { UseFormReturnType } from "@mantine/form";
import emailjs from "@emailjs/browser";
import {MailForm} from "../const";

type FormType = UseFormReturnType<
  { name: string; email: string; description: string },
  (values: { name: string; email: string; description: string }) => {
    name: string;
    email: string;
    description: string;
  }
>;
export const handleSend = async (
  e: any,
  setButtonClicked: React.Dispatch<React.SetStateAction<boolean>>,
  form: MailForm,
) => {
  const {DescrizioneUtente , NomeUtente , MailUtente} = form
  setTimeout(() => {
    setButtonClicked(false);
  }, 3000);
  e.preventDefault();
  const serviceId = "service_4dvul28";
  const templateId = "template_4r36c5a";
  try {
    await emailjs.send(serviceId, templateId, {
      name: NomeUtente,
      email: MailUtente,
      recipient: DescrizioneUtente,
    }).then(() =>   setButtonClicked(true));
  } catch (error) {
    console.log(error);
  }
};
