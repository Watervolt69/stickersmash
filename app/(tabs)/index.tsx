import CustomButton from "@/components/Button";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-canvas p-6">
      <Text className="text-center font-bold text-5xl tracking-[-2.4px] text-ink">
        Hello from Index
      </Text>
      <Link href="/about">
        <CustomButton title="About" variant="buttonPrimary" />
      </Link>
    </View>
  );
};

export default Index;
