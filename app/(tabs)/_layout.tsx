import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { icons } from "../../constant/icon";

function TabIcon({ icon, name, focused }: any) {
  return (
    <View className="items-center justify-center w-16 gap-1">
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
    </View>
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
          backgroundColor: "white",
          height: 100,
          paddingTop: 30, //adjusts th items in the tab
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
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
