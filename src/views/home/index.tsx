import { FC, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { List } from "../../components/";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../routes/stackroutes";

export type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  adult: boolean;
  release_date: string;
  genre_ids: number[];
};

type Props = StackScreenProps<StackParamList, "home">;

type MoviesRecord = {
  moviesOfTheWeek: Movie[];
  myMovies: Movie[];
};

const Index: FC<Props> = ({ navigation, route }) => {
  const [movies, setMovies] = useState<MoviesRecord>({
    moviesOfTheWeek: [],
    myMovies: [],
  });

  async function getData() {
    const page = 1;
    const trending = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=4a8070c06285bbe866759a69e44acdd7&page=" +
        page
    ).then((response) => {
      return response.json();
    });

    const trendingAux: Movie[] = trending.results;

    setMovies({ ...movies, moviesOfTheWeek: trendingAux });
  }

  const apiKey = "4a8070c06285bbe866759a69e44acdd7";

  const getMovie = async (name: string) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${apiKey}&query=${name}`
    ).then((response) => response.json().then((data) => console.log(data.results)));
  };

  useEffect(() => {
    getData();
    getMovie("halloween");
  }, []);

  const handleCardClick = () => {
    navigation.navigate("movie");
  };

  return (
    <SafeAreaView style={styles.container}>
      <List
        data={movies.moviesOfTheWeek}
        label="Filmes da semana"
        handleCardClick={handleCardClick}
      />

      <List
        data={movies.myMovies}
        label="Meus filmes"
        handleCardClick={handleCardClick}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#84d198",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});

export default Index;
