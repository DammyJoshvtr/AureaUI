import { Tabs } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        // tabBarItemStyle: {},
        // tabBarStyle: {},
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
        }}
      />
      <Tabs.Screen
        name="analyst"
        options={{
          title: "analyst",
        }}
      />
      <Tabs.Screen
        name="tracker"
        options={{
          title: "tracker",
        }}
      />
    </Tabs>
  );
};

export default Layout;
