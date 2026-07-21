import { useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  ImageSourcePropType,
} from "react-native";

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("@/assets/images/emoji1.png"),
    require("@/assets/images/emoji2.png"),
    require("@/assets/images/emoji3.png"),
    require("@/assets/images/emoji4.png"),
    require("@/assets/images/emoji5.png"),
    require("@/assets/images/emoji6.png"),
  ]);

  const imageSize = Platform.OS === "web" ? 96 : 80;

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 16,
        alignItems: "center",
      }}
      renderItem={({ item }) => (
        <Pressable
          className="mx-2 p-3 rounded-2xl bg-canvasElevated border border-hairline active:bg-hairline/50 active:scale-95 shadow-sm"
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image
            source={item}
            resizeMode="contain"
            style={{ width: imageSize, height: imageSize }}
          />
        </Pressable>
      )}
    />
  );
}