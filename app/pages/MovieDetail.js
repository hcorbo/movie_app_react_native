import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Constant from "expo-constants";
import ChipGroup from "../components/ChipGroup";
import TrailerItem from "../components/TrailerItem";
import YoutubePlayer from "react-native-youtube-iframe";
import { ThemeContext } from "../contexs/ThemeContext";

const deviceWidth = Dimensions.get("window").width;

const filterGenders = (allGenders, idMovieGenders) => {
  let movieGendersName = [];
  allGenders.forEach((element) => {
    if (idMovieGenders.includes(element.id)) movieGendersName.push(element);
  });
  return movieGendersName;
};

const MovieDetail = (props) => {
  let { movieItem, genres } = props.route.params;
  const [trailers, setTrailers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);
  const { themeStyles } = useContext(ThemeContext)
  let movieGendersName = filterGenders(genres, movieItem.genre_ids);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieItem.id +
          "/videos?api_key=37011a9a86c86fa6c4fa213de09481b7"
      );

      const trailersResponse = await response.json();
      setTrailers(trailersResponse.results);
    })();
  }, []);

  return (
    <View style={[styles.container, themeStyles]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={{width: "100%"}}>
            <YoutubePlayer height={300} play={true} videoId={trailerKey} />
          </View>
        </View>
      </Modal>
      <ScrollView style={themeStyles}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.pop();
          }}
          style={{
            position: "absolute",
            left: 15,
            zIndex: 1,
            top: Constant.statusBarHeight + 10,
          }}
        >
          <MaterialCommunityIcons
            name="chevron-left"
            size={26}
            color={"#fff"}
          />
        </TouchableOpacity>
        <Image
          style={styles.poster}
          source={{
            uri: "http://image.tmdb.org/t/p/w342/" + movieItem.backdrop_path,
          }}
        />
        <View style={styles.details}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <View style={{ flexWrap: "wrap", flexDirection: "column" }}>
              <Text style={[styles.title, {color: "#ee0000"}]}>{movieItem.title}</Text>
              <Text style={themeStyles}>{movieItem.release_date}</Text>
            </View>
            <View
              style={{
                width: 48,
                height: 48,
                backgroundColor: "white",
                borderRadius: 24,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{movieItem.vote_average}</Text>
            </View>
          </View>
          <ChipGroup genres={movieGendersName}></ChipGroup>
          <Text style={[styles.header, themeStyles]}>Overview</Text>
          <Text style={themeStyles}>{movieItem.overview}</Text>
          <Text style={[styles.header, themeStyles]}>Teasers & Trailers</Text>
          <View style={styles.containerTrailers}>
            {trailers.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    setTrailerKey(item.key);
                    setModalVisible(true);
                  }}
                >
                  <TrailerItem
                    trailerData={item}
                    poster={movieItem.backdrop_path}
                    themeStyles={themeStyles}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  poster: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  details: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    maxWidth: deviceWidth-100,
  },
  containerTrailers: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  modalView: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
});

export default MovieDetail;