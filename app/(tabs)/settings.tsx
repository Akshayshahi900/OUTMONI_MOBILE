import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Settings() {
  const logout = async () => {
    await AsyncStorage.removeItem("idToken");
    router.replace("/(auth)/login");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Settings</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
