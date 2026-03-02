import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function BeneficiosPermisosScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>¡Disfruta la mejor radio online!</Text>
        <Text style={styles.subtitle}>Accede a música, noticias y más. Selecciona una opción para continuar:</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonRadio} onPress={() => router.replace('/RadioPlayer')}>
            <Text style={styles.buttonRadioText}>Escuchar Radio en línea</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.altButton} onPress={() => router.replace('/CrearUsuarioScreen')}>
            <Text style={styles.altButtonText}>Crear usuario</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.replace('/IniciarSesionScreen')}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1e293b',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#475569',
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    gap: 10,
  },
  buttonRadio: {
    backgroundColor: '#22c55e',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  buttonRadioText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 0.5,
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  altButton: {
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginHorizontal: 5,
  },
  altButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
  },
});