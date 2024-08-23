import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
export default function Item({ pet }) {
  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        {pet.especie === "cachorro" ? (
          <FontAwesome5 name="dog" size={20} />
        ) : (
          <FontAwesome5 name="cat" size={20} />
        )}
        <Text style={styles.tituloTexto}>{pet.especie}</Text>
        <Text style={styles.tituloTexto}>{pet.nome}</Text>
      </View>
      <View style={styles.descricaoContainer}>
        <Text style={styles.descicaoTexto}>{pet.raca}</Text>
        <Text style={styles.descicaoTexto}>{pet.porteAnimal}</Text>
        <Text style={styles.descicaoTexto}>{pet.corPredominante}</Text>
        <Text style={styles.descicaoTexto}>{pet.observacoes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "yellow",
    marginTop: 6,
  },
  tituloContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    backgroundColor: "#05d621",
    paddingHorizontal: 8,
    marginBottom: 4,
  },
  tituloTexto: {
    fontSize: 16,
    marginBottom: 4,
  },
  descricaoContainer: {
    justifyContent: "space-between",
    width: 280,
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 8,
    marginBottom: 4,
  },
  descicaoTexto: {
    fontSize: 12,
  },
});
