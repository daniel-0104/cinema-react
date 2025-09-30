import { Link } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function MovieCard() {
  return (
    <Link href="">
      <TouchableOpacity>
        <Image
          source={require("../assets/image/sonic3.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 200,
    objectFit: "cover",
    borderRadius: 5,
  },
});
