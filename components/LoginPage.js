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

            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />

            <TextInput
                style={styles.input}
                placeholder="Mật khẩu"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity>
                <Text style={styles.link}>Quên mật khẩu?</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => alert("Đăng ký tài khoản")}>
                <Text style={styles.link}>
                    Chưa có tài khoản?{" "}
                    <Text style={styles.link} onPress={() => navigation.navigate("Register")}>
                        Đăng ký ngay
                    </Text>
                </Text>
            </TouchableOpacity>

            <Button title="Đăng nhập" onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    link: {
        color: "blue",
        marginBottom: 20,
        textAlign: "center",
    },
});
