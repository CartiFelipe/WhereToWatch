import { createStackNavigator } from "@react-navigation/stack";
import { Home, MovieDetail } from "../../views";
import { Movie } from "../../views/home";

export type StackParamList = {
  Home: undefined;
  MovieDetail: { movie: Movie; handlePress: (movie: Movie) => void };
};

const index = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{ headerTitle: "Detalhes do filme" }}
      />
    </Stack.Navigator>
  );
};
export default index;
