import CustomTabBar from "@/components/CustomTabBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { Image } from "expo-image";

const HeaderTitle = ({ title }: { title: string }) => (
  <View className="flex-row items-center gap-2">
    <Text className="font-bold text-lg text-ink tracking-tight">{title}</Text>
    <View className="px-2 py-0.5 rounded-full bg-linkSoft border border-link/20">
      <Text className="font-bold text-[10px] text-link tracking-wider uppercase">
        PRO
      </Text>
    </View>
  </View>
);

const HeaderRight = () => (
  <View className="flex-row items-center pr-4 gap-2">
    <View className="w-8 h-8 rounded-full overflow-hidden border border-hairline shadow-sm">
      <Image
        source={{
          uri: "https://i.pinimg.com/vwebp/736x/0f/cc/03/0fcc03cfdb519e20f69e9699e2f8cdd0.webp",
        }}
        contentFit="cover"
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  </View>
);

const TabLayout = () => {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerTitleStyle: {
          fontFamily: "PlusJakartaSans_700Bold",
          color: "#171717",
        },
        headerShadowVisible: false,
        headerTintColor: "#171717",
        headerRight: () => <HeaderRight />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => <HeaderTitle title="StickerSmash" />,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: () => <HeaderTitle title="App Overview" />,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
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
