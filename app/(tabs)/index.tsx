import { Text, View, Pressable } from "react-native";
import ImageViewer from "../../components/ImageViewer";
import Button from "../../components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";


const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const PlaceholderImage = require("@/assets/images/background-image.png");
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("you did not pick any image ");
    }
  };

  return (
    <>
      <View className="flex-1 bg-canvas justify-center items-center gap-16">
        <ImageViewer imageSrc={PlaceholderImage} selectedImage={selectedImage} />

        <View className="flex-col gap-4">
          <Button lable="Choose a Photo" theme="primary" onPress={pickImage} />
          <Button lable="Use This Photo" onPress={() => setShowAppOptions(true)} />
        </View>
      </View>

    
    </>
  );
};


export default Index;
