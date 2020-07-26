import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen!</Text>
      <Text style={{ marginBottom: 10 }}>{selectedCategory.title}</Text>
      <Button
        title="Go to Meal Detail Page!"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
      <View style={{ marginVertical: 5 }} />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack(); //or pop(). pop() will only works on StackNavigator
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
