import { Tabs } from "expo-router";
import { Crown, Gift, Settings, SquarePen } from "lucide-react-native";

export default function TabBar() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Anket",
          tabBarIcon: ({ color }) => <SquarePen size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: "Liderlik Tablosu",
          tabBarIcon: ({ color }) => <Crown size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="competitions"
        options={{
          title: "Yarışmalar",
          tabBarIcon: ({ color }) => <Gift size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Ayarlar",
          tabBarIcon: ({ color }) => <Settings size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
