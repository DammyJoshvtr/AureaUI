import EllipseBlur from "@/components/ellipseBlur";
import FullCalendar from "@/components/FullCalendar";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Tracker = () => {
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <EllipseBlur />

      <FullCalendar date={date} onChange={setDate} />
    </SafeAreaView>
  );
};

export default Tracker;
