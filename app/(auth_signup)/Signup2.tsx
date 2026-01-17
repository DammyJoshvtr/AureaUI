import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const Signup2 = () => {
  return (
    <View className="p-10 flex-1 flex-col gap-4">
      <View className="flex items-center justify-center">
        <Text className="text-2xl font-home-bold">Create Password</Text>
      </View>

      {/* password */}
      <View className="flex gap-2">
        <Text>Password</Text>
        <TextInput
          className="px-4 text-[16px] h-14 w-full rounded-full bg-white p-2 focus:bg-gray-300 focus:outline-none focus:border-[1px]"
          placeholder="Enter Password"
          secureTextEntry
        />
      </View>

      {/* Confirm Password */}
      <View className="flex gap-2">
        <Text>Confirm Password</Text>
        <TextInput
          className="px-4 text-[16px] h-14 w-full rounded-full bg-white p-2 focus:bg-gray-300 focus:outline-none focus:border-[1px]"
          placeholder="Enter Password"
          secureTextEntry
        />
      </View>

      <TouchableOpacity className="w-full">
        <Text>Create Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup2;
