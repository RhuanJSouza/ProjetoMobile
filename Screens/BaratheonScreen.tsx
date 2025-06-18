import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const BaratheonScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Oráculo de Maria Padilha</Text>
    <Image
      source={{
        uri: "https://m.media-amazon.com/images/I/61wir6+oHUL.jpg",
      }}
      style={styles.image}
    />
    <Text style={styles.description}>
    Oráculo composto por 36 cartas, inspirado na entidade espiritual Maria Padilha.
    As cartas tem fins divinatórios e de autoconhecimento, com cada carta representando símbolos e energias ligadas a entidade. 
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

export default BaratheonScreen;
