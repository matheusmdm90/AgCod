import { useState } from "react";
import {
  Image,
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  IconAgendamento,
  IconsetaAberto,
  IconsetaFechado,
  IconStar,
} from "../Icons";

const Profissionais = ({
  nomeColaborador,
  fotoColaborador,
  agendamentoColaborador,
  avaliacao,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Image source={fotoColaborador} />
        <Text style={styles.headerText}>{nomeColaborador}</Text>
        <View style={styles.Avaliacao}>
          <Text style={styles.textAvaliacao}>
            <IconStar />
          </Text>
          <Text style={styles.textAvaliacao}>{avaliacao}</Text>
        </View>
        <Text>{expanded ? <IconsetaAberto /> : <IconsetaFechado />}</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.content}>
          <Pressable style={styles.btn} onPress={agendamentoColaborador}>
            <Text style={styles.btnText}>Ver agenda</Text>
            <IconAgendamento />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "45%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#01B3D7",
    backgroundColor: "#050F28",
    overflow: "hidden",
    elevation: 3,
  },
  Avaliacao: {
    flexDirection: "row",
    position: "relative",
    top: -40,
    right: -35,
  },

  textAvaliacao: {
    color: "#C7A622",
    textAlign: "center",
  },

  header: {
    width: "100%",
    padding: 5,
    gap: 10,
    backgroundColor: "#050F28",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  content: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#050F28",
  },

  btn: {
    backgroundColor: "#01B3D7",
    width: "60%",
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
    flexDirection: "row",
  },

  btnText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
export default Profissionais;
