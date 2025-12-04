import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BotaoBack from "../../componetents/BotaoBack";
import Header from "../../componetents/Header";
import Logo from "../../componetents/Logo";
import ProfissionaisView from "../../componetents/ProfissionaisView";

const Profissionais = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.topo}>
        <BotaoBack onPress={() => router.navigate("./Agendamento2")} />
        <Logo logoEmpresa={require("../../assets/images/empresa2.png")} />
      </View>

      <View>
        <ProfissionaisView
          nomeColaborador="Marcelo Rodrigues"
          fotoColaborador={require("../../assets/images/colaborador3.png")}
          avaliacao="5,0"
        />
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

  topo: {
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
    gap: 110,
  },
});
export default Profissionais;
