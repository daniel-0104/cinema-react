import { Text, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export default function ThemeText({ style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return <Text style={[{ color: theme.title }, style]} {...props} />;
}
