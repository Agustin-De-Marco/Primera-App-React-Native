import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [mensaje, setMensaje] = useState(1);

  const cambiarMensaje = () => {
    setMensaje(mensaje + 1);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.texto}>{mensaje}</Text>
        <View style={styles.botonContainer}>
          <Button title="Sumar 1" onPress={cambiarMensaje} color="black" />
        </View>
        <StatusBar style="light" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // oscurece para que se lea mejor el texto
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  botonContainer: {
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  }
});