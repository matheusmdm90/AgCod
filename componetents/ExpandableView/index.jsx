import { useState } from "react";
import {
  Image,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Botao from "../Botao";
import { IconsetaAberto, IconsetaFechado } from "../Icons";

const ExpandableView = ({ nomeEmpresa, logoEmpresa, linkEmpresa }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Image source={logoEmpresa} />
        <Text style={styles.headerText}>{nomeEmpresa}</Text>
        <Text>{expanded ? <IconsetaAberto /> : <IconsetaFechado />}</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.content}>
          <Text style={styles.contentText}>
            <Text style={styles.contentTextBold}>Cabelo</Text> ----------- R$
            40,00
          </Text>
          <Text style={styles.contentText}>
            <Text style={styles.contentTextBold}>Barba</Text> ------------ R$
            40,00
          </Text>
          <Botao nome="Acessar" onPress={linkEmpresa} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#01B3D7",
    backgroundColor: "#f2f2f2",
    overflow: "hidden",
    elevation: 3,
  },
  header: {
    width: "100%",
    paddingRight: "55%",
    padding: 10,
    gap: 20,
    backgroundColor: "#050F28",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  content: {
    padding: 10,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#050F28",
  },
  contentText: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
  },

  contentTextBold: {
    color: "#01B3D7",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ExpandableView;
