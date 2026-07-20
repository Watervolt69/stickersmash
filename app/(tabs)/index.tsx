
import { Text, View } from "react-native";
import ImageViewer from "../../components/ImageViewer";
import Button from "../../components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

const Index = () => {
const [image, setImage] = useState(null);
  const pickImage = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:["images"],
      allowsEditing:true,
      quality:1,
    });
    if(!result.canceled){
      console.log(result)
      setImage(result.assets[0].uri)
    }
    else{
      alert("you did not pick any image ")
    }
  }

 const PlaceholderImage  = require("@/assets/images/background-image.png");

  return (
    <View className="flex-1 bg-canvas  justify-center items-center gap-16">
    <ImageViewer imageSrc={image} />
    <View className="flex-col gap-4">
     <Button lable="Choose a Photo" theme="primary" onPress={pickImage} />
     <Button lable="Use This Photo" />
      </View>
      </View>
  );
};

export default Index;
