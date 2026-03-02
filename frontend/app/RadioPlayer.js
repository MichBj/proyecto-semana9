import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, Alert, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import axios from 'axios';

export default function RadioPlayer() {
  const [canal, setCanal] = useState(null);
  const [error, setError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    axios.get('http://192.168.18.17:3000/api/v1/tv-en-linea')
      .then(res => {
        setCanal(res.data.data);
      })
      .catch(err => {
        setError(true);
        Alert.alert("Error", "No se pudo conectar con el Backend. Revisa la IP.");
      });
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const handlePlayPause = async () => {
    if (!soundRef.current) {
      setLoadingAudio(true);
      const { sound } = await Audio.Sound.createAsync(
        { uri: canal.url_streaming },
        { shouldPlay: true, isLooping: true }
      );
      soundRef.current = sound;
      setIsPlaying(true);
      setLoadingAudio(false);
    } else {
      const status = await soundRef.current.getStatusAsync();
      if (status.isPlaying) {
        await soundRef.current.pauseAsync();
        setIsPlaying(false);
      } else {
        await soundRef.current.playAsync();
        setIsPlaying(true);
      }
    }
  };

  if (error) return <View style={styles.container}><Text style={{color:'white'}}>Error de conexión</Text></View>;
  if (!canal) return <ActivityIndicator size="large" style={{flex:1}} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{canal.nombre}</Text>
      {canal.logo && (
        <Image source={{ uri: canal.logo }} style={styles.logo} resizeMode="contain" />
      )}
      <TouchableOpacity style={styles.audioButton} onPress={handlePlayPause} disabled={loadingAudio}>
        <Text style={styles.audioButtonText}>
          {loadingAudio ? 'Cargando...' : isPlaying ? 'Pausar' : 'Reproducir'}
        </Text>
      </TouchableOpacity>
      <View style={styles.infoBox}>
        <Text style={styles.category}>{canal.categoria}</Text>
        <Text style={styles.desc}>{canal.descripcion}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a1a', justifyContent: 'center' },
  logo: { width: 120, height: 120, alignSelf: 'center', marginBottom: 20 },
  title: { color: '#fff', fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15 },
  audioButton: { backgroundColor: '#22c55e', borderRadius: 8, paddingVertical: 14, paddingHorizontal: 32, alignSelf: 'center', marginVertical: 20 },
  audioButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 18, letterSpacing: 0.5 },
  infoBox: { padding: 20 },
  category: { color: '#ffd700', fontWeight: 'bold', marginBottom: 5 },
  desc: { color: '#ccc', lineHeight: 20 }
});
