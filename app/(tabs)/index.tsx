import Link from "expo-router/link";
import { Text, View } from "react-native";
import { CustomButton } from "../../components/Button";

const Index = () => {
  return (
    <View className="flex-1 bg-canvas px-5 pt-10">
      <View className="mb-6 flex-row items-center justify-between">
        <View>
          <Text className="mb-1 font-semibold text-xs uppercase tracking-[0.3em] text-link">
            STICKERSMASH
          </Text>
          <Text className="font-bold text-3xl tracking-[-1px] text-ink">
            Make your mood pop
          </Text>
        </View>
      </View>

      <View className="mb-6 rounded-[28px] bg-gradient-to-br from-ink via-primary to-[#2f2f2f] p-5 shadow-sm shadow-black/10">
        <Text className="mb-2 font-semibold text-sm uppercase tracking-[0.26em] text-onPrimary/80">
          New Drop
        </Text>
        <Text className="mb-2 font-bold text-4xl leading-[1.05] tracking-[-1.2px] text-onPrimary">
          Bright stickers for your daily vibe
        </Text>
        <Text className="mb-5 text-base leading-6 text-onPrimary/80">
          Build playful, expressive layouts with clean actions and a refined
          mobile-first look.
        </Text>

        <View className="flex-row flex-wrap gap-2">
          <View className="rounded-full bg-white/15 px-3 py-1.5">
            <Text className="font-medium text-xs text-onPrimary">Light UI</Text>
          </View>
          <View className="rounded-full bg-white/15 px-3 py-1.5">
            <Text className="font-medium text-xs text-onPrimary">
              Dark actions
            </Text>
          </View>
        </View>
      </View>

      <View className="mb-5 rounded-[24px] border border-hairline bg-canvasElevated p-4">
        <Text className="mb-1 font-bold text-lg text-ink">Quick actions</Text>
        <Text className="text-sm leading-6 text-body">
          Start with a dark primary button for the main action, then use a
          lighter surface for supporting actions.
        </Text>
      </View>

      <View className="mt-2 flex-row flex-wrap gap-3">
        <Link href="/about" asChild>
          <CustomButton title="Open About" variant="buttonPrimary" />
        </Link>
        <CustomButton title="Preview Pack" variant="buttonSecondary" />
      </View>
    </View>
  );
};

export default Index;
