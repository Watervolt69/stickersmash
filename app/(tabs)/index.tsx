import { ImageSourcePropType, View, Text, Platform } from "react-native";
import ImageViewer from "../../components/ImageViewer";
import Button from "../../components/Button";
import CircleButton from "../../components/CircleButton";
import IconButton from "../../components/IconButton";
import * as ImagePicker from "expo-image-picker";
import { useState, useRef } from "react";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { captureRef } from "react-native-view-shot";
import { shareAsync, isAvailableAsync } from "expo-sharing";
import Ionicons from "@expo/vector-icons/Ionicons";
import Svg, { Path } from "react-native-svg";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const PlaceholderImage = require("@/assets/images/background-image.png");
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Support multiple emojis/stickers on the canvas
  const [pickedEmojis, setPickedEmojis] = useState<ImageSourcePropType[]>([]);

  const ImageRef = useRef<View>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not pick any image.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
    setSelectedImage(null);
    setPickedEmojis([]);
  };

  const onAddSticker = () => {
    setIsVisible(true);
  };

  const onModalClose = () => {
    setIsVisible(false);
  };

  const handleSelectEmoji = (emoji: ImageSourcePropType) => {
    setPickedEmojis((prev) => [...prev, emoji]);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== "web") {
      try {
        const localUrl = await captureRef(ImageRef, {
          format: "png",
          quality: 1,
        });

        const isAvailable = await isAvailableAsync();
        if (isAvailable) {
          await shareAsync(localUrl);
        } else {
          alert("Sharing / saving is not available on this device.");
        }
      } catch (err) {
        console.log("Error saving/sharing image:", err);
        alert("An error occurred while saving: " + err);
      }
    } else {
      try {
        const localUrl = await captureRef(ImageRef, {
          format: "png",
          quality: 1,
        });

        const link = document.createElement("a");
        link.download = "sticker-smash.png";
        link.href = localUrl;
        link.click();
        alert("Saved!");
      } catch (err) {
        console.log("Error saving image on web:", err);
        alert("An error occurred while saving: " + err);
      }
    }
  };

  return (
    <GestureHandlerRootView className="flex-1 bg-canvas justify-between items-center py-2 px-3">
      {/* Header Banner */}
      <View className="w-full items-center pt-2 pb-1 relative">
        <Text className="font-bold text-2xl text-ink tracking-tight text-center">
          Sticker Canvas
        </Text>
        <Text className="font-medium text-xs text-mute uppercase tracking-widest mt-0.5 text-center">
          Personalize & Decorate Your Photos
        </Text>
      </View>

      {/* Main Image Frame Container with Pencil Badge and SVG Arrow */}
      <View className="flex-1 w-full justify-center items-center my-1 relative">
        {/* Light Gray Pencil Badge & SVG Arrow pointing directly inside the canvas */}
        <View className="mt-3 mb-2 z-30 flex-row items-center gap-1.5">
          <View className="flex-row items-center bg-canvasElevated/95 px-3 py-1.5 rounded-full border border-hairline shadow-sm">
            <Ionicons name="pencil" size={13} color="#8f8f8f" />
            <Text
              style={{
                fontFamily: Platform.OS === "ios" ? "Snell Roundhand" : "serif",
                color: "#8f8f8f",
              }}
              className="text-sm italic font-bold ml-1.5"
            >
              "Drag & edit your stickers!" ✏️
            </Text>
          </View>

          {/* Looped Curved SVG Pointer Arrow in Light Gray (#8f8f8f) pointing down onto canvas */}
          <Svg width={48} height={36} viewBox="0 0 48 36" fill="none">
            <Path
              d="M 4 4 C 18 -4, 32 30, 24 18 C 16 10, 30 6, 40 32 M 40 32 L 32 28 M 40 32 L 38 20"
              stroke="#8f8f8f"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>

        <View
          ref={ImageRef}
          collapsable={false}
          className="w-[360px] sm:w-[440px] h-[520px] max-w-[95vw] max-h-[72vh] justify-center items-center overflow-hidden rounded-[32px] bg-canvasElevated border border-hairline shadow-2xl relative"
        >
          <ImageViewer
            imageSrc={PlaceholderImage}
            selectedImage={selectedImage}
          />
          {pickedEmojis.map((emoji, index) => (
            <EmojiSticker key={index} imageSize={40} stickerSource={emoji} />
          ))}
        </View>
      </View>

      {/* Bottom Action Controls with pb-28 to clear CustomTabBar */}
      {showAppOptions ? (
        <View className="w-full flex-row items-center justify-around px-6 pt-2 pb-28">
          <IconButton icon="refresh" label="Reset" onPress={onReset} />
          <CircleButton onPress={onAddSticker} />
          <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
        </View>
      ) : (
        <View className="w-full items-center gap-2 pt-2 pb-28">
          <Button lable="Choose a photo" theme="primary" onPress={pickImage} />
          <Button
            lable="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}

      <EmojiPicker isVisible={isVisible} onClose={onModalClose}>
        <EmojiList onSelect={handleSelectEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
};

export default Index;
