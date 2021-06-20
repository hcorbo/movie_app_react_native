import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import Constant from "expo-constants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MovieItem from "../components/MovieItem";
import RecentMovieItem from "../components/RecentMovieItem";
import { ThemeContext } from "../contexs/ThemeContext";



const Home = ({ navigation }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [recentMovies, setRecentMovies] = useState([]);
  const {isLightTheme, themeStyles } = useContext(ThemeContext)

  console.log(isLightTheme);

  useEffect(() => {
    (async () => {
      const responseMovies = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=37011a9a86c86fa6c4fa213de09481b7"
      );
      const responseGenres = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=37011a9a86c86fa6c4fa213de09481b7"
      );
      const responseRecentMovies = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=37011a9a86c86fa6c4fa213de09481b7"
      );

      const popularMovies = await responseMovies.json();
      const genres = await responseGenres.json();
      const recentMovies = await responseRecentMovies.json();

      setPopularMovies(popularMovies.results);
      setGenres(genres.genres);
      setRecentMovies(recentMovies.results);
    })();
  }, []);

  return (
    <View style={[styles.container, themeStyles]}>
      <View style={styles.header}>
        <Text style={[styles.title, themeStyles]}>Movie Catch</Text>
        <MaterialCommunityIcons name="magnify" size={24} color={themeStyles.color} />
      </View>
      <ScrollView>
        <View>
          <Text style={[styles.title2, themeStyles]}>Popular Movies</Text>
        </View>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={popularMovies}
          renderItem={({ item }) => (
            <MovieItem item={item} genres={genres} navigation={navigation} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        >
        </FlatList>

        <View>
          <Text style={[styles.title2, styles.header, themeStyles]}>Recent Movies</Text>
        </View>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={recentMovies}
          renderItem={({ item }) => (
            <RecentMovieItem item={item} genres={genres} navigation={navigation} />
          )}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        ></FlatList>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constant.statusBarHeight,
    paddingVertical: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title2: {
    fontSize: 17,
    paddingHorizontal: 15,
    marginBottom: 5,
    marginTop: 10,
  },
  flatList: {
    paddingLeft: 15,
  },
});

export default Home;
