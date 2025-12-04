import { Image, View } from "react-native";

const Logo = ({ logoEmpresa }) => {
  return (
    <View>
      <Image source={logoEmpresa} />
    </View>
  );
};
export default Logo;
