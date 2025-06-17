import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const TargaryenFamilyScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/ca/9e/21/ca9e21e2876cd5b8174856dfa504e9b2.gif",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Casa Targaryen</Text>
      <Text style={styles.description}>
        A Casa Targaryen é uma das casas mais poderosas e históricas de
        Westeros. Sua linhagem é marcada pela ascensão e queda, com membros
        conhecidos por sua ambição e o uso do fogo. O brasão da casa é um dragão
        vermelho em fundo negro, simbolizando seu domínio sobre os dragões.
      </Text>

      <Text style={styles.subTitle}>Membros Famosos:</Text>
      <Text style={styles.text}>- Aerys II Targaryen (O Rei Louco)</Text>
      <Text style={styles.text}>- Daenerys Targaryen</Text>
      <Text style={styles.text}>- Viserys Targaryen</Text>
      <Text style={styles.text}>- Rhaegar Targaryen</Text>
      <Text style={styles.text}>- Jon Snow (Aegon Targaryen)</Text>

      <Text style={styles.subTitle}>Slogan:</Text>
      <Text style={styles.text}>- "Fogo e Sangue"</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    padding: 10,
    backgroundColor: "#fff",
    flexGrow: 1,
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

export default TargaryenFamilyScreen;
