import WeekCalendar from "@/components/calendars";
import { icons } from "@/constant/icon";
import { image } from "@/constant/image";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Home = () => {
  const [date, setDate] = useState(new Date());

  // Reusable Tailwind class string to avoid repetition
  const headerIconStyle = "w-[50px] h-[50px] rounded-full bg-white";

  return (
    <View className="bg-primary flex-1 relative">
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
          flex: 1,
          paddingHorizontal: 15,
        }}
      >
        {/* Header Icon */}
        <View className="mt-[50px] w-full h-[70px] flex-row justify-between items-center">
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

        <View className="flex-col w-full gap-4 border-t-[1px] border-b-[1px] border-white my-3">
          <WeekCalendar date={date} onChange={(newDate) => setDate(newDate)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
