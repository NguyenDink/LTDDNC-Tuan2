import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function StartPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Chào mừng đến với <Text style={[styles.welcome, styles.title]}> IJ FIT UTE!</Text>
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Đăng Nhập</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.registerButton]}
                onPress={() => navigation.navigate("Register")}
            >
                <Text style={styles.buttonText}>Đăng Ký</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#f0f0f0",
    },
    welcome: {
        fontSize: 24,
        marginBottom: 40,
        textAlign: "center",
        fontWeight: "bold",
    },
    title: {
        color: "#6dcf5b",
    },
    button: {
        backgroundColor: "#6dcf5b",
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginVertical: 10,
        width: "80%",
        alignItems: "center",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
    },
    registerButton: {
        backgroundColor: "#509b43",
    },
});