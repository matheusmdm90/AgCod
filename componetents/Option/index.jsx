import { Pressable, StyleSheet, Text } from "react-native";

const Option = ({ onPress, icon, text }) => {
  return (
    <Pressable style={styles.Option} onPress={onPress}>
      {icon}
      <Text style={styles.textOption}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Option: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#01B3D7",
    padding: 12,
    flexDirection: "row",
    alignItems: "center",

    gap: 20,
  },
  textOption: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
});
export default Option;
