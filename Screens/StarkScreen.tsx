import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const StarkScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Casa Stark</Text>
    <Image
      source={{
        uri: "https://i.pinimg.com/736x/3c/b4/7a/3cb47a7cadf0231e5e73ad9a17b54d49.jpg",
      }}
      style={styles.image}
    />
    <Text style={styles.description}>
      "O Inverno Está Chegando" — Lealdade e honra no Norte.
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

export default StarkScreen;
