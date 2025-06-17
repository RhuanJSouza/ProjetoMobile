import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import PersonagensScreen from "./PersonagensScreen";
import DragonsScreen from "./MomentosMarcanteScreens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";

const TargaryenScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Casa Targaryen</Text>
    <Image
      source={{
        uri: "https://i.pinimg.com/736x/e9/d3/a0/e9d3a014f0d86f01cd784de53f6ef3a3.jpg",
      }}
      style={styles.image}
    />
    <Text style={styles.description}>
      "Fogo e Sangue" — A dinastia dos dragões.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  image: { width: 250, height: 250, borderRadius: 12 },
  description: { marginTop: 20, fontSize: 16, textAlign: "center" },
});

export default TargaryenScreen;
