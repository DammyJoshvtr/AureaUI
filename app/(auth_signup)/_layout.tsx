import { BlurView } from "expo-blur";
import { Slot, usePathname } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SignupLayout = () => {
  const pathName = usePathname();

  const getHeading = () => {
    if (pathName.includes("Signup") || pathName.includes("Signup2"))
      return "Register";
    if (pathName.includes("Signin")) return "Welcome Back";
    return "AureaKit";
  };

  return (
    <View className="flex-1 bg-primary">
      {/* Top Header - 30% */}
      <View className="h-[30%] items-center justify-center px-4">
        <Text className="text-white font-home-bold text-[34px] text-center tracking-[1px]">
          {getHeading()}
        </Text>
        <Text className="text-gray-300 font-home-medium text-[16px] text-center mt-2">
          Please enter your details
        </Text>
      </View>

      {/* Dynamic Body - 70% */}
      <View className="h-[70%] rounded-t-[45px] bg-white/50 w-full overflow-hidden">
        {/* First Ellipse for bluring */}
        <View
          className="absolute -top-20 -right-28 w-[400px] h-[500px] rounded-full bg-white opacity-50"
          style={{ filter: "blur(40px)" }} // Optional extra softness
        />

        {/* Second Ellipse For Bluring */}
        <View
          className="absolute -bottom-20 -left-28 w-[400px] h-[500px] rounded-full bg-white opacity-50"
          style={{ filter: "blur(40px)" }} // Optional extra softness
        />

        {/* 2. BlurView stretched to fill the container */}
        <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />

        <BlurView />
        <Slot />
      </View>
    </View>
  );
};

export default SignupLayout;

// bg-white/70
