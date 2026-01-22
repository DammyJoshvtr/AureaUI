import Button from "@/components/button";
import { icons } from "@/constant/icon";
import { Checkbox } from "expo-checkbox";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

const Signin = () => {
  const [password, setPassword] = useState("dami12");
  const [email, setEmail] = useState("damilolajoshua2021@gmail.com");
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View className="flex-1 p-6">
      {/* Email Field */}
      <View className="mb-6">
        <Text className="text-[16px] font-home-semibold mb-2">Email</Text>
        <TextInput
          className="px-4 text-[16px] h-14 w-[100%] rounded-full bg-white p-2 focus:bg-gray-300 focus:outline-none focus:border-[1px]"
          placeholder="Enter your email"
          autoCorrect={false}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
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

      {/* Remember Me && Forgot password */}
      <View className="flex-row justify-between items-center mb-6">
        <View className="flex-row gap-1 items-center">
          <Checkbox
            style={{ margin: 8 }}
            onValueChange={setIsChecked}
            color={isChecked ? "#4630EB" : undefined}
            value={isChecked}
          />

          <Text className="font-home-regular text-[16px]">Remember me</Text>
        </View>

        <Link href={"/Signin2"}>
          <Text className="font-h ome-semibold text-[16px]">
            Forgot Password?
          </Text>
        </Link>
      </View>
      {/* Signin Button */}
      <View>
        <Button title="Sign in" showIcon={false} />
      </View>

      <View className="flex-row items-center my-6 px-2">
        {/* Left Line */}
        <View className="flex-1 h-[1px] bg-gray-300" />

        {/* Text */}
        <Text className="mx-4 font-home-regular text-gray-500 text-[14px]">
          Or sign in with
        </Text>

        {/* Right Line */}
        <View className="flex-1 h-[1px] bg-gray-300" />
      </View>

      {/* Provider container */}
      <View className="flex-row items-center justify-center">
        <View className="flex-row gap-3">
          <View className="bg-white p-3 rounded-lg">
            <Image source={icons.apple} />
          </View>

          <View className="bg-white p-3 rounded-lg">
            <Image source={icons.google} />
          </View>

          <View className="bg-white p-3 rounded-lg">
            <Image source={icons.facebook} />
          </View>
        </View>
      </View>

      {/* Don't have an account? */}
      <View className="flex-1 items-center justify-end mb-8">
        <Text className="text-[16px] font-home-regular">
          Do you have an account?{" "}
          <Link href={"/Signup"}>
            <Text className="font-home-semibold">Sign in</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default Signin;
