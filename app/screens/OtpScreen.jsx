import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';

const OtpScreen = () => {
    const [otp, setOTP] = useState('');

    const handleOTPChange = (value) => {
        setOTP(value);
    };

    const handleVerifyOTP = () => {
        // Replace this with your actual OTP verification logic
        if (otp === '123456') {
            Alert.alert('Success', 'OTP verification successful');
        } else {
            Alert.alert('Error', 'Invalid OTP');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter OTP</Text>
            <TextInput
                style={styles.input}
                value={otp}
                onChangeText={handleOTPChange}
                keyboardType="numeric"
                maxLength={6}
            />
            <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "white",
    },
    input: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#C29DCB',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
};

export default OtpScreen;
