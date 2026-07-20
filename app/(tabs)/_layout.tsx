
import { Tabs } from "expo-router";
import React from "react";
import TabScreen from "../../components/TabScreen";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "#25292e",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <TabScreen defaultIconName="home-sharp" focusedIconName="home" title="Home" name="index" />
      <TabScreen defaultIconName="information-circle" focusedIconName="information-circle" title="About" name="about" />
    </Tabs>
  );
};

export default TabLayout;



