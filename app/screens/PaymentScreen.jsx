import { useStripe } from "@stripe/stripe-react-native";
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
const PaymentScreen = () => {
    const [name, setName] = useState("");
    const stripe = useStripe();
    const API = process.env.REACT_NATIVE_APP_API_KEY

    const subscribe = async () => {
        try {
            // sending request
            const response = await fetch("http://localhost:5000/pay", {
                method: "POST",
                body: JSON.stringify({ name }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            if (!response.ok) return Alert.alert(data.message);
            const clientSecret = data.clientSecret;
            const initSheet = await stripe.initPaymentSheet({
                paymentIntentClientSecret: clientSecret,
            });
            if (initSheet.error) return Alert.alert(initSheet.error.message);
            const presentSheet = await stripe.presentPaymentSheet({
                clientSecret,
            });
            if (presentSheet.error) return Alert.alert(presentSheet.error.message);
            Alert.alert("Payment complete, thank you!");
        } catch (err) {
            console.error(err);
            Alert.alert("Something went wrong, try again later!");
        }
    };

    return (
        <View>
            <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Name"
                style={{
                    width: 300,
                    fontSize: 20,
                    padding: 10,
                    borderWidth: 1,
                }}
            />
            <Button title="Subscribe - 3000 PKR" onPress={subscribe} />
        </View>
    );
};

export default PaymentScreen;
