import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

const RoutineCard = ({
  title,
  step,
  total,
  icon,
  theme = "light",
}: {
  title: string;
  step: number;
  total: number;
  icon: any;
  theme?: "light" | "dark";
}) => {
  const isDark = theme === "dark";

  return (
    <View
      className={`p-3 w-[48%] rounded-xl ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <View className="flex-row items-center justify-between w-full">
        <View className="w-[36px] h-[36px] rounded-full items-center justify-center border-[1px] border-gray-500">
          <Image source={icon} resizeMode="contain" />
        </View>
        <View
          className={`w-[36px] h-[36px] rounded-full items-center justify-center ${
            isDark ? "bg-white" : "bg-gray-900"
          }`}
        >
          <AntDesign
            name="arrow-right"
            size={24}
            color={isDark ? "black" : "white"}
            style={{ transform: [{ rotate: "-45deg" }] }}
          />
        </View>
      </View>

      <View>
        <Text
          className={`text-[24px] font-home-semibold mt-10 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </Text>

        <View className="flex-row items-center gap-2 w-full mt-4">
          <View
            className={`rounded-full px-3 py-1 ${
              isDark ? "bg-[#CABEA6]" : "bg-primary"
            }`}
          >
            <Text
              className={`text-[10px] font-home-semibold ${
                isDark ? "text-black" : "text-white"
              }`}
            >
              Step {step}/{total}
            </Text>
          </View>

          <View
            className={`flex-1 h-1.5 rounded-full overflow-hidden ${
              isDark ? "bg-white" : "bg-gray-200"
            }`}
          >
            <View
              className={`h-full rounded-full ${
                isDark ? "bg-[#CABEA6]" : "bg-primary"
              }`}
              style={{ width: `${(step / total) * 100}%` }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RoutineCard;
