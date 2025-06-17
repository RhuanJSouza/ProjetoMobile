import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const BaratheonScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Casa Baratheon</Text>
    <Image
      source={{
        uri: "https://i.pinimg.com/736x/a2/1a/51/a21a510b93d3f727a3f4ea1c23a27a98.jpg",
      }}
      style={styles.image}
    />
    <Text style={styles.description}>
      "Nossa é a Fúria" — A força do veado coroado.
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
