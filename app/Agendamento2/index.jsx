import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";
import Botao from "../../componetents/Botao";
import Header from "../../componetents/Header";

const Empresa = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.logoEmpresa}>
        <Image
          source={require("../../assets/images/empresa2.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.sobre}>
        <Text style={styles.nomeEmpresa}>Barbearia Império</Text>

        <Text style={styles.tituloSobre}>Sobre nós</Text>
        <Text style={styles.textSobre}>
          Na Barbearia Império, tradição e modernidade se encontram para
          oferecer a você uma experiência única em cuidados masculinos. Nosso
          ambiente é pensado para proporcionar conforto, estilo e um atendimento
          de excelência. Contamos com profissionais qualificados, apaixonados
          pelo que fazem, sempre atualizados nas tendências de cortes, barbas e
          cuidados pessoais. Venha nos visitar e viva a experiência Império!
        </Text>
        <Text style={styles.endereco}>
          📍 Endereço: Rua das Palmeiras, 123 – São Paulo, SP
        </Text>
      </View>
      <View style={styles.containerBotao}>
        <View style={styles.Botao}>
          <Botao
            nome="Voltar"
            onPress={() => router.navigate("./Agendamento")}
          />
        </View>
        <View style={styles.Botao}>
          <Botao
            nome="Profissionais"
            onPress={() => router.navigate("./Profissionais")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBlockStart: 50,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#050F28",
    gap: 10,
  },

  sobre: {
    width: "90%",
    borderWidth: 2,
    borderColor: "#01B3D7",
    alignItems: "center",
    padding: 20,
    gap: 15,
    marginTop: 30,
  },

  nomeEmpresa: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: 36,
  },

  tituloSobre: {
    color: "#01B3D7",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },

  textSobre: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  logo: {
    width: 90,
    height: 90,
    borderRadius: 50,
    position: "absolute",
    top: -10, // sobe a imagem
    left: -40,
    zIndex: 1,
  },

  endereco: {
    color: "#00bfff",
    fontWeight: "bold",
    textAlign: "center",
  },

  containerBotao: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
  },

  Botao: {
    width: "53%",
  },
});
export default Empresa;
