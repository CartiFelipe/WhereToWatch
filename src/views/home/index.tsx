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

type Props = StackScreenProps<StackParamList, "Home">;

type MoviesRecord = {
  moviesOfTheWeek: Movie[];
  myMovies: Movie[];
};

const Index = ({ navigation, route }: Props) => {
  const [movies, setMovies] = useState<MoviesRecord>({
    moviesOfTheWeek: [],
    myMovies: [],
  });
  const apiKey = "4a8070c06285bbe866759a69e44acdd7";

  async function getData() {
    const page = 1;
    const trending = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}`
    ).then((response) => {
      return response.json();
    });

    const trendingAux: Movie[] = trending.results;

    setMovies({ ...movies, moviesOfTheWeek: trendingAux });
  }

  // const getMovie = async (name: string) => {
  //   await fetch(
  //     `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${apiKey}&query=${name}`
  //   ).then((response) => response.json().then((data) => console.log(data.results)));
  // };

  useEffect(() => {
    getData();
  }, []);

  const handlePress = (movie: Movie) => {
    navigation.goBack();
    setMovies({ ...movies, myMovies: [...movies.myMovies, movie] });
  };

  const handleCardClick = (movie: Movie) => {
    navigation.navigate("MovieDetail", { movie, handlePress });
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
