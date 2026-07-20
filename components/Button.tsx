import React from "react";
import { Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  title: string;
  variant?: "buttonPrimary" | "buttonSecondary" | "buttonWarning";
};

const variantClasses: Record<
  NonNullable<CustomButtonProps["variant"]>,
  string
> = {
  buttonPrimary: "bg-primary",
  buttonSecondary: "border border-hairline bg-canvasElevated",
  buttonWarning: "bg-gradient-to-r from-gradientShipStart to-gradientShipEnd",
};

const textClasses: Record<NonNullable<CustomButtonProps["variant"]>, string> = {
  buttonPrimary: "text-onPrimary",
  buttonSecondary: "text-ink",
  buttonWarning: "text-onPrimary",
};

export default function CustomButton({
  title,
  variant = "buttonPrimary",
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      className={`my-2 min-w-[150px] items-center justify-center rounded-[100px] px-[14px] py-3 ${variantClasses[variant]}`}
      activeOpacity={0.7}
    >
      <Text
        className={`text-center font-medium text-base ${textClasses[variant]}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
