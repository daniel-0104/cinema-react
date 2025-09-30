import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Ticket() {
  return (
    <View style={styles.container}>
      <Text>Ticket</Text>
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
