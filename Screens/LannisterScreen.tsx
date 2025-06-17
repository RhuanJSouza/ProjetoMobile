import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const LannisterScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Casa Lannister</Text>
    <Image
      source={{
        uri: "https://i.pinimg.com/736x/13/ce/a6/13cea67e7814e53ed5ecb7cdcb597b0d.jpg",
      }}
      style={styles.image}
    />
    <Text style={styles.description}>"Ouça-me Rugir" — Riqueza e poder.</Text>
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

export default LannisterScreen;
