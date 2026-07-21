import { View ,Pressable,Text} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function CircleButton () {
    return (
          <View className="bg-red-900 w-full max-w-lg self-center mx-auto absolute bottom-0 h-48 rounded-3xl p-6 justify-between items-center shadow-xl">
        <Text className="text-3xl text-white font-bold">Sticker Picker</Text>
        <View className="w-20 h-20 border-4 border-amber-300 rounded-full p-1 justify-center items-center">
          <Pressable className="w-full h-full justify-center items-center rounded-full bg-white active:opacity-80 shadow-md">
            <MaterialIcons name="add" size={38} color="#25292e" />
          </Pressable>
        </View>
      </View>
    )
}