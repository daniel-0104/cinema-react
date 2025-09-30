import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.navBackground,
            height: 100,
          },
          tabBarActiveTintColor: theme.textColorFocus,
          tabBarInactiveTintColor: theme.textColor,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={18}
                name={focused ? "home" : "home-outline"}
                color={focused ? theme.textColorFocus : theme.textColor}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="timeTable"
          options={{
            title: "Time Table",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={18}
                name={focused ? "time" : "time-outline"}
                color={focused ? theme.textColorFocus : theme.textColor}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="ticket"
          options={{
            title: "Ticket Check",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={18}
                name={focused ? "ticket" : "ticket-outline"}
                color={focused ? theme.textColorFocus : theme.textColor}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="promotion"
          options={{
            title: "Promotions",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={18}
                name={focused ? "gift" : "gift-outline"}
                color={focused ? theme.textColorFocus : theme.textColor}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
