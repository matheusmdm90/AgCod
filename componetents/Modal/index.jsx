import { useState } from "react";
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { fazerCadastro, fazerCadastroApp } from "../../supabase/requisicao";
import ModalDate from "../ModalDate";
import { ModalEstados } from "../ModalEstados";

const ModalCadastroUsuario = () => {
  const [modalSelecionarEstado, setModalSelecionarEstado] = useState(false);
  const [modalCadastro, setModalCadastro] = useState(false);
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("DD/MM/AA");
  const [estados, setEstados] = useState("Selecione o estado");
  const [cidade, setCidade] = useState("");

  const CriarConta = async () => {
    if (email !== confirmarEmail) {
      Alert.alert("Erro", "E‑mail e confirmação não coincidem");
      return;
    }
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "A senha e confirmação não coincidem");
      return;
    }

    const { data } = await fazerCadastro({
      email: email,
      password: senha,
      name: nomeCompleto,
    });

    const user = data.user;

    const { erroApp } = await fazerCadastroApp({
      user: user,
      nome: nomeCompleto,
      data_nasc: dataNascimento,
      telefone: telefone,
      cidade: cidade,
      estado: estados,
      email: email,
    });
    if (erroApp) {
      console.error(erroApp);
      return;
    }

    setModalCadastro(false);
    setNomeCompleto("");
    setTelefone("");
    setCidade("");
    setEmail("");
    setConfirmarEmail("");
    setSenha("");
    setConfirmarSenha("");
    setEstados("Selecione o estado");
    setDataNascimento("DD/MM/AA");
  };

  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalCadastro}
        onRequestClose={() => {
          setModalCadastro(!modalCadastro);
        }}
      >
        {/* Tela do modal */}
        <ScrollView style={styles.scrollView}>
          {/* parte de cima com a logo */}
          <View
            style={{
              backgroundColor: "#050F28",
              alignItems: "center",
              padding: 30,
            }}
          >
            <Image
              style={{ width: 180, height: 180 }}
              source={require("../../assets/images/Logo.png")}
            />

            <Text style={styles.textoBenvindo}>
              Bem vindo ao <Text style={styles.textoLogo}>Agcod</Text>
            </Text>
          </View>
          <View style={styles.centeredView}>
            <Text style={styles.title}>
              Crie sua <Text style={styles.titlebold}>conta</Text>
            </Text>
            {/* formulario de cadastro  */}
            <View style={styles.scroll}>
              <View style={{ flex: 1 }}>
                <Text style={styles.textCadastro}>Nome Completo</Text>
                <TextInput
                  style={styles.inputLogin}
                  placeholder="Digite seu nome completo"
                  onChangeText={setNomeCompleto}
                  value={nomeCompleto}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.textCadastro}>Digite seu telefone</Text>
                <TextInput
                  style={styles.inputLogin}
                  placeholder="Digite seu Telefone"
                  onChangeText={setTelefone}
                  value={telefone}
                />
              </View>

              {/* aqui e estar os dois modal de estados e de data  */}

              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.textCadastro}>Data de Nascimento</Text>
                  <ModalDate
                    mudarData={dataNascimento}
                    setdata={setDataNascimento}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.textCadastro}>Estados</Text>
                  <ModalEstados
                    ValordoModal={modalSelecionarEstado}
                    TrocarEstadoDoModal={setModalSelecionarEstado}
                    ValuerEstados={estados}
                    TrocarEstados={setEstados}
                  />
                  <Pressable
                    style={styles.pressableModal}
                    onPress={() => setModalSelecionarEstado(true)}
                  >
                    <Text style={styles.modalSeleção}>{estados}</Text>
                  </Pressable>
                </View>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.textCadastro}>Cidade</Text>
                <TextInput
                  style={styles.inputLogin}
                  placeholder="Digite seu Cidade"
                  onChangeText={setCidade}
                  value={cidade}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.textCadastro}>Digite seu E-mail</Text>
                <TextInput
                  style={styles.inputLogin}
                  placeholder="Digite seu E-mail"
                  onChangeText={setEmail}
                  value={email}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.textCadastro}>Confirme o E-mail</Text>
                <TextInput
                  style={styles.inputLogin}
                  placeholder="Confirme seu E-mail"
                  onChangeText={setConfirmarEmail}
                  value={confirmarEmail}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.textCadastro}>Digite sua senha</Text>
                <TextInput
                  style={styles.inputLogin}
                  placeholder="Digite sua senha"
                  onChangeText={setSenha}
                  value={senha}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.textCadastro}>Confirme sua senha</Text>
                <TextInput
                  style={styles.inputLogin}
                  placeholder="Confirme sua senha"
                  onChangeText={setConfirmarSenha}
                  value={confirmarSenha}
                />
              </View>
              {/* botão de cria conta */}
              <View style={{ flex: 1, alignItems: "center" }}>
                <Pressable
                  style={styles.fecharModal}
                  onPress={() => CriarConta()}
                >
                  <Text style={styles.textFecharModal}>Criar conta</Text>
                </Pressable>

                {/* botão pra fechar o modal sem precisar subir o usario cadastrado */}

                <Pressable
                  style={styles.fecharModal}
                  onPress={() => setModalCadastro(false)}
                >
                  <Text style={styles.textFecharModal}>Ja tenho uma conta</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>

      {/* esse botão e que fica na tela inical do login */}

      <Pressable onPress={() => setModalCadastro(true)} style={styles.button}>
        <Text style={styles.textButton}> Crie sua Conta</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textoLogo: {
    color: "#01B3D7",
    fontWeight: "bold",
    fontSize: 28,
  },

  textoBenvindo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  titlebold: {
    color: "#01B3D7",
  },

  button: {
    width: 300,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#01B3D7",
  },

  textButton: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  centeredView: {
    flex: 1,
    width: "100%",

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },

  scrollView: {
    flex: 1,
    width: "100%",
  },
  scroll: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
  },

  inputLogin: {
    borderWidth: 2,
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    width: 350,
    height: 40,
    marginTop: 1,
    fontSize: 12,
    fontWeight: "bold",

    borderColor: "#1081dd",
  },

  textCadastro: {
    fontWeight: "bold",
    fontSize: 14,
    paddingLeft: 8,
  },

  fecharModal: {
    marginTop: 20,
    backgroundColor: "#01B3D7",
    padding: 10,
    borderRadius: 20,
    width: 250,
    height: 40,
    alignItems: "center",
  },

  textFecharModal: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 16,
  },

  pressableModal: {
    width: 165,
    height: 40,
    borderColor: "#1081dd",
    borderRadius: 20,
    borderWidth: 2,
    paddingLeft: 15,
    paddingTop: 10,

    backgroundColor: "#FFFFFF",
  },

  modalSeleção: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ModalCadastroUsuario;
