/** @format */

import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subTitulo}>Sign In to your account</Text>
      <TextInput style={styles.textInput} placeholder="ejem.2024@gmail.com" />
      <TextInput style={styles.textInput} placeholder="password" />
      <TouchableOpacity
        style={styles.boton}
        onPress={() => Alert.alert("Complete los campos")}
      >
        <Text style={styles.textBoton}>INGRESAR</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 90,
    fontWeight: "bold",
    color: "#34434D",
  },
  subTitulo: {
    fontSize: 20,
    color: "gray",
  },
  textInput: {
    padding: 5,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    paddingStart: 25,
  },
  boton: {
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "#34434D",
  },
  textBoton: {
    color: "#fff",
    textAlign: "center",
    marginTop: 17,
  },
});
