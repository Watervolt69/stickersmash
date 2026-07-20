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

export function CustomButton({
  title,
  variant = "buttonPrimary",
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      className={`my-2 min-w-[150px] items-center justify-center rounded-[100px] px-[16px] py-3 ${variantClasses[variant]}`}
      activeOpacity={0.78}
    >
      <Text
        className={`text-center font-semibold text-base ${textClasses[variant]}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
