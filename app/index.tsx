import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { auth, db } from "../services/firebase.config";

export default function Index() {
  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    // Test Firebase connection
    const testConnection = async () => {
      try {
        // Check if Firebase Auth is initialized
        if (auth) {
          console.log("✅ Firebase Auth initialized");
        }

        // Check if Firestore is initialized
        if (db) {
          console.log("✅ Firestore initialized");
        }

        setStatus("Firebase Connected! ✅");

        // After 2 seconds, we'll navigate to auth screens
        setTimeout(() => {
          setStatus("Ready to build!");
        }, 2000);
      } catch (error) {
        console.error("Firebase initialization error:", error);
        setStatus("Error: " + (error as Error).message);
      }
    };

    testConnection();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messaging App MVP</Text>
      <ActivityIndicator size="large" color="#4361EE" style={styles.loader} />
      <Text style={styles.text}>{status}</Text>
      <Text style={styles.subtitle}>Day 0: Setup Complete</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4361EE",
    marginBottom: 20,
  },
  loader: {
    marginVertical: 20,
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: "#666",
  },
  subtitle: {
    marginTop: 40,
    fontSize: 14,
    color: "#9DC183",
    fontWeight: "600",
  },
});
