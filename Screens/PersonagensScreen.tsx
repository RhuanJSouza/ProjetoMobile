import React from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const familias = [
  {
    nome: "Mandala de 3 cartas",
    imagem:
      "https://i.pinimg.com/736x/4a/00/4f/4a004f7cb615511ead98cf6e70fb6fd1.jpg",
    rota: "TargaryenFamilyScreen",
  },
  {
    nome: "Mandala de 5 cartas",
    imagem:
      "https://milajuns.com.br/wp-content/uploads/2021/01/mesa-diamante.png",
    rota: "StarkFamilyScreen",
  },
  {
    nome: "Jogada de 15 cartas",
    imagem:
      "https://www.iquilibrio.com/blog/wp-content/uploads/2017/09/capa-baralho.jpg",
    rota: "BaratheonFamilyScreen",
  },
];

const FamiliaScreen = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={familias}
      keyExtractor={(item) => item.nome}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate(item.rota)}>
          <Card style={styles.card}>
            <View style={styles.row}>
              <Image source={{ uri: item.imagem }} style={styles.img} />
              <Text variant="titleMedium">{item.nome}</Text>
            </View>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
});

export default FamiliaScreen;
