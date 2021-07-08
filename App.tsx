import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [simpleCounter, setCounter] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <button
        onClick={(e) => {
          setCounter(simpleCounter + 1);
        }}
        style={{ backgroundColor: "white", boxShadow: "0 0 10px black" }}
      >
        Test buttn
      </button>
      <div>{simpleCounter}</div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "#0e0e0e",
  },
  container: {
    flex: 1,
    gap: "2rem",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
