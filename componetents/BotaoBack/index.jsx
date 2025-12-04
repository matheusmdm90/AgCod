import { Pressable } from "react-native";
import { IconBack } from "../Icons";

const BotaoBack = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <IconBack />
    </Pressable>
  );
};
export default BotaoBack;
