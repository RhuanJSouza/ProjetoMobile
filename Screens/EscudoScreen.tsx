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

const Baralhos = [
  {
    nome: "Tarot de Marselha",
    escudo:
      "https://i.pinimg.com/736x/49/7b/7d/497b7d4bebb7dc03860b3eb05a572a3b.jpg",
    rota: "TargaryenScreen",
  },
  {
    nome: "Oráculo de Maria Padilha",
    escudo:
      "https://i.pinimg.com/736x/c6/35/75/c63575d4a7f2d4d27fb369445801ac54.jpg",
    rota: "BaratheonScreen",
  },
  
];

const EscudoScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Baralhos.map((Baralhos, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate(Baralhos.rota)}
        >
          <Text style={styles.title}>{Baralhos.nome}</Text>
          <Image source={{ uri: Baralhos.escudo }} style={styles.image} />
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
