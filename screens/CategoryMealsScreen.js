import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={{ marginBottom: 10 }}>The Category Meals Screen!</Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
