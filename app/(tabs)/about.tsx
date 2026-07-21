import { Text, View, Pressable, Platform, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Svg, { Path, Circle } from "react-native-svg";

const About = () => {
  const router = useRouter();

  const studioImage =
    "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=80";

  return (
    <ScrollView
      className="flex-1 bg-canvas"
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 110,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header & Pencil Annotation */}
      <View className="mb-6">
        <View className="flex-row items-center gap-2 mb-1">
          <Text className="font-bold text-4xl tracking-tight text-ink">
            About App
          </Text>
          <View className="px-2.5 py-1 rounded-full bg-linkSoft border border-link/20">
            <Text className="font-bold text-[10px] text-link tracking-wider uppercase">
              StickerSmash
            </Text>
          </View>
        </View>

        <Text className="font-semibold text-xs tracking-widest text-link uppercase mb-3">
          Polished Design System & Interactive Canvas
        </Text>

        {/* Handwritten Pencil Annotation Badge & Loop SVG */}
        <View className="flex-row items-center gap-2 mt-1">
          <View className="flex-row items-center bg-canvasElevated px-3 py-1.5 rounded-full border border-hairline shadow-sm">
            <Ionicons name="pencil" size={13} color="#8f8f8f" />
            <Text
              style={{
                fontFamily: Platform.OS === "ios" ? "Snell Roundhand" : "serif",
                color: "#8f8f8f",
              }}
              className="text-sm italic font-bold ml-1.5"
            >
              "Handcrafted with precision" ✏️
            </Text>
          </View>

          <Svg width={36} height={22} viewBox="0 0 36 22" fill="none">
            <Path
              d="M 4 14 C 12 2, 24 18, 18 12 C 12 6, 22 4, 32 16"
              stroke="#8f8f8f"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Circle cx={32} cy={16} r={2} fill="#8f8f8f" />
          </Svg>
        </View>
      </View>

      {/* Studio Showcase Card */}
      <View className="mb-4 w-full h-44 rounded-[28px] overflow-hidden border border-hairline shadow-md relative">
        <Image
          source={{ uri: studioImage }}
          contentFit="cover"
          style={{ width: "100%", height: "100%" }}
        />
        <View className="absolute inset-0 bg-black/30 p-5 justify-end">
          <View className="self-start px-2.5 py-1 rounded-full bg-white/90 mb-1.5 border border-white/40">
            <Text className="font-bold text-[10px] text-ink uppercase tracking-widest">
              Studio Creative Canvas
            </Text>
          </View>
          <Text className="font-bold text-xl text-white tracking-tight">
            Turn Any Photo into a Canvas
          </Text>
        </View>
      </View>

      {/* Bento Grid Layout */}
      <View className="gap-3 mb-6">
        {/* Bento Hero Card 1 (Full Width) */}
        <View className="rounded-[28px] border border-hairline bg-canvasElevated p-6 shadow-md relative overflow-hidden">
          <View className="flex-row items-center justify-between mb-3">
            <View className="w-10 h-10 rounded-2xl bg-linkSoft justify-center items-center border border-link/20">
              <Ionicons name="sparkles" size={20} color="#0070f3" />
            </View>
            <Text className="font-bold text-[10px] text-link uppercase tracking-widest bg-linkSoft/50 px-3 py-1 rounded-full border border-link/20">
              Light Theme
            </Text>
          </View>
          <Text className="font-bold text-xl text-ink mb-1.5">
            Minimalist Design System
          </Text>
          <Text className="font-sans text-sm leading-relaxed text-body">
            Built on a soft light canvas (`#fafafa`) paired with elevated white surface cards (`#ffffff`) and crisp ink typography for a modern mobile feel.
          </Text>
        </View>

        {/* Bento Row: 2 Split Cards */}
        <View className="flex-row gap-3">
          {/* Bento Card 2A */}
          <View className="flex-1 rounded-[28px] border border-hairline bg-canvasElevated p-5 shadow-sm justify-between">
            <View className="w-9 h-9 rounded-xl bg-canvas justify-center items-center border border-hairline mb-3">
              <Ionicons name="hand-left" size={18} color="#171717" />
            </View>
            <View>
              <Text className="font-bold text-base text-ink mb-1">Gestures</Text>
              <Text className="font-sans text-xs text-body leading-relaxed">
                Drag & double-tap sticker scale physics powered by Reanimated.
              </Text>
            </View>
          </View>

          {/* Bento Card 2B */}
          <View className="flex-1 rounded-[28px] border border-hairline bg-canvasElevated p-5 shadow-sm justify-between">
            <View className="w-9 h-9 rounded-xl bg-canvas justify-center items-center border border-hairline mb-3">
              <Ionicons name="share-social" size={18} color="#171717" />
            </View>
            <View>
              <Text className="font-bold text-base text-ink mb-1">Export</Text>
              <Text className="font-sans text-xs text-body leading-relaxed">
                Instant high-res view captures with cross-platform device sharing.
              </Text>
            </View>
          </View>
        </View>

        {/* Bento Card 3 (Full Width) */}
        <View className="rounded-[28px] border border-hairline bg-canvasElevated p-6 shadow-md relative overflow-hidden">
          <View className="flex-row items-center justify-between mb-3">
            <View className="w-10 h-10 rounded-2xl bg-canvas justify-center items-center border border-hairline">
              <Ionicons name="images" size={20} color="#171717" />
            </View>
            <Text className="font-bold text-[10px] text-mute uppercase tracking-widest bg-canvas px-3 py-1 rounded-full border border-hairline">
              Photo Engine
            </Text>
          </View>
          <Text className="font-bold text-xl text-ink mb-1.5">
            Multi-Sticker Canvas
          </Text>
          <Text className="font-sans text-sm leading-relaxed text-body">
            Upload custom photo memories or start with default canvases. Place multiple emojis and scale them seamlessly.
          </Text>
        </View>
      </View>

      {/* Replay Onboarding Button */}
      <Pressable
        onPress={() => router.push("/onboarding")}
        className="w-full py-4 rounded-2xl bg-ink active:opacity-90 flex-row justify-center items-center gap-2 shadow-md"
      >
        <Ionicons name="compass" size={18} color="#ffffff" />
        <Text className="font-bold text-base text-onPrimary">
          Replay Onboarding Guide
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default About;
