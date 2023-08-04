import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import { gStyles } from "../services/styles";

export default function LoginScreen() {
  return (
    <View style={gStyles.container}>
      <ImageBackground
        source={require("../../assets/backgroundImg.jpg")}
        resizeMode="cover"
        style={gStyles.image}
      >
        <View style={gStyles.registration}>
          <Text style={gStyles.registrationText}>Увійти</Text>
          <View style={gStyles.registrationInputText}>
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
          <View style={[gStyles.registrationButtonBottom, styles.loginBtn]}>
            <TouchableOpacity style={gStyles.btnRegist}>
              <Text style={gStyles.btnRegistText}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity style={gStyles.btnAccount}>
              <Text style={gStyles.btnAccountText}>
                Немає акаунту? Зареєструватися
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    paddingBottom: 144,
  },
});
