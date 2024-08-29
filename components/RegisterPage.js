import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";

export default function RegisterPage({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert("Error", "Vui lòng điền đầy đủ thông tin");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Mật khẩu không trùng khớp");
            return;
        }

        navigation.navigate("MoreInfo", { email, password });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Đăng ký</Text>

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

            <TextInput
                style={styles.input}
                placeholder="Nhập lại mật khẩu"
                secureTextEntry
                placeholderTextColor="#a0a0a0"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Đăng ký</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.text}>
                    Đã có tài khoản? <Text style={styles.link}>Đăng nhập ngay</Text>
                </Text>
            </TouchableOpacity>
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
        marginBottom: 30,
        textAlign: "center",
    },
    input: {
        height: 45,
        borderColor: "#509b43",
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 15,
        backgroundColor: "#ffffff",
    },
    button: {
        backgroundColor: "#509b43",
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
    link: {
        color: "#6dcf5b",
    },
});
