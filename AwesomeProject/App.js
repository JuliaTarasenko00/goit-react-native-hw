import LoginScreen from "./src/PostsScreen/LoginScreen";
import Registration from "./src/PostsScreen/RegistrationScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/font/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/font/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/font/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Registration />
      {/* <LoginScreen /> */}
    </>
  );
}
