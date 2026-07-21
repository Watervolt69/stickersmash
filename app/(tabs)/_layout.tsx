import CustomTabBar from "@/components/CustomTabBar";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Tabs } from "expo-router/tabs";

const TabLayout = () => {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: "#ffffff" },
        headerTitleStyle: {
          fontFamily: "PlusJakartaSans_700Bold",
          color: "#171717",
        },
        headerShadowVisible: false,
        headerTintColor: "#171717",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={22} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "information-circle" : "information-circle-outline"}
              color={color}
              size={22}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
