import { useLocation } from "wouter";

export function useLocationHook() {
  const [, setLocation] = useLocation();
  const homePage = () => setLocation(`/`);
  const contact = () => setLocation(`/contact`);
  const aboutMe = () => setLocation(`/about-me`);

  return { homePage, aboutMe, contact };
}
