import React from "react";
import { ScrollView, Image, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const momentos = [
  {
    titulo: "Casamento Vermelho",
    descricao:
      "Um massacre chocante em meio a um casamento entre os Frey e os Stark, mudando completamente o rumo da guerra.",
    imagem:
      "https://i.pinimg.com/736x/72/16/78/721678589261b3dc25402d8e188dcc3d.jpg",
  },
  {
    titulo: "Nascem os Dragões",
    descricao:
      "Daenerys entra na pira funerária de Khal Drogo e sai ilesa com três dragões recém-nascidos.",
    imagem:
      "https://i.pinimg.com/736x/d6/9a/e4/d69ae46009fbb607b15a6cc088851ba9.jpg",
  },
  {
    titulo: "Batalha dos Bastardos",
    descricao:
      "Jon Snow enfrenta Ramsay Bolton em uma das batalhas mais épicas da série para retomar Winterfell.",
    imagem:
      "https://i.pinimg.com/736x/70/45/84/704584a27e0ea825da617a88241845b8.jpg",
  },
  {
    titulo: "Morte de Ned Stark",
    descricao:
      "A inesperada execução de Ned Stark marcou o fim da inocência dos fãs e mostrou que ninguém está a salvo.",
    imagem:
      "https://i.pinimg.com/736x/73/cc/1d/73cc1d506a6b60b3852090abbbc36ff5.jpg",
  },
  {
    titulo: "Explosão do Septo de Baelor",
    descricao:
      "Cersei destrói o Grande Septo com fogo-vivo, eliminando todos seus inimigos de uma só vez.",
    imagem:
      "https://i.pinimg.com/736x/e2/80/a2/e280a2acfd6a500c08ba5ffc4f57469b.jpg",
  },
];

const MomentosMarcantesScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Momentos Marcantes de Game of Thrones</Text>
      {momentos.map((momento, index) => (
        <Card key={index} style={styles.card}>
          <Image source={{ uri: momento.imagem }} style={styles.image} />
          <Card.Content>
            <Text style={styles.title}>{momento.titulo}</Text>
            <Text style={styles.description}>{momento.descricao}</Text>
          </Card.Content>
        </Card>
      ))}
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
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "justify",
  },
});

export default MomentosMarcantesScreen;
