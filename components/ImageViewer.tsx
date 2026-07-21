import { Image, ImageSourcePropType, View, StyleSheet } from "react-native";

type Props = {
  imageSrc: ImageSourcePropType;
  selectedImage?: string | null;
};

const ImageViewer = ({ imageSrc, selectedImage }: Props) => {
  const imageSource = selectedImage ? { uri: selectedImage } : imageSrc;

  return (
    <View className="w-full max-w-[480px] h-[640px] max-h-[78vh] justify-center items-center overflow-hidden rounded-3xl bg-canvasElevated border border-hairline shadow-xl">
      <Image
        source={imageSource}
        resizeMode="cover"
        style={styles.image}
        className="w-full h-full rounded-3xl"
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
