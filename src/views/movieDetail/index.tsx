import { StackScreenProps } from "@react-navigation/stack";
import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StackParamList } from "../../routes/stackroutes";
import dayjs from "dayjs";

type Props = StackScreenProps<StackParamList, "MovieDetail">;

const index = ({ route }: Props) => {
  const movie = route.params.movie;

  const handlePress = route.params.handlePress;

  const imgSrc = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

  const releaseDate = dayjs(movie.release_date).format("DD/MM/YYYY");

  return (
    <View style={style.container}>
      <View style={style.movieContainer}>
        <Image src={imgSrc} style={style.img} />
        <View style={style.textContainer}>
          <Text style={style.title}>{movie.title}</Text>
          <Text>Data de lançamento: {releaseDate}</Text>
          <View>
            <Text>Sinopse: </Text>
            <Text style={style.movieSynopsis}>{movie.overview}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={style.btn} onPress={() => handlePress(movie)}>
        <Text style={{ textAlign: "center" }}>Adicionar a WatchList</Text>
      </TouchableOpacity>
    </View>
  );
};
export default index;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#84d198",
    height: "100%",

    flex: 1,

    gap: 20,
  },

  movieContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  textContainer: {
    margin: 10,

    width: 200,
    gap: 10,
  },

  img: {
    height: 197,
    width: 147,
    margin: 10,

    borderColor: "#ffffff",
    borderWidth: 3,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  movieSynopsis: {
    width: 190,
    lineHeight: 18,
  },

  btn: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 30,
  },
});
