import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Tabs } from "expo-router/tabs";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0070f3",
        tabBarInactiveTintColor: "#8f8f8f",
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerTitleStyle: {
          fontFamily: "PlusJakartaSans_700Bold",
          color: "#171717",
        },
        headerShadowVisible: false,
        headerTintColor: "#171717",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopColor: "#ebebeb",
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
