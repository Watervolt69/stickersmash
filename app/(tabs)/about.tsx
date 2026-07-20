import React from "react";
import { Text, View } from "react-native";

const about = () => {
  return (
    <View className="flex-1 bg-canvas px-6 pt-10">
      <Text className="mb-2 font-bold text-4xl tracking-[-1.28px] text-ink">
        About Us
      </Text>
      <Text className="mb-4 font-medium text-base uppercase tracking-[0.15em] text-link">
        We are a team of passionate developers creating amazing apps.
      </Text>
      <Text className="text-base leading-7 text-body">
        We believe in creating innovative solutions that make a difference.
      </Text>
    </View>
  );
};

export default about;
