import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const leftPosition = (deviceWidth / 2 - 50) / 2;

const TrailerItem = (props) => {


  return (
    <View>
      <Image style={styles.playButton} source={require("../assets/play-button.png")} />
      <Image
        style={styles.poster}
        source={{
          uri: "http://image.tmdb.org/t/p/w342/" + props.poster,
        }}
      />
      <Text style={[styles.text, props.themeStyles]}>{props.trailerData.name}</Text>
    </View>
  );
};

export default TrailerItem;

const styles = StyleSheet.create({
  poster: {
    width: deviceWidth / 2 - 25,
    height: 100,
    resizeMode: "cover",
    marginRight: 5,
    borderRadius: 15,
  },
  text: {
    flexWrap: "wrap",
    width: deviceWidth / 2 - 25,
  },
  playButton: {
    position: "absolute",
    top: 38,
    left: leftPosition,
    zIndex: 1,
    width: 24,
    height: 24,
  },
});
