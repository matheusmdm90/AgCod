import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerType: "front",
          drawerStyle: {
            backgroundColor: "#050F28",
            width: 240,
          },
          drawerLabelStyle: { color: "#fff" },
          headerStyle: { backgroundColor: "#050F28" },
          headerTintColor: "#fff",
        }}
        initialRouteName="index"
      >
        <Drawer.Screen
          name="Home/index"
          options={{
            title: ``,
            drawerLabel: "Home",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Agendamento/index"
          options={{
            title: ``,
            drawerLabel: "Agendamento",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="index"
          options={{
            title: "login",

            headerShown: false,
          }}
        />

        <Drawer.Screen
          name="Agendamento2/index"
          options={{
            title: "",
            drawerItemStyle: { display: "none" },
            drawerHideStatusBarOnOpen: false,
            headerShown: false,
          }}
        />

        <Drawer.Screen
          name="Profissionais/index"
          options={{
            title: "",
            drawerItemStyle: { display: "none" },
            drawerHideStatusBarOnOpen: false,
            headerShown: false,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
