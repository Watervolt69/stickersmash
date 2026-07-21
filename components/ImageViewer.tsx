import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  imageSrc: ImageSourcePropType;
  selectedImage?: string | null;
};

const ImageViewer = ({ imageSrc, selectedImage }: Props) => {
  const imageSource = selectedImage ? { uri: selectedImage } : imageSrc;

  return (
    <Image
      source={imageSource}
      contentFit="cover"
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 28,
  },
});

export default ImageViewer;
