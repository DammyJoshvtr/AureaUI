import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Slot, usePathname, useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SignupLayout = () => {
  // const [isKeyboardView, setIsKeyboardView] = useState(false);

  // useEffect(() => {
  //   // Listen For Keyboard popping up
  //   const showSubscription = Keyboard.addListener("keyboardDidShow", () =>
  //     setIsKeyboardView(true),
  //   );

  //   // Listen for keyboard hiding
  //   const hideSubscription = Keyboard.addListener("keyboardDidHide", () =>
  //     setIsKeyboardView(false),
  //   );

  //   return () => {
  //     showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // }, []);

  const router = useRouter();

  const pathName = usePathname();

  const getHeading = () => {
    if (pathName.includes("Signup") || pathName.includes("Signup2"))
      return "Register";
    if (pathName.includes("Signin") || pathName.includes("Signin2"))
      return "Welcome Back";
    return "AureaKit";
  };

  return (
    <View className="flex-1 bg-primary">
      {/* Top Header - 30% */}
      <View className="h-[30%] px-4">
        {/* back router */}
        <TouchableOpacity className="mt-10" onPress={() => router.back()}>
          <AntDesign name="arrow-left" size={24} color="white" />
        </TouchableOpacity>

        {/* Heading */}
        <View className="flex-1 items-center justify-center">
          <Text className="text-white font-home-bold text-[34px] text-center tracking-[1px]">
            {getHeading()}
          </Text>
          <Text className="text-gray-300 font-home-medium text-[16px] text-center mt-2">
            Please enter your details
          </Text>
        </View>
      </View>

      <View className="h-[70%] rounded-t-[45px] bg-white/50 w-full overflow-hidden absolute bottom-0">
        {/* <ScrollView contentContainerStyle={{ flex: 1 }}> */}
        {/* First Ellipse for bluring */}
        <View
          className="absolute -top-20 -right-28 w-[400px] h-[500px] rounded-full bg-white opacity-50"
          style={{ filter: "blur(40px)" }} // Optional extra softness
        />

        {/* Second Ellipse For Bluring */}
        <View
          className="absolute -bottom-20 -left-28 w-[400px] h-[500px] rounded-full bg-black/20 opacity-50"
          style={{ filter: "blur(40px)" }} // Optional extra softness
        />

        {/* 2. BlurView stretched to fill the container */}
        <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />

        <BlurView />
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <Slot />
        </ScrollView>
      </View>
    </View>
  );
};

export default SignupLayout;
