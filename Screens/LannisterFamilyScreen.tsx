import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const LannisterFamilyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/5a/6f/a9/5a6fa9760f14676745864a16191e3be6.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Casa Lannister</Text>
      <Text style={styles.description}>
        A Casa Lannister é uma das casas mais poderosas de Westeros. Seu brasão
        é um leão dourado sobre fundo vermelho. A casa é famosa por sua riqueza
        e pela astúcia de seus membros.
      </Text>

      <Text style={styles.subTitle}>Membros Famosos:</Text>
      <Text style={styles.text}>- Tywin Lannister</Text>
      <Text style={styles.text}>- Jaime Lannister</Text>
      <Text style={styles.text}>- Cersei Lannister</Text>
      <Text style={styles.text}>- Tyrion Lannister</Text>

      <Text style={styles.subTitle}>Slogan:</Text>
      <Text style={styles.text}>- "Ouça-me rugir!"</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default LannisterFamilyScreen;
