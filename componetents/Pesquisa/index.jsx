import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import MultiSelect from "react-native-multiple-select";

const items = [
  { id: "92iijs7yta", name: "Cabelo" },
  { id: "a0s0a8ssbsd", name: "Barba" },
  { id: "16hbajsabsd", name: "Unha" },
  { id: "nahs75a5sg", name: "Limpeza de pele" },
  { id: "667atsas", name: "Bronzeamento" },
  { id: "hsyasajs", name: "Manicure" },
  { id: "djsjudksjd", name: "Pedicure" },
  { id: "sdhyaysdj", name: "Bigode" },
  { id: "suudydjsjd", name: "Acrigel" },
];

const Pesquisa = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const multiSelectRef = useRef(null);

  return (
    <View style={styles.container}>
      <MultiSelect
        pesquisarInputPlaceholderText={View}
        hideTags={false} // Mostra os chips selecionados
        items={items}
        uniqueKey="id"
        ref={multiSelectRef}
        onSelectedItemsChange={setSelectedItems}
        selectedItems={selectedItems}
        selectText=" Selecione estados"
        searchInputPlaceholderText="Buscar estado..."
        onChangeInput={(text) => console.log(text)}
        tagRemoveIconColor="#ff5252"
        tagBorderColor="#fff"
        tagTextColor="#FFF"
        selectedItemTextColor="#01B3D7"
        selectedItemIconColor="#01B3D7"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{ color: "#000", fontSize: 16 }}
        submitButtonColor="#01B3D7"
        submitButtonText="Confirmar"
        styleDropdownMenuSubsection={styles.dropdownSection}
        styleInputGroup={styles.inputGroup}
        styleSelectorContainer={{ backgroundColor: " #000" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  dropdownSection: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 10,
    backgroundColor: "#FFF",
  },
  inputGroup: {
    paddingHorizontal: 1,
    backgroundColor: "#FFF",
  },
  selected: {
    marginTop: 20,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    backgroundColor: "#000",
  },
});

export default Pesquisa;
