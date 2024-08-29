import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function MoreInfoPage({ route, navigation }) {
    const { email, password } = route.params;
    const [fullName, setFullName] = useState("");
    const [gender, setGender] = useState("Nam");
    const [dob, setDob] = useState(new Date());
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleUpdate = () => {
        if (!fullName || !gender || !dob || !phoneNumber) {
            Alert.alert("Error", "Vui lòng điền đầy đủ thông tin");
            return;
        }

        if (isNaN(phoneNumber)) {
            Alert.alert("Error", "Số điện thoại không đúng");
            return;
        }

        navigation.navigate("Home", {
            email,
            password,
            fullName,
            gender,
            dob: dob.toDateString(),
            phoneNumber,
        });
    };

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        setShowDatePicker(false);
        setDob(currentDate);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thông Tin Cá Nhân</Text>

            <TextInput style={styles.input} placeholder="Họ và tên" value={fullName} onChangeText={setFullName} />

            <Text style={styles.label}>Giới tính</Text>
            <View style={styles.radioGroup}>
                <TouchableOpacity style={styles.radioButton} onPress={() => setGender("Nam")}>
                    <View style={[styles.radioCircle, gender === "Nam" && styles.selectedRadio]} />
                    <Text style={styles.radioText}>Nam</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.radioButton} onPress={() => setGender("Nữ")}>
                    <View style={[styles.radioCircle, gender === "Nữ" && styles.selectedRadio]} />
                    <Text style={styles.radioText}>Nữ</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>Ngày sinh</Text>
            <TextInput
                style={styles.input}
                value={dob.toDateString()}
                onFocus={() => setShowDatePicker(true)}
                showSoftInputOnFocus={false}
            />
            {showDatePicker && <DateTimePicker value={dob} mode="date" display="default" onChange={onChangeDate} />}

            <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />

            <Button title="Cập nhật" onPress={handleUpdate} />
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
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    radioGroup: {
        flexDirection: "row",
        marginBottom: 20,
    },
    radioButton: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20,
    },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "gray",
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    selectedRadio: {
        backgroundColor: "blue",
    },
    radioText: {
        fontSize: 16,
    },
});
