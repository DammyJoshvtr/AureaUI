import WeekCalendar from "@/components/calendars";
import { icons } from "@/constant/icon";
import { image } from "@/constant/image";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RecommendationCard from "@/components/recommendationCard";
import RoutineCard from "@/components/routineCard";
import { Link } from "expo-router";


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
          paddingBottom: 100,
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

        {/* <Link href={`/recommendation/[id]`} asChild>
          <Pressable>
            
          </Pressable>
        </Link> */}
          <RecommendationCard
            id="1"
            referenceImage={image.girlSmall}
            title="Morning Cream"
            description="Finish strong with your cream. it seals in all the goodness."
          />

          <RecommendationCard
            id="2"
            referenceImage={image.girlSmall}
            title="Face Massage"
            description="A gentle massage boosts circulation and relaxes tension."
          />

          <RecommendationCard
            id="3"
            referenceImage={image.girlSmall}
            title="Fsce skin-care routine"
            description="A step-by-step guide to perfect skin."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
