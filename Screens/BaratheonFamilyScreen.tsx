import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const BaratheonFamilyScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: "https://i.pinimg.com/564x/74/61/59/7461598e41d817176f649adaa9d42308.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Jogada de 15 cartas</Text>
      <Text style={styles.description}>
        Essa é uma tiragem aprofundada, ideal para análises complexas ou temas
        mais amplos. As 15 cartas revelam aspectos conscientes, inconscientes,
        influências externas, tendências futuras e conselhos.
      </Text>

      <Text style={styles.subTitle}>Composta por:</Text>
      <Text style={styles.text}>- 15 cartas organizadas em 3 linhas</Text>
      <Text style={styles.text}>- Exploração profunda do tema</Text>
      <Text style={styles.text}>- Recomendada para grandes decisões</Text>

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

export default BaratheonFamilyScreen;
