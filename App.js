import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

// Telas principais
import EscudoScreen from "./Screens/EscudoScreen";
import PersonagensScreen from "./Screens/PersonagensScreen";
import MomentosMarcantesScreen from "./Screens/MomentosMarcanteScreens";

// Telas das casas
import TargaryenScreen from "./Screens/TargaryenScreen";
import BaratheonScreen from "./Screens/BaratheonScreen";

// Telas das famílias
import TargaryenFamilyScreen from "./Screens/TargaryenFamilyScreen";
import StarkFamilyScreen from "./Screens/StarkFamilyScreen";
import BaratheonFamilyScreen from "./Screens/BaratheonFamilyScreen";
import AgendamentoScreen from "./Screens/AgendamentoScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e50914",
        tabBarInactiveTintColor: "gray",
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Escudo"
        component={EscudoScreen}
        options={{
          title: "Baralhos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="moon-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Personagens"
        component={PersonagensScreen}
        options={{
          title: "Agendar Leitura",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MomentosMarcantesScreen"
        component={MomentosMarcantesScreen}
        options={{
          title: "Horóscopo Solar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sunny-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TargaryenScreen"
            component={TargaryenScreen}
            options={{
              title: "Tarot de Marselha",
            }}
          />
          <Stack.Screen
            name="BaratheonScreen"
            component={BaratheonScreen}
            options={{
              title: "Oráculo de Maria Padilha",
            }}
          />
          <Stack.Screen
            name="TargaryenFamilyScreen"
            component={TargaryenFamilyScreen}
            options={{
              title: "Mandala de 3 cartas",
            }}
          />
          <Stack.Screen
            name="StarkFamilyScreen"
            component={StarkFamilyScreen}
            options={{
              title: "Mandala de 5 cartas",
            }}
          />
          <Stack.Screen
            name="BaratheonFamilyScreen"
            component={BaratheonFamilyScreen}
            options={{
              title: "Jogada de 15 cartas",
            }}
          />
          <Stack.Screen
            name="Agendamento"
            component={AgendamentoScreen}
            options={{ title: "Agendamento" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
