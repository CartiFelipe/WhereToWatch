import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
type Props = { src: string; onClick: () => void };
const index = ({ src, onClick }: Props) => {
  const imgSrc = `https://image.tmdb.org/t/p/original/${src}`;
  return (
    <TouchableOpacity onPress={() => onClick()}>
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

    borderBlockColor: "white",
    borderWidth: 3,

    width: 150,
    height: 200,

    marginHorizontal: 10,
  },

  img: { height: 197, width: 147 },
});
