import EllipseBlur from "@/components/EllipseBlur";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Tracker = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <EllipseBlur />
    </SafeAreaView>
  );
};

export default Tracker;
