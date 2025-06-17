import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const TyrellFamilyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/33/20/1d/33201d1fdcaf911b1a7060c4a81e901e.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Casa Tyrell</Text>
      <Text style={styles.description}>
        A Casa Tyrell é uma das casas grandes de Westeros e governa o Reino do
        Jardim, também conhecido como Alto Jardim. A casa é famosa por sua
        riqueza, por ser uma das maiores fornecedoras de alimentos do reino e
        por seus membros serem muito astutos e diplomáticos. Seu brasão é uma
        rosa dourada sobre um campo verde, simbolizando sua ligação com a terra
        e sua força política.
      </Text>

      <Text style={styles.subTitle}>Membros Famosos:</Text>
      <Text style={styles.text}>- Mace Tyrell</Text>
      <Text style={styles.text}>- Margaery Tyrell</Text>
      <Text style={styles.text}>- Loras Tyrell</Text>
      <Text style={styles.text}>- Olenna Tyrell</Text>

      <Text style={styles.subTitle}>Slogan:</Text>
      <Text style={styles.text}>- "Crescer Forte"</Text>
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

export default TyrellFamilyScreen;
