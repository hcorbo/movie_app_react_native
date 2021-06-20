import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constant from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Favorite from "./Favorite";
import Settings from "./Settings";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const MainRoot = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
});

export default MainRoot;


// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import Constant from "expo-constants";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "../pages/Home";
// import Favorite from "../pages/Favorite";
// import Settings from "../pages/Settings";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import MovieDetail from "../pages/MovieDetail";
// import { createStackNavigator } from "@react-navigation/stack";

// const Tab = createBottomTabNavigator();

// const MainRoot = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         activeTintColor: "#e91e63",
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeStackScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Favorite"
//         component={Favorite}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="heart" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={Settings}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons
//               name="cog-outline"
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const HomeStack = createStackNavigator();

// const HomeStackScreen = ({ navigation }) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerShown: false,
//     }}
//   >
//     <HomeStack.Screen name="Home" component={Home} />
//     <HomeStack.Screen name="MovieDetail" component={MovieDetail} />
//   </HomeStack.Navigator>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constant.statusBarHeight,
//   },
// });

// export default MainRoot;
