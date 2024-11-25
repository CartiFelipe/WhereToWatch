import { FlatList, StyleSheet, Text, View } from "react-native";
import { Movie } from "../../views/home";
import { Card } from "..";
type Props = {
  data: Array<Movie>;
  label?: string;

  handleCardClick: (movie: Movie) => void;
};

const index = ({ data, label, handleCardClick }: Props) => {
  return (
    <View style={style.container}>
      {label && <Text style={style.label}>{label}</Text>}
      {data.length > 0 ? (
        <FlatList
          style={{ margin: 25 }}
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => (
            <Card movie={item.item} onClick={() => handleCardClick(item.item)} />
          )}
        />
      ) : (
        <Text style={{ textAlign: "center", fontSize: 18 }}>
          Você ainda não tem nenhum filme na sua watchlist
        </Text>
      )}
    </View>
  );
};
export default index;

const style = StyleSheet.create({
  container: {
    borderBottomColor: "black",
    borderTopWidth: 1,

    paddingTop: 20,

    height: 350,
    width: "100%",
  },
  label: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
