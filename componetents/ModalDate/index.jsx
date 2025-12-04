import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ModalDate = ({ setdata, mudarData }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formatted = date.toLocaleDateString();
    setdata(formatted);
    hideDatePicker();
  };

  return (
    <View>
      <Pressable style={styles.pressableModal} onPress={showDatePicker}>
        <Text style={styles.modalSeleção}> {mudarData} </Text>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ModalDate;
