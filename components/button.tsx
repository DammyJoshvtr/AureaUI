import AntDesign from "@expo/vector-icons/AntDesign";
import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ title, showIcon }: { title: string; showIcon: boolean }) => {
  return (
    <TouchableOpacity className="justify-center items-center bg-confirm-button w-full h-16 rounded-full overflow-hidden">
      {/* Ellipse blur */}
      <View>
        <View
          className="absolute bg-white/40 w-[250px] h-[250px] rounded-full -bottom-64 -left-10"
          style={{ filter: "blur(40px)" }}
        />

        <BlurView intensity={80} tint="light" style={StyleSheet.absoluteFill} />
      </View>

      <View className="flex-row gap-1 items-center justify-center">
        <Text className="text-center font-home-semibold text-2xl text-white">
          {title}
        </Text>
        {showIcon && <AntDesign name="arrow-right" size={20} color="white" />}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
