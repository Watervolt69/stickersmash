import { ImageSourcePropType, View, Platform } from "react-native";
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

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const PlaceholderImage = require("@/assets/images/background-image.png");
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);

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
    setPickedEmoji(undefined);
  };

  const onAddSticker = () => {
    setIsVisible(true);
  };

  const onModalClose = () => {
    setIsVisible(false);
  };

  const onSaveImageAsync = async () => {
    if (Platform.OS !== "web") {
      try {
        const localUrl = await captureRef(ImageRef, {
          height: 440,
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
          height: 440,
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
    <GestureHandlerRootView className="flex-1 bg-canvas justify-between items-center py-4 px-3">
      <View className="flex-1 w-full justify-center items-center my-1">
        <View
          ref={ImageRef}
          collapsable={false}
          className="items-center justify-center relative"
        >
          <ImageViewer
            imageSrc={PlaceholderImage}
            selectedImage={selectedImage}
          />
          {pickedEmoji && (
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
          )}
        </View>
      </View>

      {showAppOptions ? (
        <View className="w-full flex-row items-center justify-around px-6 pb-2 pt-2">
          <IconButton icon="refresh" label="Reset" onPress={onReset} />
          <CircleButton onPress={onAddSticker} />
          <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
        </View>
      ) : (
        <View className="w-full items-center gap-2 pb-2 pt-2">
          <Button lable="Choose a photo" theme="primary" onPress={pickImage} />
          <Button
            lable="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}

      <EmojiPicker isVisible={isVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
};

export default Index;
