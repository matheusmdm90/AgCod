import { Link } from "expo-router";
import { StyleSheet } from "react-native";

const Vinculo = ({ src, texto }) => {
  return (
    <Link href={src} style={styles.textoEqcSenha}>
      {texto}
    </Link>
  );
};

const styles = StyleSheet.create({
  textoEqcSenha: {
    color: "#01B3D7",
    fontSize: 18,
    marginTop: 10,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#01B3D7",
  },
});

export default Vinculo;
