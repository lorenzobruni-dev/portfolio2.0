import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import providerStyle from "./toastCSSresponsive.module.css";

type ToastProviderProps = {
  children: ReactNode;
};
const style = {
  color: "gray",
  fontSize: "14px",
};

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => (
  <>
    {children}
    <ToastContainer
      className={providerStyle.toast_container}
      position="bottom-right"
      theme={"colored"}
      toastStyle={style}
    />
  </>
);

export default ToastProvider;
