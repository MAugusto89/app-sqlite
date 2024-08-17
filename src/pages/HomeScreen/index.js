import { View, Text, FlatList } from "react-native";
import { styles } from "./style";

export default function HomeScreen() {
  data = [
    {
      id: 1,
      especie: "cachorro",
      raca: "Vira lata",
      porteAnimal: "médio",
      corPredominante: "Caramelo",
      observacoes: "Encontrado perto da farmácia",
    },
    {
      id: 2,
      especie: "gato",
      raca: "Persa",
      porteAnimal: "grande",
      corPredominante: "Preto e branco",
      observacoes: "Encontrado perto da loja",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adote um Pet</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.especie}</Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
