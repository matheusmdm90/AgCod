import { router } from "expo-router";
import { Image, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../../componetents/Header";
import {
  AgendaIcon,
  HistoricoIcon,
  PerfilIcon,
  StarIcon,
} from "../../componetents/Icons";
import Option from "../../componetents/Option";

const Home = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <Header />
      <Option
        icon={<AgendaIcon />}
        text="Agendar agora"
        onPress={() => router.navigate("./Agendamento")}
      />
      <Option
        icon={<HistoricoIcon />}
        text="Histórico de agendamentos"
        onPress={() => router.navigate("/pomodoro")}
      />
      <Option
        icon={<PerfilIcon />}
        text="Meus dados"
        onPress={() => router.navigate("/pomodoro")}
      />
      <Option
        icon={<StarIcon />}
        text="Meus dados"
        onPress={() => router.navigate("/pomodoro")}
      />
      <Image source={require("../../assets/images/Logo.png")} />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBlockStart: 50,
    alignItems: "center",
    backgroundColor: "#050F28",
    gap: 10,
  },
});
export default Home;
