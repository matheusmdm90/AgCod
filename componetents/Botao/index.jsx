import { Pressable, StyleSheet, Text } from "react-native";

const Botao = ({ nome, onPress }) => {
  return (
    <Pressable style={styles.btnEntrar} onPress={onPress}>
      <Text style={styles.btnTextoEntrar}>{nome}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnEntrar: {
    backgroundColor: "#01B3D7",
    width: "75%",
    height: 55,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  btnTextoEntrar: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default Botao;
