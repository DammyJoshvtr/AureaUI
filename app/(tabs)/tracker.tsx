import BasicBottomSheetExample from "@/components/buttomSheet";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tracker = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text>Tracker</Text>
      <BasicBottomSheetExample />
    </SafeAreaView>
  );
};

export default Tracker;
