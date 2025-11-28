import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeRedirectUri } from "expo-auth-session";
import { useAuthRequest } from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth() {
  useEffect(() => {
    console.log("Redirect URI:", makeRedirectUri())
  }, []);

  const redirectUri = makeRedirectUri({
    scheme: "appoutmoni",
    // @ts-ignore
    useProxy: true,
  });

  const [request, response, promptAsync] = useAuthRequest({
    clientId: "209884245704-0q37jp166fbfiare7tfb2447ubk20etb.apps.googleusercontent.com",
    scopes: ["profile", "email"],
    selectAccount: true,
    redirectUri,
  });

  useEffect(() => {
    (async () => {
      if (response?.type === "success") {
        const idToken = response.authentication?.idToken;

        if (idToken) {
          await AsyncStorage.setItem("idToken", idToken);
          console.log("Google Sign-In success");
        }
      }
    })();
  }, [response]);

  return { promptAsync };
}
