import { Tabs } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Image, Text } from "react-native";
import { icons } from "../../constant/icon";

function TabIcon({ icon, name, focused }: any) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animate to a larger scale if focused, otherwise back to normal
    Animated.spring(scaleAnim, {
      toValue: focused ? 1.1 : 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }, [focused, scaleAnim]);

  return (
    <Animated.View
      style={[{ transform: [{ scale: scaleAnim }] }]}
      className="items-center justify-center w-16 gap-1"
    >
      <Image
        source={icon}
        resizeMode="contain"
        className="w-[100%] height-[100%]"
      />
      <Text
        className={`${
          focused ? "font-home-semibold" : "font-home-regular"
        } text-[16px]`}
      >
        {name}
      </Text>
    </Animated.View>
  );
}

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarItemStyle: {
          width: 100,
          height: 110,
          // borderWidth: 2,
        },
        tabBarStyle: {
          // backgroundColor: "white",
          height: 100,
          paddingTop: 30, //adjusts th items in the tab
          backgroundColor: "white", // For Debugging...
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={focused ? icons.coloredHouse : icons.unColoredHouse}
              name="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="analyst"
        options={{
          title: "analyst",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.faceAnalyze} name="" />
          ),
        }}
      />
      <Tabs.Screen
        name="tracker"
        options={{
          title: "tracker",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={focused ? icons.coloredCalender : icons.unColoredCalender}
              name="Tracker"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
