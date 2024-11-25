import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Movie } from "../../views/home";

type Props = { movie: Movie; onClick: (movie: Movie) => void };

const index = ({ movie, onClick }: Props) => {
  const imgSrc = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  return (
    <TouchableOpacity onPress={() => onClick(movie)}>
      <View style={style.container}>
        <Image src={imgSrc} style={style.img} />
      </View>
    </TouchableOpacity>
  );
};
export default index;

const style = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    borderColor: "white",
    borderWidth: 3,

    width: 150,
    height: 200,

    marginHorizontal: 10,
  },

  img: { height: 197, width: 147 },
});
