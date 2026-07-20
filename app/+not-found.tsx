import { View, Text } from "react-native";
import { Stack, Link } from "expo-router";
import React from "react";
import { NotFoundStyles } from "../styles/globalStyles";
import CustomButton from "@/components/Button";
const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={NotFoundStyles.container}>
        <Text style={NotFoundStyles.text}>404 Route Not Found</Text>
        <Link href="/">
        <CustomButton title="Back to Home" variant="buttonWarning" />
        </Link>
      </View>
    </>
  );
};

export default NotFoundScreen;
