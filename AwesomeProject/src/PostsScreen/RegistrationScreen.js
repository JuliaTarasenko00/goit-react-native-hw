import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import { gStyles } from "../services/styles";

export default function Registration() {
  return (
    <View style={gStyles.container}>
      <ImageBackground
        source={require("../../assets/backgroundImg.jpg")}
        resizeMode="cover"
        style={gStyles.image}
      >
        <View style={gStyles.registration}>
          <View style={style.registrationPhoto}>
            <Image style={style.registrationImagePhoto} />
            <AntDesign
              name="pluscircleo"
              size={24}
              color="orange"
              style={style.registrationImageAddPhoto}
            />
          </View>
          <Text style={gStyles.registrationText}>Реєстрація</Text>
          <View style={gStyles.registrationInputText}>
            <TextInput
              style={gStyles.registrationInput}
              placeholder="Логін"
              keyboardType="default"
            />
            <TextInput
              style={gStyles.registrationInput}
              placeholder="Адреса електронної пошти"
              keyboardType="email-address"
            />

            <TextInput
              placeholder="Пароль"
              keyboardType="default"
              style={gStyles.registrationInput}
            />
          </View>
          <View
            style={[gStyles.registrationButtonBottom, style.registrationBtn]}
          >
            <TouchableOpacity style={gStyles.btnRegist}>
              <Text style={gStyles.btnRegistText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity style={gStyles.btnAccount}>
              <Text style={gStyles.btnAccountText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
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
    right: 134,
    width: 25,
    height: 25,
  },
  registrationBtn: {
    paddingBottom: 78,
  },
});
