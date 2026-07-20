import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

type TabScreenProps = {
  name: string;
  title?: string;
   defaultIconName: string;
  focusedIconName: string;
  size?: number;
};

const TabScreen: React.FC<TabScreenProps> = ({
  name,
  title,
  defaultIconName,
  focusedIconName,
  size = 24,

}) => {
  return (
    <Tabs.Screen
      name={name}
      options={{
        title: title ?? name,
        tabBarIcon: ({
          color,
          focused,
        }: {
          color: string;
          focused: boolean;
        }) => <Ionicons name={focused ? focusedIconName : defaultIconName} color={color} size={size} />,
      }}
    />
  );
};

export default TabScreen;
