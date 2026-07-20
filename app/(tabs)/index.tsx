
import { Text, View } from "react-native";

const Index = () => {


  const imageSrc = require("../../assets/images/background-image.png")
  return (
    <View className="flex-1 bg-canvas  justify-center items-center gap-16">
      <Text className="mb-2 font-bold text-4xl tracking-[-1.28px] text-ink mt-20">
        Welcome to Sticker Smash!
      </Text>
    <ImageViewer />
      </View>
  );
};

export default Index;
