import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const StarkFamilyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/bb/24/45/bb2445a9828480b0be7c6e3f9bfddbfa.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Casa Stark</Text>
      <Text style={styles.description}>
        A Casa Stark é uma das casas mais antigas e influentes do norte de
        Westeros. Seu brasão é um lobo branco em fundo cinza. A casa é conhecida
        por sua lealdade, honra e por governar o Norte de Westeros.
      </Text>

      <Text style={styles.subTitle}>Membros Famosos:</Text>
      <Text style={styles.text}>- Eddard Stark</Text>
      <Text style={styles.text}>- Catelyn Stark</Text>
      <Text style={styles.text}>- Robb Stark</Text>
      <Text style={styles.text}>- Sansa Stark</Text>
      <Text style={styles.text}>- Arya Stark</Text>
      <Text style={styles.text}>- Bran Stark</Text>
      <Text style={styles.text}>- Jon Snow</Text>

      <Text style={styles.subTitle}>Slogan:</Text>
      <Text style={styles.text}>- "O Inverno Está Chegando"</Text>
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

export default StarkFamilyScreen;
