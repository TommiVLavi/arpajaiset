import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const [numb, setNumb] = useState(0);
  const [guess, setGuess] = useState(0);
  const [kerta, setKerta] = useState(0);
  const [tilanne, setTilanne] = useState('Arvaa luku ykkosesta sataseen!');
 
  const napsautettu = () => {
    setKerta(kerta + 1);

    setNumb(Math.floor(Math.random() * 100) + 1);

    if (numb < guess) { 
      setTilanne('Arvauksesi ' + guess + ' on liian suuri.');
    } else if (numb > guess) {
      setTilanne('Arvauksesi ' + guess + ' on liian pieni.');
    } else {
      Alert.alert("Arvasit oikein " + kerta + " arvauksissa!");
      setKerta(0);
      setTilanne('Arvaa luku ykkosesta sataseen!')
    }
  }

  return (
    <View style={styles.container}>
      <Text>{tilanne}</Text>

      <TextInput 
        style={{
          width:150,
          borderColor: 'pink',
          borderWidth: 2
        }}

        onChangeText={guess => setGuess(guess)}
        value={guess}
      />

      <Button onPress={napsautettu} title="Arvaa"/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
