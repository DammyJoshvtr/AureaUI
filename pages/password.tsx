import Button from "@/components/button";
import { icons } from "@/constant/icon";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

const Password = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Validation Logic
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isLongEnough = password.length >= 8;

  return (
    <>
      {/* {" "} */}
      {/* Wrapped in View for better layout control */}
      <View className="items-center justify-center mb-8">
        <Text className="text-2xl font-home-bold">Create Password</Text>
      </View>
      {/* Password Field */}
      <View className="gap-2 mb-6">
        <Text className="text-[16px] font-home-semibold">Password</Text>
        <TextInput
          className="px-4 text-[16px] h-14 w-full rounded-full bg-white p-2 focus:bg-gray-300 focus:outline-none focus:border-[1px]"
          placeholder="Eight characters or more"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)} // Corrected handler
        />
      </View>
      {/* Confirm Password Field */}
      <View className="gap-2 mb-6">
        <Text className="text-[16px] font-home-semibold">Confirm Password</Text>
        <TextInput
          className="px-4 text-[16px] h-14 w-full rounded-full bg-white p-2 focus:bg-gray-300 focus:outline-none focus:border-[1px]"
          placeholder="Confirm your password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)} // Linked to state
        />
      </View>
      {/* Validation Checklist */}
      <View className="mt-3 gap-1 p-2">
        <Text className="font-home-bold text-[16px]">
          Password must contain:
        </Text>

        {/* Upper Case Check */}
        <View className="flex-row items-center justify-start gap-1">
          <Image
            source={hasUppercase ? icons.check : icons.xcircle}
            className="w-5 h-5" // Ensure icons have size
            style={{ tintColor: hasUppercase ? "#22c55e" : "#9ca3af" }} // Optional: Green if true
          />
          <Text
            className={`font-home-regular text-[16px] ${hasUppercase ? "text-green-600" : "text-gray-500"}`}
          >
            At least 1 upper case
          </Text>
        </View>

        {/* Number Check */}
        <View className="flex-row items-center justify-start gap-1">
          <Image
            source={hasNumber ? icons.check : icons.xcircle}
            className="w-5 h-5"
            style={{ tintColor: hasNumber ? "#22c55e" : "#9ca3af" }}
          />
          <Text
            className={`font-home-regular text-[16px] ${hasNumber ? "text-green-600" : "text-gray-500"}`}
          >
            At least 1 number
          </Text>
        </View>

        {/* Length Check */}
        <View className="flex-row items-center justify-start gap-1">
          <Image
            source={isLongEnough ? icons.check : icons.xcircle}
            className="w-5 h-5"
            style={{ tintColor: isLongEnough ? "#22c55e" : "#9ca3af" }}
          />
          <Text
            className={`font-home-regular text-[16px] ${isLongEnough ? "text-green-600" : "text-gray-500"}`}
          >
            At least 8 characters
          </Text>
        </View>
      </View>
      {/* Bottom Action Area */}
      <View className="flex-1 justify-end items-center mb-4 gap-3">
        <Text className="text-[16px] font-home-regular">
          Do you have an account?{" "}
          <Link href={"/Signin"}>
            <Text className="font-home-semibold">Sign in</Text>
          </Link>
        </Text>
        <Button title="Create Password" showIcon={true} />
      </View>
    </>
  );
};

export default Password;
