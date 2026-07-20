import React from "react";
import { Text, View } from "react-native";
import {Link} from 'expo-router'
import { IndexStyles } from "../../styles/globalStyles";
import CustomButton from "@/components/Button";

const Index = () => {
  return (
    <View style={IndexStyles.container}>
      <Text style={IndexStyles.text}>Hello from Index</Text>
      <Link href="/about" >
      <CustomButton title="About " variant="buttonPrimary" />
      </Link>
    </View>
  );
};

export default Index;
