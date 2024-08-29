import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomePage({ route }) {
    const { fullName, email, gender, dob, phoneNumber } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>IJ FIT UTE</Text>
            <Text style={styles.info}>Người dùng: {fullName}</Text>
            <Text style={styles.info}>Email: {email}</Text>
            <Text style={styles.info}>Giới tính: {gender}</Text>
            <Text style={styles.info}>Ngày sinh: {dob}</Text>
            <Text style={styles.info}>Số điện thoại: {phoneNumber}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eafaf1",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#6dcf5b",
        marginBottom: 30,
        textAlign: "center",
    },
    info: {
        fontSize: 18,
        color: "#333",
        marginBottom: 10,
    },
});
