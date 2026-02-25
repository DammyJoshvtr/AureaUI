import WeekCalendar from "@/components/calendars";
import { icons } from "@/constant/icon";
import { image } from "@/constant/image";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

const RecommendationCard = ({
  referenceImage,
  title,
  description,
}: {
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
          <View className="w-[80%] h-10 border-[1px] border-gray-500 rounded-full items-center justify-center">
            <Text>Read More</Text>
          </View>

          <View className="w-10 h-10 border-[1px] border-gray-500 rounded-full items-center justify-center">
            <AntDesign name="plus" size={15} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

const Home = () => {
  const [date, setDate] = useState(new Date());

  // Reusable Tailwind class string to avoid repetition
  const headerIconStyle = "w-[50px] h-[50px] rounded-full bg-white";

  const cardTitle = "font-home-regular text-[18px] text-white";

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

      {/* ----CONTENT----- */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 15,
          gap: 15,
        }}
      >
        {/* Header Icon */}
        <View className="w-full h-[70px] flex-row justify-between items-center">
          {/* Profile Picture */}
          <View className={headerIconStyle} />

          {/* Notification */}
          <View
            className={`${headerIconStyle} flex justify-center items-center`}
          >
            <Image source={icons.notification} resizeMode="contain" />
          </View>
        </View>

        {/* Greeting Text */}
        <View>
          <Text className="font-home-regular text-[16px] text-white">
            Good Morning, Dammy
          </Text>

          <Text className="leading font-home-semibold text-[24px] text-white">
            Let's take care of your skin
          </Text>
        </View>

        {/* Calendar */}
        <View className="flex-col w-full gap-4 border-t-[1px] border-b-[1px] border-white">
          <WeekCalendar date={date} onChange={(newDate) => setDate(newDate)} />
        </View>

        {/* Checklist */}
        <View className="gap-5">
          <Text className={cardTitle}>Your daily checklist</Text>

          {/* Square container */}
          <View className="justify-between flex-row w-full">
            <RoutineCard
              title={`Morning\nRoutine`}
              step={8}
              total={10}
              icon={icons.sun}
              theme="light"
            />
            <RoutineCard
              title={`Night\nRoutine`}
              step={3}
              total={10}
              icon={icons.moon}
              theme="dark"
            />
          </View>
        </View>

        {/* Recommendation */}
        <View className="gap-5">
          <Text className={cardTitle}>Our recommendation</Text>

          <RecommendationCard
            referenceImage={image.girlSmall}
            title="Morning Cream"
            description="Finish strong with your cream. it seals in all the goodness."
          />

          <RecommendationCard
            referenceImage={image.girlSmall}
            title="Face Massage"
            description="A gentle massage boosts circulation and relaxes tension."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
