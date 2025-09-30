import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemeView from "../components/ThemeView";
import ThemeText from "../components/ThemeText";
import MovieCard from "../components/MovieCard";

export default function Home() {
  return (
    <ThemeView style={styles.container}>
      <>
        <ThemeText>Now Showing</ThemeText>

        <MovieCard />
      </>
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
