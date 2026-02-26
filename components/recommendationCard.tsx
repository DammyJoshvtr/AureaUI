import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const RecommendationCard = ({
  id,
  referenceImage,
  title,
  description,
}: {
  id: string;
  referenceImage: any;
  title: string;
  description: string;
}) => {
  return (
    <View className="h-[143px] bg-white p-4 rounded-xl flex-row items-center gap-3">
      <View className="w-[30%] h-full">
        <Image
          source={referenceImage}
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>

      <View className="flex-1 gap-2">
        <Text className="font-home-semibold text-[16px]">{title}</Text>

        <Text className="font-home-medium text-[14px] text-gray-700">
          {description.length > 60
            ? description.slice(0, 60) + "..."
            : description}
        </Text>

        <View className="flex-row justify-between items-center">
          <Link href={`/recommendation/${id}`} asChild>
            <TouchableOpacity className="w-[80%] h-10 border-[1px] border-gray-500 rounded-full items-center justify-center">
              <Text>Read More</Text>
            </TouchableOpacity>
          </Link>

          <View className="w-10 h-10 border-[1px] border-gray-500 rounded-full items-center justify-center">
            <AntDesign name="plus" size={15} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecommendationCard;
