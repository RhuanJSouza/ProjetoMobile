import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const StarkFamilyScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: "https://humaniamor.com.br/wp-content/uploads/2024/08/Tiragem-Peladan.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Mandala de 5 cartas</Text>
      <Text style={styles.description}>
        Essa tiragem oferece uma visão mais detalhada e equilibrada sobre uma questão. As cinco cartas geralmente representam: o centro da questão, influências passadas, influências futuras, desafios e forças a favor.
      </Text>

      <Text style={styles.subTitle}>Composta por:</Text>
      <Text style={styles.text}>- 5 cartas escolhidas pelo consulente</Text>
      <Text style={styles.text}>- Posições específicas de análise</Text>
      <Text style={styles.text}>- Orientação e equilíbrio</Text>

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

export default StarkFamilyScreen;
