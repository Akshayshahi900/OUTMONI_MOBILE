import { useAuth } from "@/hooks/useAuth";
import { useGoogleAuth } from "@/hooks/useGoogleAuth";
import { makeRedirectUri } from "expo-auth-session";
import { Redirect } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";
console.log(makeRedirectUri());


export default function Login() {
  const { authenticated } = useAuth();
  const { promptAsync } = useGoogleAuth();

  if (authenticated) return <Redirect href="/(tabs)/home" />;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/eO3ho7M.png" }}
        style={styles.logo}
      />

      <Text style={styles.title}>Welcome to Finance Tracker</Text>
      <Text style={styles.subtitle}>Control your money. Control your life.</Text>

      <View style={{ marginTop: 40 }}>
        <Button title="Continue with Google" onPress={() => promptAsync()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 20,
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "gray" },
});
