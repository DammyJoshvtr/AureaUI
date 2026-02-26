import ContinueButton from "@/components/button";
import { image } from "@/constant/image";
import { AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const recommendationItems = [
  {
    id: 1,
    title: "Morning Cream",
    description:
      "Seal in all your skincare goodness with a norishing night cream. It hydrates, repairs, repairs, and boosts your skin barrier while you sleep so you wake up fresh and radiant",
  },
  {
    id: 2,
    title: "Face Massage",
    description:
      "A gentle face massage not only feels great but also boosts circulation and helps relax facial tension. It promotes lymphatic drainage, reducing puffiness and giving your skin a natural, healthy glow.",
  },
  {
    id: 3,
    title: "Face Skin-Care Routine",
    description:
      "Follow this step-by-step guide to achieve perfect skin. From cleansing to moisturizing, consistency is key. This routine is designed to balance your skin's pH, remove impurities, and keep it hydrated throughout the day.",
  },
];

const RecomendationDetails = () => {
  const { id } = useLocalSearchParams();
  const [recommendation, setRecommendation] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const selectedItem = recommendationItems.find(
        (item) => item.id.toString() === id,
      );
      setRecommendation(selectedItem);
    }
  }, [id]);

  return (
    <SafeAreaView className="bg-primary flex-1 relative">
      {/* First Blur Ellipse */}
      <Image
        source={image.ellipseBlur}
        className="absolute left-20 bottom-48"
        resizeMode="contain"
      />

      {/* Left Blur Ellipse */}
      <Image
        source={image.ellipseBlur}
        className="absolute right-16 top-24"
        resizeMode="contain"
      />

      {/* ----------------------- */}
      {/* ---------CONTENT------- */}
      {/* ----------------------- */}

      {/* Heading */}
      <View className="flex-row items-center mx-4">
        <TouchableOpacity
          className="bg-white w-12 h-12 rounded-full flex items-center justify-center"
          onPress={() => router.back()}
        >
          <AntDesign name="arrow-left" size={24} color="gray" />
        </TouchableOpacity>

        <View className="justify-center items-center flex-1">
          <Text className="font-home-semibold text-[20px] text-white text-center">
            Recomendation
          </Text>
        </View>
      </View>

      {/* Body */}
      <View className="items-center gap-6 mx-4 mt-4 mb-4 bg-white rounded-2xl p-4">
        <Image source={image.girlBig} resizeMode="contain" />

        {recommendation && (
          <View className="gap-3">
            <Text className="font-home-semibold text-[20px]">
              {recommendation.title}
            </Text>
            <Text className="font-home-regular text-[16px]">
              {recommendation.description}
            </Text>
          </View>
        )}
        <ContinueButton title="Add to Activity" showIcon={false} />
      </View>
    </SafeAreaView>
  );
};

export default RecomendationDetails;

const styles = StyleSheet.create({});
