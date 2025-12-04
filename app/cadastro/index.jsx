import { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Cadastro = () => {
  const [nickname, setNickname] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "padding"}
      style={{ flex: 1, backgroundColor: "#050F28", paddingBottom: 10 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaProvider style={styles.container}>
          <Image
            style={styles.img}
            source={require("../../assets/images/Logo.png")}
          />
          <Text style={styles.text}>Faça seu cadastro</Text>

          <View style={styles.ViewContent}>
            <TextInput
              style={styles.inputLogin}
              placeholder="Digite seu nickname"
              onChangeText={setNickname}
              value={nickname}
            />
            <TextInput
              style={styles.inputLogin}
              placeholder="Digite seu norme completo"
              onChangeText={setNomeCompleto}
              value={nomeCompleto}
            />
            <TextInput
              style={styles.inputLogin}
              placeholder="Digite seu E-mail"
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              style={styles.inputLogin}
              placeholder="Digite seu Telefone"
              onChangeText={setTelefone}
              value={telefone}
            />

            <TextInput
              style={styles.inputLogin}
              placeholder="Digite seu Data de nascimento"
              onChangeText={setDataNascimento}
              value={dataNascimento}
            />
          </View>
        </SafeAreaProvider>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBlockStart: 2,
    alignItems: "center",
    backgroundColor: "#050F28",
    gap: 10,
  },

  img: {
    width: 125,
    height: 125,
    marginBottom: 2,
  },

  text: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },

  inputLogin: {
    borderWidth: 2,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    width: 250,
    height: 40,
    marginTop: 10,
    fontSize: 12,

    borderColor: "#1081dd",
  },

  ViewContent: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    opacity: 0.9,
    shadowColor: "#fafafaf8",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 5,

    padding: 20,
    borderRadius: 25,
  },
});

export default Cadastro;
