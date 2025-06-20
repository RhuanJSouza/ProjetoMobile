import React, { useState } from "react";
import { View, StyleSheet, Alert, Linking } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

export default function AgendamentoScreen() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const enviarEmail = () => {
    if (!nome || !data || !hora) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    const destinatario = "rhuanjsouza@gmail.com";
    const assunto = "Agendamento de Consulta de Tarot";
    const corpo = `Nome: ${nome}\nData: ${data}\nHora: ${hora}`;

    const url = `mailto:${destinatario}?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(corpo)}`;

    Linking.openURL(url).catch(() =>
      Alert.alert("Erro ao abrir o aplicativo de e-mail.")
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Consulta</Text>
      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        mode="outlined"
        theme={{ colors: { primary: "#b0060f" } }}
      />
      <TextInput
        label="Data (ex: 21/06)"
        value={data}
        onChangeText={setData}
        style={styles.input}
        mode="outlined"
        theme={{ colors: { primary: "#b0060f" } }}
      />
      <TextInput
        label="Hora (ex: 14:00)"
        value={hora}
        onChangeText={setHora}
        style={styles.input}
        mode="outlined"
        theme={{ colors: { primary: "#b0060f" } }}
      />

      <Button
        mode="contained"
        onPress={enviarEmail}
        style={styles.button}
        contentStyle={{ paddingVertical: 8 }}
        buttonColor="#b0060f"
        textColor="#fff"
      >
        Enviar Agendamento
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#b0060f",
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    borderRadius: 4,
  },
});
