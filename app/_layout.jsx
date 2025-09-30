import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => <Ionicons size={18} name="home" />,
          }}
        />
        <Tabs.Screen
          name="timeTable"
          options={{
            title: "Time Table",
            tabBarIcon: ({ focused }) => (
              <Ionicons size={18} name="time-outline" />
            ),
          }}
        />
        <Tabs.Screen
          name="ticket"
          options={{
            title: "Ticket Check",
            tabBarIcon: ({ focused }) => (
              <Ionicons size={18} name="ticket-outline" />
            ),
          }}
        />
        <Tabs.Screen
          name="promotion"
          options={{
            title: "Promotions",
            tabBarIcon: ({ focused }) => (
              <Ionicons size={18} name="gift-outline" />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
