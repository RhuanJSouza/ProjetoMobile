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
    nome: "Targaryen",
    imagem:
      "https://i.pinimg.com/736x/e9/d3/a0/e9d3a014f0d86f01cd784de53f6ef3a3.jpg",
    rota: "TargaryenFamilyScreen",
  },
  {
    nome: "Stark",
    imagem:
      "https://i.pinimg.com/736x/3c/b4/7a/3cb47a7cadf0231e5e73ad9a17b54d49.jpg",
    rota: "StarkFamilyScreen",
  },
  {
    nome: "Lannister",
    imagem:
      "https://i.pinimg.com/736x/13/ce/a6/13cea67e7814e53ed5ecb7cdcb597b0d.jpg",
    rota: "LannisterFamilyScreen",
  },
  {
    nome: "Baratheon",
    imagem:
      "https://i.pinimg.com/736x/a2/1a/51/a21a510b93d3f727a3f4ea1c23a27a98.jpg",
    rota: "BaratheonFamilyScreen",
  },
  {
    nome: "Tyrell",
    imagem:
      "https://i.pinimg.com/736x/17/b4/14/17b41404e3b99103aeca414207764e55.jpg",
    rota: "TyrellFamilyScreen",
  },
  {
    nome: "Arryn",
    imagem:
      "https://i.pinimg.com/736x/a0/ee/fd/a0eefdd4890af4f86a80cfbe0f575b56.jpg",
    rota: "ArrynFamilyScreen",
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
