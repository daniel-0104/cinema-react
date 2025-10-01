import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

export default function MovieCard({ title, poster_path }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: 15,
    width: 120,
  },
  image: {
    width: 120,
    height: 180,
    borderRadius: 8,
  },
  title: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },
});
