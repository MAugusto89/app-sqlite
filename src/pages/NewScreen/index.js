import { View, Text, TextInput, Alert } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function NewScreen() {
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [porteAnimal, setPorteAnimal] = useState("");
  const [corPredominante, setCorPredominante] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const salvarPet = () => {
    // Adicionar o novo pet ao banco de dados
    // Exemplo:
    // const db = SQLite.openDatabase({ name: 'pets.db' });
    // db.transaction((tx) => {
    //   tx.executeSql('INSERT INTO pets (especie, raca, porte, cor, observacoes) VALUES (?,?,?,?,?)', [especie, raca, porteAnimal, corPredominante, observacoes]);
    // });
    if (especie === " ") {
      Alert.alert("Alert Title", "My Alert Msg", [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar um Pet</Text>

      <TextInput
        style={styles.input}
        placeholder="Espécie"
        autoCapitalize="words"
        value={especie}
        onChangeText={({ v }) => setEspecie(v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Raça"
        autoCapitalize="words"
        value={raca}
        onChangeText={({ v }) => setRaca(v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Porte do PET"
        autoCapitalize="words"
        value={porteAnimal}
        onChangeText={({ v }) => setPorteAnimal(v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Cor Predominante"
        autoCapitalize="words"
        value={corPredominante}
        onChangeText={({ v }) => setCorPredominante(v)}
      />

      <TextInput
        style={styles.input}
        placeholder="Observações"
        autoCapitalize="words"
        value={observacoes}
        onChangeText={({ v }) => setObservacoes(v)}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={salvarPet}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
