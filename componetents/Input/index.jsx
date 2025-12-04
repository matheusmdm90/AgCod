import { StyleSheet, TextInput } from "react-native";

const Input = ({ placeholder, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.inputLogin}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  inputLogin: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    width: 350,
    height: 60,
    marginTop: 10,
    fontSize: 20,
  },
});
