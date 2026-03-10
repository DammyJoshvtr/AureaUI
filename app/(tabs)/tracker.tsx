import EllipseBlur from "@/components/ellipseBlur";
import { AntDesign } from "@expo/vector-icons";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tracker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // ==========================================
  // ========== CALENDAR LOGIC START ==========
  // ==========================================

  const generateCalendarDays = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    return eachDayOfInterval({ start: startDate, end: endDate });
  };

  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendarDays = generateCalendarDays();

  // ==========================================
  // =========== CALENDAR LOGIC END ===========
  // ==========================================

  return (
    <SafeAreaView className="flex-1 bg-primary">
      {/* Ellipse Blur */}
      <EllipseBlur />

      {/* Header Title */}
      <View className="p-4 items-center">
        <Text className="text-white font-home-semibold text-[20px]">
          Tracker
        </Text>
      </View>

      {/* Month and Year Navigation */}
      <View className="flex-row justify-between items-center px-6 mb-4">
        {/* Year Dropdown */}
        <TouchableOpacity className="flex-row items-center gap-x-2">
          <Text className="text-white font-home-semibold text-lg">
            {format(currentMonth, "yyyy")}
          </Text>
          <AntDesign name="down" size={16} color="white" />
        </TouchableOpacity>

        {/* Month Navigation */}
        <View className="flex-row items-center gap-x-4">
          <TouchableOpacity onPress={handlePrevMonth}>
            <AntDesign name="left" size={20} color="white" />
          </TouchableOpacity>
          <Text className="text-white font-home-semibold text-lg w-28 text-center">
            {format(currentMonth, "MMMM")}
          </Text>
          <TouchableOpacity onPress={handleNextMonth}>
            <AntDesign name="right" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body Container */}
      <View className="bg-white flex-1 w-full p-4 rounded-t-3xl mt-4">
        {/* ========================================== */}
        {/* ============ CALENDAR UI START =========== */}
        {/* ========================================== */}

        {/* Weekday Headers (Sun, Mon, etc.) */}
        <View className="flex-row justify-between mb-2">
          {weekDays.map((day) => (
            <Text
              key={day}
              className="w-[14%] text-center text-gray-400 font-home-regular"
            >
              {day}
            </Text>
          ))}
        </View>

        {/* Days Grid */}
        <View className="flex-row flex-wrap">
          {calendarDays.map((day, index) => {
            const isSelected = isSameDay(day, selectedDate);
            const isCurrentMonth = isSameMonth(day, currentMonth);

            return (
              <TouchableOpacity
                key={index}
                className={`w-[14%] h-20 items-center justify-center rounded-xl mb-2 bg-gray-200 ${
                  isSelected ? "bg-primary" : ""
                }`}
                onPress={() => setSelectedDate(day)}
              >
                <Text
                  className={`${
                    isSelected
                      ? "text-white font-home-semibold text-2xl"
                      : isCurrentMonth
                        ? "text-black font-home-regular text-2xl"
                        : "text-gray-300 font-home-regular text-2xl"
                  }`}
                >
                  {format(day, "d")}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* ========================================== */}
        {/* ============= CALENDAR UI END ============ */}
        {/* ========================================== */}
      </View>
    </SafeAreaView>
  );
};

export default Tracker;
