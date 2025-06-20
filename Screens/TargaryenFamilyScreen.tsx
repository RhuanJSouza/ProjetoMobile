import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const TargaryenFamilyScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/b7/18/10/b71810a5d598c0e5fe2b62a315db1441.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Mandala de 3 cartas</Text>
      <Text style={styles.description}>
        Esse método de leitura utiliza três cartas dispostas em forma de linha, representando passado, presente e futuro. É uma tiragem simples, porém profunda, ideal para obter clareza sobre uma situação específica ou para reflexões rápidas.
      </Text>

      <Text style={styles.subTitle}>Composta por:</Text>
      <Text style={styles.text}>- 3 cartas do baralho de Maria Padilha</Text>
      <Text style={styles.text}>- 3 arcanos maiores do baralho de Marselha</Text>
      <Text style={styles.text}>- Passado, presente e futuro</Text>
      <Text style={styles.text}>- 5 perguntas</Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate("Agendamento")}
        style={styles.button}
        buttonColor="#b0060f"
        textColor="#fff"
      >
        Agendar Consulta
      </Button>

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
  button: {
    marginTop: 30,
    marginBottom: 20,
  },
});

export default TargaryenFamilyScreen;
