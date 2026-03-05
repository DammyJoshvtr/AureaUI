import { image } from "@/constant/image";
import { AntDesign } from "@expo/vector-icons";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Analyst = () => {
  const [facing, setFacing] = useState<CameraType>("front");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>We need Permission to continue using camera</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-primary">
      {/* First Blur Ellipse */}
      <Image
        source={image.ellipseBlur}
        className="absolute left-20 bottom-48"
        resizeMode="contain"
      />

      {/* Left Blur Ellipse */}
      <Image
        source={image.ellipseBlur}
        className="absolute right-16 top-24"
        resizeMode="contain"
      />

      {/* --------------------- */}
      {/* -------CONTENT------- */}
      {/* --------------------- */}

      {/* Heading */}
      <View className="flex-row items-center m-4">
        <TouchableOpacity
          className="bg-white w-12 h-12 rounded-full flex items-center justify-center absolute"
          onPress={() => router.back()}
        >
          <AntDesign name="arrow-left" size={24} color="gray" />
        </TouchableOpacity>

        <View className="justify-center items-center flex-1">
          <Text className="font-home-semibold text-[20px] text-white text-center">
            Analyst
          </Text>
        </View>
      </View>

      <View className="flex-1 items-center mt-6 gap-y-14">
        <View className="w-80 h-[30rem] bg-white rounded-full overflow-hidden border-4 border-white">
          <CameraView facing={facing} style={{ flex: 1 }} />
        </View>

        <TouchableOpacity>
          <Image source={image.startButton} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Analyst;

const styles = StyleSheet.create({});
