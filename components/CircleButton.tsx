import { View, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View className="w-20 h-20 border-4 border-linkSoft rounded-full p-1 justify-center items-center shadow-md bg-canvasElevated">
      <Pressable
        className="w-full h-full justify-center items-center rounded-full bg-link active:bg-linkDeep"
        onPress={onPress}
      >
        <MaterialIcons name="add" size={38} color="#ffffff" />
      </Pressable>
    </View>
  );
}