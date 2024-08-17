import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    marginTop: 20,
    width: "80%",
    textAlign: "center",
    backgroundColor: "#16DB65",
    fontSize: 24,
    paddingVertical: 10,
    color: "#fff",
    fontWeight: "600",
    borderRadius: 12,
  },
  input: {
    marginTop: 16,
    width: "70%",
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#16DB65",
    borderRadius: 4,
    padding: 10,
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  button: {
    width: "30%",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    fontWeight: "600",
    backgroundColor: "#16DB65",
    fontSize: 18,
  },
  buttonText: {
    color: "#fff",
  },
});
