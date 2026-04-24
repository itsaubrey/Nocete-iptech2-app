import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import LoginForm from "./src/components/LoginForm";
import HomeScreen from "./src/components/HomeScreen";
import { User } from "./src/components/user";

const MOCK_USER: User = {
  username: "admin",
  password: "1234",
};

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log("Attempting login...");
    console.log("Entered username:", username);
    console.log("Entered password:", password);

    if (
      username === MOCK_USER.username &&
      password === MOCK_USER.password
    ) {
      console.log("Login successful!");
      setIsLoggedIn(true);
      Alert.alert("Success", "Logged in!");
    } else {
      console.log("Login failed.");
      Alert.alert("Error", "Invalid credentials");
    }
  };

  const handleLogout = () => {
    console.log("Logging out...");
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    console.log("User logged out.");
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <HomeScreen username={username} onLogout={handleLogout} />
      ) : (
        <LoginForm
          username={username}
          password={password}
          onChangeUsername={setUsername}
          onChangePassword={setPassword}
          onLogin={handleLogin}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});