import iconLinkedin from "../assets/social/brand-linkedin.svg";
import iconInsta from "../assets/social/brand-instagram.svg";
import iconGithub from "../assets/social/brand-github.svg";
import { SidebarMap } from "../components/sidebar/SidebarMobile";

export type MailForm = {
  NomeUtente?: string;
  MailUtente?: string;
  DescrizioneUtente?: string;
};

type SidebarActions = {
  onHomePageIconClick: () => void;
  onContactMeIconClick: () => void;
  onAboutMeIconClick: () => void;
  onProjectIconClick: () => void;
  toggle: () => void;
};

export type SocialLink = {
  icon: string;
  onClickAction: () => void;
};
const targetBlank = (url: string) => {
  window.open(url, "_blank");
};

export const socialLinkList = {
  Linkedin: {
    icon: iconLinkedin,
    onClickAction: () =>
      targetBlank("https://www.linkedin.com/in/lorenzo-b-945073155/"),
  },
  Instagram: {
    icon: iconInsta,
    onClickAction: () =>
      targetBlank("https://www.instagram.com/brunilorenzoo/"),
  },
  Github: {
    icon: iconGithub,
    onClickAction: () => targetBlank("https://github.com/lorenzobruni-dev"),
  },
};

export const sidebarMapValues = ({
  onHomePageIconClick,
  onContactMeIconClick,
  onAboutMeIconClick,
  onProjectIconClick,
  toggle,
}: SidebarActions): SidebarMap => {
  return {
    homePage: {
      action: () => {
        onHomePageIconClick();
        toggle();
      },
      name: "home/",
    },
    contactMe: {
      action: () => {
        onContactMeIconClick();
        toggle();
      },
      name: "contact/",
    },
    aboutMe: {
      action: () => {
        onAboutMeIconClick();
        toggle();
      },
      name: "about/",
    },
    myProject: {
      action: () => {
        onProjectIconClick();
        toggle();
      },
      name: "project/",
    },
  };
};
export type SocialLinkList = typeof socialLinkList;

export const SERVICE_ID_emailJS = "service_4dvul28";
export const TEMPLATE_ID_emailJS = "template_4r36c5a";
