import React, { useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

const Signin2 = () => {
  const [code, setCode] = useState("");
  const codeLength = 4;

  // Creating a Ref for the hidden input
  const inputRef = useRef<TextInput>(null);

  return (
    <View className="flex-1 p-6">
      {/* Heading */}
      <View className="items-center justify-center">
        <Text className="font-home-bold text-[16px]">Forgot Password</Text>
      </View>

      {/* description */}
      <View>
        <Text
          className="text-gray-500 text-[16px] text-center"
          numberOfLines={2}
        >
          Enter your email for the verification process. We will send four
          digits OTP number to your email
        </Text>
      </View>

      {/* OTP */}
      <View>
        <Text>OTP</Text>
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
                  <Text>{code[index]}</Text>
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
    </View>
  );
};

export default Signin2;
