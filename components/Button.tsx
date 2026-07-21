import React from "react";
import { Text, Pressable, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  lable: string;
  theme?: "primary";
  onPress: () => void;
};

const Button = ({ lable, theme, onPress }: Props) => {
  if (theme === "primary") {
    return (
      <View className="w-[320px] h-[60px] rounded-2xl justify-center items-center shadow-md">
        <Pressable
          className="w-full h-full bg-ink rounded-2xl flex-row justify-center items-center px-4 active:opacity-90"
          onPress={onPress}
        >
          <FontAwesome name="picture-o" size={18} color="#ffffff" className="mr-3" />
          <Text className="font-bold text-onPrimary text-base ml-2">{lable}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="w-[320px] h-[60px] rounded-2xl justify-center items-center">
      <Pressable
        className="w-full h-full bg-canvasElevated border border-hairline rounded-2xl flex-row justify-center items-center px-4 active:bg-hairline shadow-sm"
        onPress={onPress}
      >
        <Text className="font-semibold text-ink text-base">{lable}</Text>
      </Pressable>
    </View>
  );
};

export default Button;