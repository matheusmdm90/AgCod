import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";
import ExpandableView from "../../componetents/ExpandableView";
import Header from "../../componetents/Header";
import Pesquisa from "../../componetents/Pesquisa";

const Agendamento = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <Text style={styles.texto}>
        Faça já seu
        <Text style={styles.textoColor}>{"\n"}agendamento</Text>
      </Text>
      <Pesquisa />
      <ScrollView style={styles.scroll}>
        <View style={styles.scrollView}>
          <ExpandableView
            nomeEmpresa="Barbearia Império"
            logoEmpresa={require("../../assets/images/logoEmpresa.png")}
          />
          <ExpandableView
            nomeEmpresa="Barbearia Vintage"
            logoEmpresa={require("../../assets/images/empresa2.png")}
          />
          <ExpandableView
            nomeEmpresa="Cortes de Rei"
            logoEmpresa={require("../../assets/images/empresa3.png")}
            linkEmpresa={() => router.navigate("./Agendamento2")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingBlockStart: 10,
    alignItems: "center",
    backgroundColor: "#050F28",
    gap: 10,
  },

  scroll: {
    width: "100%",
  },

  scrollView: {
    alignItems: "center",
    gap: 10,
  },

  texto: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },

  textoColor: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#01B3D7",
  },
});

export default Agendamento;
