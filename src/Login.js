import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-web";
import Checkbox from "expo-checkbox";

export default function Login() {
  const [userCheck, SetUserCheck] = useState(false);
  return (
    <View style={styles.container}>
      <Text>Login Form</Text>
      <Text>Now you can login through(Google, Facebook, Gmail, Apple Id)</Text>

      <View>
        <Text>Enter your Email Id</Text>
        <TextInput style={styles.inputBox} autoCorrect={false} />

        <Text>Enter your password</Text>
        <TextInput
          style={styles.inputBox}
          autoCapitalize="none"
          secureTextEntry={true}
        />
      </View>
      <View>
        <Checkbox
          value={userCheck}
          onValueChange={() => SetUserCheck(!userCheck)}
          color={userCheck ? "green" : undefined}
        />
        <Text>Agree with our term and condition</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.loginBtn,
          {
            backgroundColor: userCheck ? "#F4D6CC" : "white",
          },
        ]}
        disabled={!userCheck}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#EFD3D7",
  },
  inputBox: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "black",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    fontSize: 20,
  },
  loginBtn: {
    textAlign: "center",
    fontSize: 42,
    fontWeight: "bolder",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "black",
    marginTop: 20,
    borderRadius: 20,
  },
  btnText: {
    fontFamily: "italic",
    textTransform: "uppercase"
  }
});
