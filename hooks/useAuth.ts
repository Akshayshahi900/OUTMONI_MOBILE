import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export function useAuth() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("idToken");
      setAuthenticated(!!token);
      setLoading(false);
    })();
  }, []);

  return { loading, authenticated };
}
