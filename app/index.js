import { View, Text } from "react-native";
import { useState, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";

import ScreenHeaderBtn from "../components/ScreenHeader";
import Hero from "../components/hero";
import LatestClothes from "../components/LatestClothes";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "COLORS" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#2927" },
          headerShadowVisible: false,
          headerBlurEffect: "prominent",
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.saacid} dimension="100%" />
          ),
          headerTitle: "",
        }}/>

      <View>
        <Hero />
        <LatestClothes />
      </View>
    </SafeAreaView>
  );
};

export default Home;
