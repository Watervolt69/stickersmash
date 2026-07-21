import { Image, ImageSourcePropType, View } from "react-native";



type Props = {
  imageSrc: ImageSourcePropType;
  selectedImage?: string | null;
};

const ImageViewer = ({ imageSrc, selectedImage }: Props) => {
  const imageSource = selectedImage ? { uri: selectedImage } : imageSrc;



  return (
    <View className="w-[320px] h-[420px] justify-center items-center overflow-hidden rounded-lg">
      <Image
        source={imageSource}
        resizeMode="cover"
        className="w-full h-full rounded-lg"
      />
    </View>
  );
};

export default ImageViewer;
