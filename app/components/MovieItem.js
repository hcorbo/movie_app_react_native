import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const MovieItem = (props) => {
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
        <Text style={styles.text}>{props.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginRight: 10,
  },
  poster: {
    width: 171,
    height: 255,
    borderRadius: 10,
  },
  text: {
    width: 171,
  },
});
export default MovieItem;
