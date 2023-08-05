import { useState } from "react";

import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function Registration() {
  const [activeInput, setActiveInput] = useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/backgroundImg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.registration}>
          <View style={styles.registrationPhoto}>
            <Image style={styles.registrationImagePhoto} />
            <AntDesign
              name="pluscircleo"
              size={24}
              color="orange"
              style={styles.registrationImageAddPhoto}
            />
          </View>
          <Text style={styles.registrationText}>Реєстрація</Text>
          <View style={styles.registrationInputText}>
            <TextInput
              style={[
                styles.registrationInput,
                activeInput === "inputLogin" && styles.registrationInputActive,
              ]}
              placeholder="Логін"
              keyboardType="default"
              placeholderTextColor="#BDBDBD"
              onFocus={() => setActiveInput("inputLogin")}
              onBlur={() => setActiveInput(null)}
            />
            <TextInput
              style={[
                styles.registrationInput,
                activeInput === "inputEmail" && styles.registrationInputActive,
              ]}
              placeholder="Адреса електронної пошти"
              keyboardType="email-address"
              placeholderTextColor="#BDBDBD"
              onFocus={() => setActiveInput("inputEmail")}
              onBlur={() => setActiveInput(null)}
            />

            <View style={styles.buttonWrap}>
              <TextInput
                style={[
                  styles.registrationInput,
                  activeInput === "inputPassword" &&
                    styles.registrationInputActive,
                ]}
                placeholder="Пароль"
                keyboardType="default"
                placeholderTextColor="#BDBDBD"
                onFocus={() => setActiveInput("inputPassword")}
                onBlur={() => setActiveInput(null)}
              />
              <TouchableOpacity style={styles.btnPassword}>
                <Text style={styles.btnPasswordText}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.registrationButtonBottom}>
            <TouchableOpacity style={styles.btnRegist}>
              <Text style={styles.btnRegistText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnAccount}>
              <Text style={styles.btnAccountText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  registration: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  registrationPhoto: {
    display: "flex",
    alignItems: "center",
    marginTop: -60,
    position: "relative",
  },
  registrationImagePhoto: {
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  registrationImageAddPhoto: {
    position: "absolute",
    bottom: 8,
    right: 124,
    width: 25,
    height: 25,
  },
  registrationText: {
    textAlign: "center",
    color: "#212121",
    marginTop: 32,
    letterSpacing: 0.3,
    marginBottom: 33,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  registrationInputText: {
    display: "flex",
    alignItems: "center",
  },
  registrationInput: {
    fontFamily: "Roboto-Regular",
    minWidth: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    color: "#212121",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    paddingLeft: 16,
    borderRadius: 10,
    fontSize: 16,
  },
  registrationButtonBottom: {
    display: "flex",
    alignItems: "center",
    marginTop: 43,
    paddingBottom: 78,
  },
  registrationInputActive: {
    borderColor: "#FF6C00",
    color: "#212121",
    backgroundColor: "transparent",
  },
  inputActiveText: {
    color: "#212121",
  },
  buttonWrap: {
    position: "relative",
  },
  btnPassword: {
    position: "absolute",
    bottom: 32,
    right: 16,
  },
  btnPasswordText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontSize: 16,
  },
  btnRegist: {
    fontFamily: "Roboto-Regular",
    width: 343,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    fontSize: 16,
    borderColor: "transparent",
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 16,
  },
  btnRegistText: {
    color: "white",
  },
  btnAccountText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
