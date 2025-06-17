import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const BaratheonFamilyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/c3/0f/a2/c30fa2d536dc01d3819af9f069aee58f.gif",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Casa Baratheon</Text>
      <Text style={styles.description}>
        A Casa Baratheon é uma das casas grandes de Westeros e conhecida por sua
        força e resiliência. Fundada por Steffon Baratheon, ela tornou-se uma
        casa real quando Robert Baratheon tomou o Trono de Ferro. Seu brasão é
        um veado negro em fundo dourado, simbolizando sua força e majestade.
      </Text>

      <Text style={styles.subTitle}>Membros Famosos:</Text>
      <Text style={styles.text}>- Robert Baratheon (Rei Robert)</Text>
      <Text style={styles.text}>- Stannis Baratheon</Text>
      <Text style={styles.text}>- Renly Baratheon</Text>
      <Text style={styles.text}>- Shireen Baratheon</Text>

      <Text style={styles.subTitle}>Slogan:</Text>
      <Text style={styles.text}>- "O Deus do Fogo é Justo"</Text>
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

export default BaratheonFamilyScreen;
