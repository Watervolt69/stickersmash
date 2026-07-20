import CustomButton from "@/components/Button";
import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View className="flex-1 items-center justify-center bg-canvas p-6">
        <Text className="text-center font-bold text-4xl tracking-[-1.28px] text-ink">
          404 Route Not Found
        </Text>
        <Link href="/">
          <CustomButton title="Back to Home" variant="buttonWarning" />
        </Link>
      </View>
    </>
  );
};

export default NotFoundScreen;
