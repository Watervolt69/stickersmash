import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, Text } from "react-native";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable
      className="items-center justify-center min-w-[72px] py-3 px-3 rounded-2xl bg-canvasElevated border border-hairline active:bg-hairline shadow-sm"
      onPress={onPress}
    >
      <MaterialIcons name={icon} size={24} color="#171717" />
      <Text className="font-semibold text-ink text-xs mt-1.5 tracking-wide">
        {label}
      </Text>
    </Pressable>
  );
}