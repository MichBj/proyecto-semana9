import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BienvenidoScreen from './screems/BienvenidoScreen';
import BeneficiosPermisosScreen from './screems/BeneficiosPermisosScreen';
import CrearUsuarioScreen from './screems/CrearUsuarioScreen';
import IniciarSesionScreen from './screems/IniciarSesionScreen';
import TVPlayer from './components/TVPlayer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenido" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bienvenido" component={BienvenidoScreen} />
        <Stack.Screen name="BeneficiosPermisos" component={BeneficiosPermisosScreen} />
        <Stack.Screen name="CrearUsuario" component={CrearUsuarioScreen} />
        <Stack.Screen name="IniciarSesion" component={IniciarSesionScreen} />
        <Stack.Screen name="TVPlayer" component={TVPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}