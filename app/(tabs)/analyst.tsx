import { image } from "@/constant/image";
import { AntDesign } from "@expo/vector-icons";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Button,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Analyst = () => {
  const [facing, setFacing] = useState<CameraType>("front");
  const [count, setCount] = useState<number>(0);
  const [analyze, setAnalyze] = useState<string>("");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(anim, {
        toValue: 1,
        duration: 2000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ).start();
  }, [anim]);

  const scale = anim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.4] });
  const opacity = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 0],
  });

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

  const capture = () => {
    if (cameraRef.current) {
      cameraRef.current.takePictureAsync().then((photo) => {
        console.log("Photo captured at:", photo?.uri);
      });
    }

    setTimeout(() => {
      if (count > 0 && count < 100) return;

      setCount(0);
      setAnalyze("Analyze.");

      // Random duration between 1 and 5 seconds (1000ms - 5000ms)
      const captureDuration = Math.floor(Math.random() * 4000) + 1000;
      const captureStepTime = captureDuration / 100;

      const analyzeForm = ["Analyzing.", "Analyzing..", "Analyzing..."];
      let index = 0;

      const analyzeInterval = setInterval(() => {
        index = (index + 1) % analyzeForm.length;
        setAnalyze(analyzeForm[index]);
      }, 500);

      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            clearInterval(analyzeInterval);
            setAnalyze("Completed");

            return 100;
          }
          return prev + 1;
        });
      }, captureStepTime);
    }, 3000);
  };

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
          <CameraView ref={cameraRef} facing={facing} style={{ flex: 1 }} />
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => capture()}
        >
          <Animated.View
            style={[styles.ping, { transform: [{ scale }], opacity }]}
          />
          {count || analyze ? (
            <Text className="text-white font-home-semibold text-[20px]">
              {count} % <Text>{analyze}</Text>
            </Text>
          ) : (
            <Image source={image.startButton} />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Analyst;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  ping: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "rgba(255,255,255,0.5)",
    position: "absolute",
  },
});

// hen the Button is clicked, pick a random number from 1 - 5 secs
// The Number Chosen should be used for a setTimeout
//  1. start Button Counts from 1 - 100% during the secs chosen
//  2. Capture
