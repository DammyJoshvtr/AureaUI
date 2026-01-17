import { Checkbox } from "expo-checkbox";
import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import Button from "./button";

const RegisterFields = () => {
  const [countryCode, setCountryCode] = useState("NG");
  const [isChecked, setIsChecked] = useState(true);
  const [callingCode, setCallingCode] = useState("+234");

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
          <View className="flex-row bg-white h-14 w-[27%] items-center justify-center rounded-full">
            <CountryPicker
              withFilter
              withFlag
              withCallingCode
              countryCode={countryCode}
              onSelect={(country) => {
                setCountryCode(country.cca2);
                setCallingCode(country.callingCode[0]);
              }}
            />

            <Text>{callingCode}</Text>
          </View>
          <TextInput
            className="px-4 text-[16px] h-14 w-[70%] rounded-full bg-white p-2 focus:bg-gray-300 focus:outline-none focus:border-[1px]"
            placeholder="Enter your number"
            autoCorrect={false}
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* Terms and Condition Text && Checkbox */}
      <View className="mt-6 flex-row items-center gap-3">
        <Checkbox
          style={{ margin: 8 }}
          onValueChange={setIsChecked}
          color={isChecked ? "#4630EB" : undefined}
          value={isChecked}
        />
        <Text className="text-[17px] font-home-regular">
          I hereby acknoledge and agree to the
          <Text className="font-home-semibold"> terms</Text> and{" "}
          <Text className="font-home-semibold">conditions</Text>
        </Text>
      </View>

      <View className="flex-1 items-center justify-end gap-3">
        <Text className="text-[16px] font-home-regular">
          Do you have an account?{" "}
          <Text className="font-home-semibold">Sign in</Text>
        </Text>
        <Link href={"/Signup2"} asChild>
          <Button title="Next" showIcon={true} />
        </Link>
      </View>
    </>
  );
};

export default RegisterFields;
