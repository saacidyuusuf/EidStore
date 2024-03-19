import React from "react";
import { View, Text } from "react-native";
import { StyleSheet, Platform, StatusBar } from "react-native";

const LatestClothes = () => {
  return (
    <View style={styles.Latestcontainer}>
      <Text>LatestClothes</Text>
    </View>
  );
};

export default LatestClothes;

const styles = StyleSheet.create({
  Latestcontainer: {
    flex: 1,
  },
});
