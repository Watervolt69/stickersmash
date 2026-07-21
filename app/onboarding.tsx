import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const slides = [
  {
    id: 1,
    step: "01",
    tag: "PHOTOS",
    title: "Pick Your Photo",
    description: "Select any picture from your device library or start with our default high-resolution canvas.",
    image: require("@/assets/images/background-image.png"),
  },
  {
    id: 2,
    step: "02",
    tag: "STICKERS",
    title: "Add Fun Stickers",
    description: "Drag, scale, and double-tap to place multiple interactive stickers anywhere on your photo.",
    image: require("@/assets/images/emoji1.png"),
  },
  {
    id: 3,
    step: "03",
    tag: "EXPORT",
    title: "Save & Share",
    description: "Export high-resolution edits directly to your device or share instantly with your friends.",
    image: require("@/assets/images/emoji2.png"),
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.replace("/(tabs)");
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slide = slides[currentIndex];

  return (
    <View className="flex-1 bg-canvas justify-between px-6 py-10">
      {/* Top Header & Skip Action */}
      <View className="flex-row justify-between items-center pt-4">
        <View className="flex-row items-center gap-2">
          <Text className="font-bold text-2xl text-ink tracking-tight">StickerSmash</Text>
          <View className="px-2.5 py-0.5 rounded-full bg-linkSoft border border-link/20">
            <Text className="font-semibold text-[10px] text-link tracking-wider uppercase">v1.0</Text>
          </View>
        </View>

        <Pressable
          onPress={() => router.replace("/(tabs)")}
          className="px-4 py-2 rounded-full bg-canvasElevated border border-hairline active:bg-hairline/60 shadow-sm"
        >
          <Text className="font-semibold text-xs text-body">Skip</Text>
        </Pressable>
      </View>

      {/* Hero Showcase Card */}
      <View className="flex-1 justify-center items-center my-4">
        <View className="w-full max-w-sm bg-canvasElevated p-6 rounded-[32px] border border-hairline shadow-xl items-center relative overflow-hidden">
          {/* Step Badge */}
          <View className="flex-row items-center justify-between w-full mb-6">
            <Text className="font-bold text-xs text-mute uppercase tracking-widest">
              Step {slide.step} of 03
            </Text>
            <View className="px-3 py-1 rounded-full bg-canvas border border-hairline">
              <Text className="font-bold text-xs text-link">{slide.tag}</Text>
            </View>
          </View>

          {/* Image Showcase Box */}
          <View className="w-52 h-52 justify-center items-center rounded-2xl bg-canvas mb-6 p-4 border border-hairline shadow-inner">
            <Image
              source={slide.image}
              contentFit="contain"
              style={{ width: "100%", height: "100%" }}
            />
          </View>

          {/* Title & Body */}
          <Text className="font-bold text-2xl text-ink text-center mb-2 tracking-tight">
            {slide.title}
          </Text>
          <Text className="font-sans text-sm text-body text-center leading-relaxed px-2">
            {slide.description}
          </Text>
        </View>
      </View>

      {/* Footer Navigation Bar */}
      <View className="w-full items-center gap-6 pb-2">
        {/* Pagination Dots */}
        <View className="flex-row items-center gap-2">
          {slides.map((_, idx) => (
            <View
              key={idx}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? "w-8 bg-link"
                  : "w-2 bg-hairline"
              }`}
            />
          ))}
        </View>

        {/* Action Button Row */}
        <View className="flex-row w-full max-w-sm gap-3">
          {currentIndex > 0 && (
            <Pressable
              onPress={handleBack}
              className="flex-1 py-4 rounded-2xl bg-canvasElevated border border-hairline active:bg-hairline/60 justify-center items-center shadow-sm"
            >
              <Text className="font-semibold text-base text-ink">Back</Text>
            </Pressable>
          )}

          <Pressable
            onPress={handleNext}
            className="flex-1 py-4 rounded-2xl bg-ink active:opacity-90 justify-center items-center shadow-md"
          >
            <Text className="font-bold text-base text-onPrimary">
              {currentIndex === slides.length - 1 ? "Get Started" : "Continue"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
