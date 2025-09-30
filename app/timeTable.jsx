import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TimeTable() {
  return (
    <View style={styles.container}>
      <Text>TimeTable</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
