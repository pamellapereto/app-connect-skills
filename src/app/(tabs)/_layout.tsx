import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={() => ({
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 63,
        borderTopWidth: 0,
      },
      tabBarHideOnKeyboard: true,
      headerShown: false
    })}>
      <Tabs.Screen name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <View style={iconContainerStyle}>
                <Feather name="users" size={30} color={color} />
              </View>
              {focused && (
                <View style={{ width: 20, height: 4, borderRadius: 2, marginBottom: 3, }} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen name="liked"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <View style={iconContainerStyle}>
                <Feather name="users" size={30} color={color} />
              </View>
              {focused && (
                <View style={{ width: 20, height: 4, borderRadius: 2, marginBottom: 3, }} />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen name="match"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              <View style={iconContainerStyle}>
                <Feather name="users" size={30} color={color} />
              </View>
              {focused && (
                <View style={{ width: 20, height: 4, borderRadius: 2, marginBottom: 3, }} />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const iconContainerStyle = {
  width: 50,
  height: 50,
  justifyContent: "center" as const,
  alignItems: "center" as const,
  marginTop: 20,
};