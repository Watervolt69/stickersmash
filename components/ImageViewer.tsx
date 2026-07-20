import React from 'react'
import { View } from "react-native";
import { Image } from "react-native";
const ImageViewer = () => {
  return (
   <View className="w-[380px] h-[700px] flex-1 ustify-center items-center ">
     <Image source={imageSrc} className=" w-full h-full rounded-lg" />
     </View>
  )
}

export default ImageViewer