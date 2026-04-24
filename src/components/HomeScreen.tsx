import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

type Props = {
  username: string;
  onLogout: () => void;
};

export default function HomeScreen({ username, onLogout }: Props) {
  return (
    <View>
      <Text style={styles.title}>Welcome, {username} 👋</Text>
      <Button
        title="Logout"
        onPress={() => {
          console.log("Logout button pressed");
          onLogout();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
});