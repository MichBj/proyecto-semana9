import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function PartidosScreen() {
  const [partidos, setPartidos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPartidos = async () => {
    try {
      // IMPORTANTE: Cambia '192.168.X.X' por la IP de tu PC
      const response = await axios.get('http://192.168.18.17:3000/api/v1/partidos');
      setPartidos(response.data.data);
    } catch (error) {
      console.error("Error de conexión:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPartidos(); }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próximos Partidos - Kick Off</Text>
      <FlatList
        data={partidos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.equipoLocal} vs {item.equipoVisitante}</Text>
            <Text style={styles.score}>{item.marcador}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc', marginVertical: 5 },
  score: { fontWeight: 'bold', color: 'green' }
});