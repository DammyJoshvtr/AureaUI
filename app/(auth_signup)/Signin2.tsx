import Button from "@/components/button";
import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

const Signin2 = () => {
  const [code, setCode] = useState("");
  const codeLength = 5;

  // Creating a Ref for the hidden input
  const inputRef = useRef<TextInput>(null);

  return (
    <View className="flex-1 p-6">
      {/* Heading */}
      <View className="items-center justify-center">
        <Text className="font-home-bold text-[16px]">Forgot Password</Text>
      </View>

      {/* description */}
      <View className="mb-9">
        <Text
          className="text-gray-500 text-[16px] text-center"
          numberOfLines={2}
        >
          Enter your email for the verification process. We will send four
          digits OTP number to your email
        </Text>
      </View>

      {/* OTP */}
      <View className="mb-9">
        <Text className="font-home-semibold text-[16px]">OTP</Text>
        <View className="flex justify-center items-center">
          <Pressable
            onPress={() => inputRef.current?.focus()}
            className="flex-row justify-center gap-4"
          >
            {Array(codeLength)
              .fill(0)
              .map((_, index) => (
                <View
                  key={index}
                  className={`w-16 h-16 rounded-full items-center justify-center bg-white border-2 
                    ${code.length === index ? "border-primary" : "border-gray-200"}`}
                >
                  <Text className="text-3xl font-home-bold">
                    {code[index] || ""}
                  </Text>
                </View>
              ))}
          </Pressable>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={setCode}
            maxLength={codeLength}
            keyboardType="number-pad"
            className="absolute opacity-0 w-1 h-1" // Keep it hidden but functional
            autoFocus={true}
          />
        </View>
      </View>

      <Button title="Continue" showIcon={true} />

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

export default Signin2;
