import { Slot } from "expo-router";

export default function RootLayout() {
  {/*} O Slot rende a ROTA FILHA ativa (ex.: /(auth) ou /(tabs)),
  sem impor header/stack no nível raiz*/}
  return <Slot />;
}