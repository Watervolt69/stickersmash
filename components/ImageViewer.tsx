import { Image } from "expo-image";
import { ImageSourcePropType, View, StyleSheet } from "react-native";

type Props = {
  imageSrc: ImageSourcePropType;
  selectedImage?: string | null;
};

const ImageViewer = ({ imageSrc, selectedImage }: Props) => {
  const imageSource = selectedImage ? { uri: selectedImage } : imageSrc;

  return (
    <View className="w-[320px] sm:w-[360px] h-[440px] max-w-[92vw] max-h-[65vh] justify-center items-center overflow-hidden rounded-3xl bg-canvasElevated border border-hairline shadow-xl">
      <Image
        source={imageSource}
        contentFit="cover"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },
});

export default ImageViewer;
