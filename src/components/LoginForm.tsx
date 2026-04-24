import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

type Props = {
  username: string;
  password: string;
  onChangeUsername: (text: string) => void;
  onChangePassword: (text: string) => void;
  onLogin: () => void;
};

export default function LoginForm({
  username,
  password,
  onChangeUsername,
  onChangePassword,
  onLogin,
}: Props) {
  return (
    <View>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => {
          console.log("Username changed:", text);
          onChangeUsername(text);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => {
          console.log("Password changed:", text);
          onChangePassword(text);
        }}
      />

      <Button title="Login" onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});