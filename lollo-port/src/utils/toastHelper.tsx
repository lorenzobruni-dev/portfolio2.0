import React from "react";
import { toast } from "react-toastify";
import { Image, Flex } from "@mantine/core";
import iconSent from "../assets/toast/icon-sent.svg";

export const DURATIONS = {
  SHORT: 4000,
};

export function toastMessageWithIcon(message: string) {
  toast(
    <Flex align="center" gap="sm">
      <Image src={iconSent} alt="Icona inviata" width={24} height={24} />
      <span>{message}</span>
    </Flex>,
    {
      autoClose: DURATIONS.SHORT,
      position: "bottom-right",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    },
  );
}
