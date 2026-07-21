import { Modal, Pressable, Text, View } from "react-native";
import { PropsWithChildren } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

function EmojiPicker({ isVisible, onClose, children }: Props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View className="flex-1 justify-end bg-black/40">
        <View className="h-[35%] min-h-[180px] w-full bg-canvasElevated rounded-t-[32px] border-t border-hairline shadow-2xl overflow-hidden">
          {/* Modal Title & Close Header */}
          <View className="flex-row items-center justify-between px-6 py-4 border-b border-hairline bg-canvasElevated">
            <Text className="font-bold text-ink text-lg tracking-tight">
              Choose a sticker
            </Text>
            <Pressable
              onPress={onClose}
              className="w-8 h-8 justify-center items-center rounded-full bg-hairline/60 active:bg-hairline"
            >
              <MaterialIcons name="close" color="#171717" size={20} />
            </Pressable>
          </View>

          {/* Content Area */}
          <View className="flex-1 bg-canvas justify-center">{children}</View>
        </View>
      </View>
    </Modal>
  );
}

export default EmojiPicker;