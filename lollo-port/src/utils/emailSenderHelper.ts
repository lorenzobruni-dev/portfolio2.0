import emailjs from "@emailjs/browser";
import { MailForm, SERVICE_ID_emailJS, TEMPLATE_ID_emailJS } from "./const";

export function sendEmail(form: MailForm) {
  return emailjs.send(SERVICE_ID_emailJS, TEMPLATE_ID_emailJS, {
    name: form.NomeUtente,
    email: form.MailUtente,
    recipient: form.DescrizioneUtente,
  });
}

export function isAllFieldsAreSetUpCorrectly(form: MailForm) {
  let regexEmail = /.+@.+\.[A-Za-z]+$/;
  if (!(form.NomeUtente && form.MailUtente && form.DescrizioneUtente)) return;

  return (
    form.NomeUtente.length > 2 &&
    regexEmail.test(form.MailUtente) &&
    form.DescrizioneUtente
  );
}
