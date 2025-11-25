import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
 
export default function TabLayout() { 
  return ( 
    <Tabs 
      screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: "#111827", 
        tabBarInactiveTintColor: "#9ca3af", 
        tabBarStyle: { backgroundColor: "#ffffff", borderTopWidth: 0.5 }, 
      }} 
    > 
      <Tabs.Screen 
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => ( 
            <Ionicons name="home-outline" color={color} size={size} /> 
          ), 
        }} 
      /> 
    </Tabs> 
  ); 
} 
