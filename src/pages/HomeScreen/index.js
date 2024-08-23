import { View, Text, FlatList } from "react-native";
import { styles } from "./style";
import Item from "../../components/Item";

export default function HomeScreen() {
  data = [
    {
      id: 1,
      nome: "Rome",
      especie: "Cachorro",
      raca: "Vira lata",
      porteAnimal: "médio",
      corPredominante: "Caramelo",
      observacoes: "Encontrado perto da farmácia",
    },
    {
      id: 2,
      nome: "Cach",
      especie: "Gato",
      raca: "Fox terrier",
      porteAnimal: "pequeno",
      corPredominante: "Preto",
      observacoes: "Encontrado perto do parque",
    },
    {
      id: 3,
      nome: "Socks",
      especie: "Cachorro",
      raca: "Bulldog",
      porteAnimal: "pequeno",
      corPredominante: "Preto",
      observacoes: "Encontrado perto da praça",
    },
    {
      id: 4,
      nome: "Luna",
      especie: "Gato",
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
        renderItem={({ item }) => <Item pet={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
