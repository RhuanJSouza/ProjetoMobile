import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const casas = [
  {
    nome: "Targaryen",
    escudo:
      "https://i.pinimg.com/736x/e9/d3/a0/e9d3a014f0d86f01cd784de53f6ef3a3.jpg",
    rota: "TargaryenScreen",
  },
  {
    nome: "Baratheon",
    escudo:
      "https://i.pinimg.com/736x/a2/1a/51/a21a510b93d3f727a3f4ea1c23a27a98.jpg",
    rota: "BaratheonScreen",
  },
  {
    nome: "Stark",
    escudo:
      "https://i.pinimg.com/736x/3c/b4/7a/3cb47a7cadf0231e5e73ad9a17b54d49.jpg",
    rota: "StarkScreen",
  },
  {
    nome: "Lannister",
    escudo:
      "https://i.pinimg.com/736x/13/ce/a6/13cea67e7814e53ed5ecb7cdcb597b0d.jpg",
    rota: "LannisterScreen",
  },
  {
    nome: "Tyrell",
    escudo:
      "https://i.pinimg.com/736x/17/b4/14/17b41404e3b99103aeca414207764e55.jpg",
    rota: "TyrellScreen",
  },
  {
    nome: "Arryn",
    escudo:
      "https://i.pinimg.com/736x/a0/ee/fd/a0eefdd4890af4f86a80cfbe0f575b56.jpg",
    rota: "ArrynScreen",
  },
];

const EscudoScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {casas.map((casa, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate(casa.rota)}
        >
          <Text style={styles.title}>{casa.nome}</Text>
          <Image source={{ uri: casa.escudo }} style={styles.image} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  },
  card: {
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 16,
    width: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default EscudoScreen;
