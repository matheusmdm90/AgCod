import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { IconHeaderPerfil, IconSininho } from "../Icons";

const IconsHeader = () => {
  return (
    <View style={styles.Container}>
      <Pressable
        style={styles.Option}
        onPress={() => router.navigate("./index")}
      >
        {<IconSininho />}
      </Pressable>

      <Pressable
        style={styles.Option}
        onPress={() => router.navigate("./index")}
      >
        {<IconHeaderPerfil />}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
  },

  Option: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default IconsHeader;
