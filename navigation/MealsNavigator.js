import { createStackNavigator } from "react-navigation-stack";

import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {},
    },
    MealDetail: MealDetailScreen,
  },
  {
    // mode: "modal", //default is "card"
    // initialRouteName: 'Categories', //dont need because we set this in first argument group
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      headerTitle: "A Screen",
    },
  }
);

export default createAppContainer(MealsNavigator);
