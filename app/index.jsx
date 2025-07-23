import { Link } from "@react-navigation/native";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./Logo.png")}
        placeholder="logo"
      />
      <Text style={styles.textoBenvindo}>
        Bem vindo ao <Text style={styles.textoLogo}>Agcod</Text>
      </Text>
      <View style={styles.login}>
        <Text style={styles.textologin}>Iniciar sessão com:</Text>
        <TextInput placeholder="Informe E-mail" style={styles.inputLogin} />
        <TextInput
          placeholder="Informe sua senha"
          secureTextEntry
          style={styles.inputLogin}
        />
        <Pressable style={styles.btnEntrar}>
          <Text style={styles.btnTextoEntrar}>Entrar</Text>
        </Pressable>
        <Link to="/register" style={styles.textoEqcSenha}>
          Esqueci minha senha
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#050F28",
  },
  textoLogo: {
    color: "#01B3D7",
    fontWeight: "bold",
    fontSize: 32,
  },
  textoBenvindo: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
  },

  login: {},

  textologin: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center",
  },
  inputLogin: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    width: 350,
    height: 70,
    marginTop: 10,
    fontSize: 24,
  },

  btnEntrar: {
    backgroundColor: "#01B3D7",
    width: 350,
    height: 70,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btnTextoEntrar: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  textoEqcSenha: {
    color: "#01B3D7",
    fontSize: 18,
    marginTop: 10,
    textAlign: "right",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#01B3D7",
  },
});
