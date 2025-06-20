import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { Card } from "react-native-paper";

const signos = [
  "aries", "taurus", "gemini", "cancer",
  "leo", "virgo", "libra", "scorpio",
  "sagittarius", "capricorn", "aquarius", "pisces"
];

const nomesSignos = {
  aries: "Áries",
  taurus: "Touro",
  gemini: "Gêmeos",
  cancer: "Câncer",
  leo: "Leão",
  virgo: "Virgem",
  libra: "Libra",
  scorpio: "Escorpião",
  sagittarius: "Sagitário",
  capricorn: "Capricórnio",
  aquarius: "Aquário",
  pisces: "Peixes",
};

const fallbacks = {
  aries: "Hoje é um dia para tomar a iniciativa. Sua energia está alta e você pode liderar projetos importantes.",
  taurus: "Momento de focar em segurança financeira. Evite gastos impulsivos e consolide suas bases.",
  gemini: "Comunicação em alta! Ótimo dia para reuniões, networking e troca de ideias.",
  cancer: "Siga sua intuição nas questões familiares. Emoções podem estar mais sensíveis hoje.",
  leo: "Seu carisma está brilhando! Aproveite para mostrar seus talentos e conquistar reconhecimento.",
  virgo: "Dia perfeito para organização. Detalhes importantes merecem sua atenção especial.",
  libra: "Equilíbrio é a palavra-chave. Busque harmonia em seus relacionamentos e decisões.",
  scorpio: "Transforme algo que já não serve mais. Momento poderoso para renovação interna.",
  sagittarius: "Aventure-se em novos conhecimentos. Uma oportunidade de aprendizado pode surgir.",
  capricorn: "Foco em metas de longo prazo. Sua disciplina trará resultados sólidos.",
  aquarius: "Ideias inovadoras surgem naturalmente. Compartilhe suas visões com o mundo.",
  pisces: "Sensibilidade artística em destaque. Conecte-se com sua criatividade e emoções.",
};

const traduzirTexto = async (texto) => {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=en|pt-BR`
    );
    const data = await response.json();
    if (data.responseData && data.responseData.translatedText) {
      return data.responseData.translatedText;
    }
    return texto;
  } catch (error) {
    return texto;
  }
};

export default function SignosScreen() {
  const [horoscopos, setHoroscopos] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHoroscopos = async () => {
      try {
        const horoscopoData = {};
        for (const signo of signos) {
          try {
            const res = await fetch(
              `https://aztro.sameerkumar.website?sign=${signo}&day=today`,
              { method: 'POST' }
            );
            const data = await res.json();
            const descricaoTraduzida = await traduzirTexto(data.description);
            horoscopoData[signo] = {
              description: descricaoTraduzida,
              date: data.current_date,
            };
          } catch (signoError) {
            horoscopoData[signo] = {
              description: fallbacks[signo],
              date: new Date().toLocaleDateString('pt-BR')
            };
          }
          await new Promise(resolve => setTimeout(resolve, 300));
        }
        setHoroscopos(horoscopoData);
        setLoading(false);
      } catch (err) {
        setError("Falha na conexão com o serviço astrológico");
        setLoading(false);
      }
    };

    fetchHoroscopos();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#b0060f" />
        <Text>Consultando as estrelas...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Previsões Astrológicas Diárias</Text>

      {signos.map((signo) => (
        <Card key={signo} style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{getSymbol(signo)}</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.title}>
                {nomesSignos[signo]}
              </Text>

              <Text style={styles.date}>
                {horoscopos[signo]?.date}
              </Text>

              <Text style={styles.description}>
                {horoscopos[signo]?.description}
              </Text>
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

function getSymbol(signo) {
  const symbols = {
    aries: "♈",
    taurus: "♉",
    gemini: "♊",
    cancer: "♋",
    leo: "♌",
    virgo: "♍",
    libra: "♎",
    scorpio: "♏",
    sagittarius: "♐",
    capricorn: "♑",
    aquarius: "♒",
    pisces: "♓"
  };
  return symbols[signo] || "";
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 30,
    backgroundColor: '#f5f5f5'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff',
    padding: 20
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    color: "#b0060f",
    marginBottom: 20
  },
  card: {
    marginBottom: 20,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "#ffffff",
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center'
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f8e6e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#b0060f'
  },
  icon: {
    fontSize: 30,
    color: '#b0060f'
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5
  },
  date: {
    fontSize: 13,
    color: "#777",
    marginBottom: 10,
    fontStyle: 'italic'
  },
  description: {
    fontSize: 15,
    textAlign: "left",
    color: "#555",
    lineHeight: 20
  },
});