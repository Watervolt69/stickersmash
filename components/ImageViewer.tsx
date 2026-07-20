import { Image, ImageSourcePropType, View } from "react-native";

const ImageViewer = ({ imageSrc }: { imageSrc: ImageSourcePropType }) => {
  return (
    <View className="w-[320px] h-[420px] justify-center items-center overflow-hidden rounded-lg">
      <Image
        source={imageSrc}
        resizeMode="cover"
        className="w-full h-full rounded-lg"
      />
    </View>
  );
};

export default ImageViewer;
