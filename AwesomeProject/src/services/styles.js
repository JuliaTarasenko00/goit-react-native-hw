import { StyleSheet } from "react-native";

export const gStyles = StyleSheet.create({
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
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    marginBottom: 16,
    color: "#BDBDBD",
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
