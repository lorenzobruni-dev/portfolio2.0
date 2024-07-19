import { useLocation } from "wouter";

export function useLocationHook() {
  const [, setLocation] = useLocation();
  const homePage = () => setLocation(`/`);
  const contact = () => setLocation(`/contact`);
  const aboutMe = () => setLocation(`/about-me`);
  const projectRoute = () => setLocation("/project");

  return { homePage, aboutMe, contact, projectRoute };
}

export function useMobile(width: number) {
  return width < 800;
}
