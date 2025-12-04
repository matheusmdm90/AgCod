import { Picker } from "@react-native-picker/picker";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export const ModalEstados = ({
  ValordoModal,
  TrocarEstadoDoModal,
  ValuerEstados,
  TrocarEstados,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={ValordoModal}
      onRequestClose={() => {
        TrocarEstadoDoModal(!ValordoModal);
      }}
    >
      <View style={styles.centeredViewSelecao}>
        <View style={styles.centeredViewSelecaoCard}>
          <View style={styles.select}>
            <Picker
              itemStyle={{ fontSize: 12, fontWeight: "bold" }}
              selectedValue={ValuerEstados}
              onValueChange={(itemValue, itemIndex) => TrocarEstados(itemValue)}
            >
              <Picker.Item label="Acre" value="Acre" />
              <Picker.Item label="Alagoas" value="Alagoas" />
              <Picker.Item label="Amapá" value="Amapá" />
              <Picker.Item label="Amazonas" value="Amazonas" />
              <Picker.Item label="Bahia" value="Bahia" />
              <Picker.Item label="Ceará" value="Ceará" />
              <Picker.Item label="Distrito Federal" value="Distrito Federal" />
              <Picker.Item label="Espírito Santo" value="Espírito Santo" />
              <Picker.Item label="Goiás" value="Goiás" />
              <Picker.Item label="Maranhão" value="Maranhão" />
              <Picker.Item label="Mato Grosso" value="Mato Grosso" />
              <Picker.Item
                label="Mato Grosso do Sul"
                value="Mato Grosso do Sul"
              />
              <Picker.Item label="Minas Gerais" value="Minas Gerais" />
              <Picker.Item label="Pará" value="Pará" />
              <Picker.Item label="Paraíba" value="Paraíba" />
              <Picker.Item label="Paraná" value="Paraná" />
              <Picker.Item label="Pernambuco" value="Pernambuco" />
              <Picker.Item label="Piauí" value="Piauí" />
              <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
              <Picker.Item
                label="Rio Grande do Norte"
                value="Rio Grande do Norte"
              />
              <Picker.Item
                label="Rio Grande do Sul"
                value="Rio Grande do Sul"
              />
              <Picker.Item label="Rondônia" value="Rondônia" />
              <Picker.Item label="Roraima" value="Roraima" />
              <Picker.Item label="Santa Catarina" value="Santa Catarina" />
              <Picker.Item label="São Paulo" value="São Paulo" />
              <Picker.Item label="Sergipe" value="Sergipe" />
              <Picker.Item label="Tocantins" value="Tocantins" />
            </Picker>
          </View>
          <Pressable
            style={styles.fecharModal}
            onPress={() => TrocarEstadoDoModal(false)}
          >
            <Text style={styles.textFecharModal}>ok</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

  select: {
    width: 200,
    height: 55,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#1081dd",
    marginTop: 2,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },

  centeredViewSelecao: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },

  centeredViewSelecaoCard: {
    width: 260,
    height: 150,
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: 2,
    fontSize: 12,
    fontWeight: "bold",
  },
});
