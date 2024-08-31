import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { login } from "../api/AuthAPIService";

export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await login(email, password);

            if (response.error) {
                Alert.alert("Đăng nhập không thành công", response.message);
            } else {
                setEmail("");
                setPassword("");
                navigation.navigate("Home", {
                    fullName: response.userDTO.fullName || "",
                    email: response.userDTO.email || "",
                    gender: response.userDTO.gender || "",
                    dob: response.userDTO.dob || "",
                    phoneNumber: response.userDTO.phoneNumber || "",
                });
            }
        } catch (error) {
            Alert.alert("Đăng nhập không thành công", "Đã xảy ra lỗi khi đăng nhập. Hãy thử lại.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>IJ FIT UTE</Text>

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
});
