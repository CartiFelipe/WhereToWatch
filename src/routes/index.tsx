import { NavigationContainer } from "@react-navigation/native";
import { default as StackRoutes } from "./stackroutes";
export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
