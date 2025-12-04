import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

function Hamburgue() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Botão de menu manual */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={{ fontSize: 30, color: "#fff" }}>☰</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Hamburgue;
