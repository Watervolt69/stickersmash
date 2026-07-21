import { ImageSourcePropType, View } from "react-native";
import ImageViewer from "../../components/ImageViewer";
import Button from "../../components/Button";
import CircleButton from "../../components/CircleButton";
import IconButton from "../../components/IconButton";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const PlaceholderImage = require("@/assets/images/background-image.png");
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const [pickedEmoji, setPickedEmoji] =  useState<ImageSourcePropType | undefined>(undefined)

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
  };

  const onAddSticker = () => {
    setIsVisible(true)
  };

          
  const onModalClose = () => {
    setIsVisible(false);
  };
          

  const onSaveImageAsync = async () => {
    // Save image logic
  };

  return (
    <View className="flex-1 bg-canvas justify-between items-center py-4 px-3">
      <View className="flex-1 w-full justify-center items-center my-1">
        <ImageViewer imageSrc={PlaceholderImage} selectedImage={selectedImage} />
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
          <Button lable="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}


<EmojiPicker isVisible={isVisible} onClose={onModalClose} >

<EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
</EmojiPicker>
    </View>
  );
};

export default Index;
