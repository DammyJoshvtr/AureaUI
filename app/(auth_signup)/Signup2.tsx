import Password from "@/pages/password";
import React, { useState } from "react";
import { View } from "react-native";

const Signup2 = () => {
  const [password, setPassword] = useState("");

  return (
    <View className="p-10 flex-1 flex-col gap-4">
      <Password />
    </View>
  );
};

export default Signup2;
