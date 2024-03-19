import React from "react";
import { useLocalSearchParams } from "expo-router";


const ClothesById = () => {
    const {id} = useLocalSearchParams()
  return (
    <View>
    <Text>User {id}:</Text>
    </View>
  );
};

export default ClothesById;
