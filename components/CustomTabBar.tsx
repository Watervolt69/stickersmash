import React, { useState } from "react";
import { View, Pressable, StyleSheet, Platform, LayoutChangeEvent } from "react-native";
import { BlurView } from "expo-blur";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const tabWidth = containerWidth / state.routes.length;
  const translateX = useSharedValue(0);

  const onLayout = (e: LayoutChangeEvent) => {
    setContainerWidth(e.nativeEvent.layout.width);
  };

  React.useEffect(() => {
    if (tabWidth > 0) {
      translateX.value = withSpring(state.index * tabWidth, {
        damping: 16,
        stiffness: 180,
        mass: 0.9,
      });
    }
  }, [state.index, tabWidth]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <BlurView
        intensity={Platform.OS === "ios" ? 60 : 100}
        tint="light"
        style={styles.blurContainer}
        onLayout={onLayout}
      >
        {tabWidth > 0 && (
          <Animated.View
            style={[
              styles.indicator,
              { width: tabWidth - 12, left: 6 },
              indicatorStyle,
            ]}
          />
        )}

        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({ type: "tabLongPress", target: route.key });
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
            >
              {options.tabBarIcon &&
                options.tabBarIcon({
                  focused: isFocused,
                  color: isFocused ? "#ffffff" : "#8f8f8f",
                  size: 22,
                })}
            </Pressable>
          );
        })}
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 24,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  blurContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 6,
    borderRadius: 999,
    overflow: "hidden",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ebebeb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
  indicator: {
    position: "absolute",
    top: 8,
    height: 44,
    borderRadius: 999,
    backgroundColor: "#171717",
  },
  tabItem: {
    flex: 1,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});