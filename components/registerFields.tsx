import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface fields {
  name: string;
  placeholder: string;
}

const RegisterFields = () => {
  const [countryCode, setCountryCode] = useState("+1");

  return (
    <>
      {/* Full Name Field */}
      <View className="mb-6">
        <Text className="text-[16px] font-home-semibold mb-2">Full Name</Text>
        <TextInput
          className="px-4 text-[16px] h-14 w-[100%] rounded-full bg-white p-2 focus:bg-gray-300 focus:outline-none focus:border-[1px]"
          placeholder="Enter your name"
          autoCorrect={false}
        />
      </View>

      {/* Email Field */}
      <View className="mb-6">
        <Text className="text-[16px] font-home-semibold mb-2">Email</Text>
        <TextInput
          className="px-4 text-[16px] h-14 w-[100%] rounded-full bg-white p-2 focus:bg-gray-300 focus:outline-none focus:border-[1px]"
          placeholder="Enter your email"
          autoCorrect={false}
          keyboardType="email-address"
        />
      </View>

      {/* Phone Number Field */}
      <View>
        <Text className="text-[16px] font-home-semibold mb-2">
          Phone Number
        </Text>
        <View className="flex-row items-center justify-between">
          <TextInput
            className="w-[20%] px-4 text-[16px] h-14 rounded-full bg-white"
            autoCorrect={false}
            value={countryCode}
          />
          <TextInput
            className="px-4 text-[16px] h-14 w-[75%] rounded-full bg-white p-2 focus:bg-gray-300 focus:outline-none focus:border-[1px]"
            placeholder="Enter your number"
            autoCorrect={false}
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* Terms and Condition Text */}
      <View className="mt-6">
        <Text>
          I hereby acknoledge and agree to the
          <Text className="font-home-semibold"> terms</Text> and{" "}
          <Text className="font-home-semibold">conditions</Text>
        </Text>
      </View>

      <View className="flex-1 justify-end">
        <TouchableOpacity className="justify-center items-center bg-confirm-button w-full h-16 rounded-full">
          <Text className="text-center font-home-semibold font-semibold text-2xl text-white">
            Register Now
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RegisterFields;
