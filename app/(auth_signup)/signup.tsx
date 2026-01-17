import RegisterFields from "@/components/registerFields";
import React from "react";
import { View } from "react-native";

const Signup = () => {
  return (
    <View className="p-10 flex-1 flex-col">
      <RegisterFields />
    </View>
  );
};

export default Signup;
