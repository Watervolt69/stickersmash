import { Text, View } from "react-native";

const about = () => {
  return (
    <View className="flex-1 bg-canvas px-5 pt-10">
      <Text className="mb-2 font-bold text-4xl tracking-[-1.28px] text-ink">
        About Us
      </Text>
      <Text className="mb-4 font-medium text-base uppercase tracking-[0.15em] text-link">
        We build polished app experiences that feel smooth and intentional.
      </Text>

      <View className="mb-4 rounded-[24px] border border-hairline bg-canvasElevated p-4">
        <Text className="mb-2 font-bold text-lg text-ink">Our style</Text>
        <Text className="text-base leading-7 text-body">
          The interface uses a soft light surface with strong dark button
          actions, giving the app a premium, modern mobile feel.
        </Text>
      </View>

      <View className="rounded-[24px] border border-hairline bg-canvasElevated p-4">
        <Text className="mb-2 font-bold text-lg text-ink">What matters</Text>
        <Text className="text-base leading-7 text-body">
          Clean spacing, readable typography, and clear action hierarchy are the
          foundation of the experience.
        </Text>
      </View>
    </View>
  );
};

export default about;
