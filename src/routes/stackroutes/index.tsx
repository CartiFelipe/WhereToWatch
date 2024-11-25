import { createStackNavigator } from "@react-navigation/stack";
import { Home, MovieDetail } from "../../views";

export type StackParamList = {
  home: undefined;
  movie: undefined;
};

const index = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="movie" component={MovieDetail} />
    </Stack.Navigator>
  );
};
export default index;
