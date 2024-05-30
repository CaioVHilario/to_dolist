import Home from "./src/Screens/Home";
import { StatusBar } from "react-native";

export default function App(){
  return (
    <>
      <StatusBar 
        barStyle={"light-content"}
      />
      <Home />
    </>
  );
}