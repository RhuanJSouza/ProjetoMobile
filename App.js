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
import StarkScreen from "./Screens/StarkScreen";
import TyrellScreen from "./Screens/TyrellScreen";
import LannisterScreen from "./Screens/LannisterScreen";
import BaratheonScreen from "./Screens/BaratheonScreen";
import ArrynScreen from "./Screens/ArrynScreen";

// telas das Familias

import TargaryenFamilyScreen from "./Screens/TargaryenFamilyScreen";
import StarkFamilyScreen from "./Screens/StarkFamilyScreen";
import LannisterFamilyScreen from "./Screens/LannisterFamilyScreen";
import BaratheonFamilyScreen from "./Screens/BaratheonFamilyScreen";
import TyrellFamilyScreen from "./Screens/TyrellFamilyScreen";
import ArrynFamilyScreen from "./Screens/ArrynFamilyScreen";

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
            <Ionicons name="shield-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Personagens"
        component={PersonagensScreen}
        options={{
          title: "Tipos de Leitura",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MomentosMarcantesScreen"
        component={MomentosMarcantesScreen}
        options={{
          title: "Momentos Marcantes ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flame-outline" size={size} color={color} />
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
            name="StarkScreen"
            component={StarkScreen}
            options={{
              title: "Casa Stark",
            }}
          />
          <Stack.Screen
            name="TyrellScreen"
            component={TyrellScreen}
            options={{
              title: "Casa Tyrell",
            }}
          />
          <Stack.Screen
            name="LannisterScreen"
            component={LannisterScreen}
            options={{
              title: "Casa Lannister",
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
            name="ArrynScreen"
            component={ArrynScreen}
            options={{
              title: "Casa Arryn",
            }}
          />

          <Stack.Screen
            name="TargaryenFamilyScreen"
            component={TargaryenFamilyScreen}
            options={{
              title: "Familia Targaryen",
            }}
          />
          <Stack.Screen
            name="StarkFamilyScreen"
            component={StarkFamilyScreen}
            options={{
              title: "Familia Stark",
            }}
          />
          <Stack.Screen
            name="LannisterFamilyScreen"
            component={LannisterFamilyScreen}
            options={{
              title: "Familia Lannister",
            }}
          />
          <Stack.Screen
            name="BaratheonFamilyScreen"
            component={BaratheonFamilyScreen}
            options={{
              title: "Familia Baratheon",
            }}
          />
          <Stack.Screen
            name="TyrellFamilyScreen"
            component={TyrellFamilyScreen}
            options={{
              title: "Familia Tyrell",
            }}
          />
          <Stack.Screen
            name="ArrynFamilyScreen"
            component={ArrynFamilyScreen}
            options={{
              title: "Familia Arryn",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
