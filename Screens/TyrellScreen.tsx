import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const TyrellScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Casa Tyrell</Text>
    <Image
      source={{
        uri: "https://i.pinimg.com/736x/17/b4/14/17b41404e3b99103aeca414207764e55.jpg",
      }}
      style={styles.image}
    />
    <Text style={styles.description}>
      "Crescendo Fortes" — Beleza e estratégia.
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

export default TyrellScreen;
