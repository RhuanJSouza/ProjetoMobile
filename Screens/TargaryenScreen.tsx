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
    <Text style={styles.title}>Tarot de Marselha</Text>
    <Image
      source={{
        uri: "https://i.pinimg.com/736x/c4/d4/75/c4d475a3e15f4f515c0c52ea607eba4c.jpg",
      }}
      style={styles.image}
    />
    <Text style={styles.description}>
    Clássico. Trata-se de um conjunto de 78 cartas, distribuídas em dois grupos: arcanos maiores e arcanos menores.
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
