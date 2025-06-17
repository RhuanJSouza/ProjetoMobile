import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const ArrynFamilyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/2b/65/33/2b65338457f8820feec870eaa78efc9f.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Casa Arryn</Text>
      <Text style={styles.description}>
        A Casa Arryn é uma das casas nobres de Westeros, governando o Vale de
        Arryn. Ela é uma casa tradicional e respeitada, e sua fortaleza
        principal é o Ninho da Águia. Seu brasão é um águia prateada em um campo
        azul, representando o controle sobre as montanhas e o céu.
      </Text>

      <Text style={styles.subTitle}>Membros Famosos:</Text>
      <Text style={styles.text}>- Jon Arryn</Text>
      <Text style={styles.text}>- Lysa Arryn</Text>
      <Text style={styles.text}>- Robin Arryn</Text>

      <Text style={styles.subTitle}>Slogan:</Text>
      <Text style={styles.text}>- "Nunca Deixe Cair a Águia"</Text>
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

export default ArrynFamilyScreen;
