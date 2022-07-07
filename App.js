import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigation/navigator";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
