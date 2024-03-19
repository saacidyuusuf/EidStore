import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" 
      options={{
        headerTitle: 'Home page',
        headerStyle: {backgroundColor: "black"}
      }}/>
      <Stack.Screen name="clothes/[id]"
       options={{
        headerTitle: 'Home page'
      }}
      />
    </Stack>
  );
};

export default Layout;
