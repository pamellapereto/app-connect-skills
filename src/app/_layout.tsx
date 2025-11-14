import { AuthProvider } from "@/contexts/authContext";
import { Slot } from "expo-router";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

/*Redicionamento automático de acordo com a sessão*/
function MainLayout() {
  return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Slot />
                </View>
            </GestureHandlerRootView>
  );
}
export default function Root() {
  return (
  <AuthProvider>
    <MainLayout />
  </AuthProvider>
  );
}
