import { useNavigation } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import IconsHeader from "../IconsHeader";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={{ fontSize: 30, color: "#fff" }}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.textoUsuario}>
        Olá <Text style={styles.usuario}>Saulo</Text>
      </Text>
      <IconsHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between", // melhor para espaçar os itens
    alignItems: "center", // centraliza verticalmente
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 16, // opcional, para dar espaçamento nas laterais
    paddingVertical: 8,
    marginBottom: 30,
  },

  textoUsuario: {
    color: "#FFFFFF",
    fontSize: 32,
    paddingLeft: 60,
  },

  usuario: {
    color: "#01B3D7",
    fontWeight: "bold",
    fontSize: 32,
  },
});
export default Header;
