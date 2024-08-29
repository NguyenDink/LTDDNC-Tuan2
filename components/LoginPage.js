import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email === "admin" && password === "admin") {
            navigation.navigate("Home", {
                fullName: "Admin",
                email: "admin",
                gender: "Nam",
                dob: "1/1/2000",
                phoneNumber: "0123456789",
            });
        } else {
            alert("Email hoặc mật khẩu không chính xác");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>IJ FIT HCMUTE</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#a0a0a0"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                secureTextEntry
                placeholderTextColor="#a0a0a0"
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity>
                <Text style={styles.link}>Quên mật khẩu?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={styles.text}>
                    Chưa có tài khoản?{" "}
                    <Text style={styles.link} onPress={() => navigation.navigate("Register")}>
                        Đăng ký ngay
                    </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#6dcf5b",
        marginBottom: 40,
        textAlign: "center",
    },
    input: {
        height: 45,
        borderColor: "#6dcf5b",
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 15,
        backgroundColor: "#ffffff",
    },
    link: {
        color: "#509b43",
        textAlign: "center",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#6dcf5b",
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 20,
        alignItems: "center",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
    },
    footer: {
        alignItems: "center",
    },
    text: {
        color: "#333",
        textAlign: "center",
    },
});
