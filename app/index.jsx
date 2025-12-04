import { Image, StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Botao from "../componetents/Botao";
import Input from "../componetents/Input";
import Vinculo from "../componetents/Link";
import ModalCadastroUsuario from "../componetents/Modal";

export default function Index() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Image
        style={{ width: 180, height: 180 }}
        source={require("../assets/images/Logo.png")}
      />

      <Text style={styles.textoBenvindo}>
        Bem vindo ao <Text style={styles.textoLogo}>Agcod</Text>
      </Text>
      <View style={styles.login}>
        <Text style={styles.textologin}>Iniciar sessão com:</Text>
        <Input placeholder="Digita seu email" />
        <Input placeholder="Informe sua senha" secureTextEntry />
        <Botao nome="Entrar" onPress={() => router.navigate("./Home")} />
      </View>

      <View
        style={{
          width: "90%",
          alignItems: "flex-end",
          marginBottom: 30,
        }}
      >
        <Vinculo src="/esqueciASenha" texto="Esqueci minha senha" />
      </View>

      <Text style={styles.textOU}>---OU---</Text>
      <ModalCadastroUsuario />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#050F28",
  },

  login: {
    width: "100%",
    alignItems: "center",
  },
  textoLogo: {
    color: "#01B3D7",
    fontWeight: "bold",
    fontSize: 28,
  },
  textoBenvindo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 15,
  },

  textologin: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    textAlign: "center",
  },

  textOU: {
    color: "#01B3D7",
    fontWeight: "bold",
    opacity: 0.33,
    fontSize: 24,
  },
});
