import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RecentMovieItem = (props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.push("MovieDetail", {
          movieItem: props.item,
          genres: props.genres,
        })
      }
    >
      <View style={styles.item}>
        <Image
          style={styles.poster}
          source={{
            uri: "http://image.tmdb.org/t/p/w342/" + props.item.poster_path,
          }}
        />
        <View>
          <Text style={styles.text}>{props.item.title}</Text>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons name="star" size={22} color={"#F7D624"} />
            <Text style={{ alignSelf: "center" }}>{props.item.vote_average}</Text>
            <Text style={{ fontSize:10, alignSelf: "flex-end" }}> /10 </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginRight: 10,
    marginBottom: 10,
  },
  poster: {
    width: 171,
    height: 255,
    borderRadius: 10,
    marginRight: 20,
  },
  text: {
    width: 171,
  },
  
});
export default RecentMovieItem;
