import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const ArrynScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Casa Arryn</Text>
    <Image
      source={{
        uri: "https://i.pinimg.com/736x/a0/ee/fd/a0eefdd4890af4f86a80cfbe0f575b56.jpg",
      }}
      style={styles.image}
    />
    <Text style={styles.description}>
      "Tão Alto Como a Honra" — Os senhores do Ninho da Águia.
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

export default ArrynScreen;
