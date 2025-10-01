import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ThemeView from "../components/ThemeView";
import ThemeText from "../components/ThemeText";
import MovieCard from "../components/MovieCard";
import { fetchPopularMovies } from "../services/api";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies().then(setMovies);
  }, []);

  return (
    <ThemeView style={styles.container}>
      <ThemeText>Popular Movies</ThemeText>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardList}
      />
    </ThemeView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  cardList: {
    marginTop: 15,
  },
});
