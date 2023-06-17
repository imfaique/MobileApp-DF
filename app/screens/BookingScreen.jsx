import {
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import COLOR from "../config/COLOR";
import SPACING from "../config/SPACING";
// import Ionicons from "@expo/vector-icons/Ionicons";
import car from "../data/cars";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setOrigin, setDestination } from './../../slices/navSlice';
import NavFavourites from '../components/NavFavourites';
import NavOptions from '../components/NavOptions';
import tw from 'twrnc';


const BookingScreen = () => {
    const dispatch = useDispatch();
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [dropoffDate, setDropoffDate] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCVV] = useState('');

    const handleBooking = () => {
        if (pickupLocation === '') {
            Alert.alert('Error', 'Please enter the pickup location.');
            return;
        }

        if (dropoffLocation === '') {
            Alert.alert('Error', 'Please enter the drop-off location.');
            return;
        }

        if (pickupDate === '') {
            Alert.alert('Error', 'Please enter the pickup date.');
            return;
        }

        if (dropoffDate === '') {
            Alert.alert('Error', 'Please enter the drop-off date.');
            return;
        }
        if (paymentMethod === 'Cash') {
            // Perform cash payment confirmation logic
            Alert.alert('Payment Confirmed', 'Your booking is complete!');
        } else if (paymentMethod === 'Card') {
            // Perform card payment confirmation logic
            if (nameOnCard && cardNumber && expirationDate && cvv) {
                Alert.alert('Payment Confirmed', 'Your booking is complete!');
            } else {
                Alert.alert('Error', 'Please provide valid card details.');
            }
        } else {
            Alert.alert('Error', 'Please select a payment method.');
        }


        // Additional validation logic (e.g., check valid dates, location format, etc.)

        // Proceed with booking logic
        // ...
    };
    const handlePaymentMethodSelect = (method) => {
        setPaymentMethod(method);
    };

    const [data, setData] = useState([])
    return (
        <>
            <ScrollView>
                <ImageBackground
                    source={colors.dark}
                    style={{ width: "100%", height: 500 }}
                >
                    <SafeAreaView>
                        <View
                            style={{
                                paddingHorizontal: SPACING,
                                justifyContent: "space-between",
                                flexDirection: "row",
                                height: "100%",
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    backgroundColor: COLOR.white,
                                    width: SPACING * 4,
                                    height: SPACING * 4,
                                    borderRadius: SPACING * 2,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Ionicons
                                    name="chevron-back-outline"
                                    color={COLOR.primary}
                                    size={SPACING * 3}
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    alignItems: "flex-end",
                                    justifyContent: "space-between",
                                    paddingBottom: SPACING * 8,
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: COLOR.white,
                                        width: SPACING * 4,
                                        height: SPACING * 4,
                                        borderRadius: SPACING * 2,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        name="heart-outline"
                                        color={COLOR.primary}
                                        size={SPACING * 3}
                                    />
                                </TouchableOpacity>
                                <View>
                                    {data.map((car) => (
                                        <TouchableOpacity
                                            style={{
                                                width: SPACING * 6,
                                                height: SPACING * 6,
                                                padding: SPACING / 2,
                                                backgroundColor: COLOR.white,
                                                borderRadius: SPACING,
                                                marginBottom: SPACING,
                                            }}
                                        // key={index}
                                        >
                                            <Image
                                                source={require("../../assets/cars/toyota.png")}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    borderRadius: SPACING,
                                                }}
                                            />
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </ImageBackground>
                <View
                    style={{
                        backgroundColor: COLOR.white,
                        padding: SPACING * 2,
                        borderRadius: SPACING * 3,
                        bottom: SPACING * 3,
                    }}
                >
                    <View
                        style={{ flexDirection: "row", justifyContent: "space-between" }}
                    >
                        <Text
                            style={{
                                fontSize: SPACING * 2,
                                fontWeight: "bold",
                                color: COLOR.dark,
                            }}
                        >
                            Honda Civic 2019
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                            <Text
                                style={{
                                    fontSize: SPACING * 2,
                                    fontWeight: "bold",
                                    color: COLOR.dark,
                                }}
                            >
                                Rs.10,000
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginVertical: SPACING * 2 }}>
                        <View style={{ flexDirection: "row", marginBottom: SPACING * 2 }}>
                            <TouchableOpacity
                                style={{ paddingVertical: SPACING, marginRight: SPACING * 2 }}
                            >
                                <Text
                                    style={{
                                        color: COLOR.primary,
                                        fontWeight: "bold",
                                        fontSize: SPACING * 1.7,
                                    }}
                                >
                                    Overview
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ paddingVertical: SPACING, marginRight: SPACING * 2 }}
                            >

                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: SPACING * 2, flexDirection: "row" }}>

                            <View style={{ flexDirection: "row" }}>

                                <View style={{ marginRight: SPACING * 2 }}>

                                    <Text style={{ fontSize: SPACING * 1.6, fontWeight: "700" }}>
                                        Are You Looking for Rent a Car? We make it easier, convenient & fast to booking your desire car foryour event.
                                        Now Hire   services which provides you  Luxury & Economical Cars at most affordable price. We feel the customer like a family.

                                        Get Your Safe & comfortable Fleet at your Door Step Master Tourismand rent a car which provides you a range of Luxury & Economical Fleets at reasonable rates.
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={styles.container}>
                                <Text style={styles.heading}>Vehicle Booking</Text>

                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Pickup Location"
                                        placeholderTextColor="#003f5c"
                                        value={pickupLocation}
                                        onChangeText={(text) => setPickupLocation(text)}
                                    />
                                    <GooglePlacesAutocomplete
                                        placeholder='Where From..?'
                                        styles={{
                                            container: {
                                                flex: 0,
                                            },
                                            textInput: {
                                                fontSize: 18,
                                            },
                                        }}
                                        onPress={(data, details = null) => {
                                            dispatch(setOrigin({
                                                location: details.geometry.location,
                                                description: data.description,
                                            }))
                                            dispatch(setDestination(null));
                                        }}

                                        fetchDetails={true}
                                        returnKeyType={"search"}
                                        minLength={2}
                                        enablePoweredByContainer={false}
                                        query={{ key: GOOGLE_MAPS_APIKEY, language: 'en' }}
                                        nearbyPlacesAPI='GooglePlacesSearch'
                                        debounce={400}
                                    />
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Drop-off Location"
                                        placeholderTextColor="#003f5c"
                                        value={dropoffLocation}
                                        onChangeText={(text) => setDropoffLocation(text)}
                                    />
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Pickup Date"
                                        placeholderTextColor="#003f5c"
                                        value={pickupDate}
                                        onChangeText={(text) => setPickupDate(text)}
                                    />
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.inputText}
                                        placeholder="Drop-off Date"
                                        placeholderTextColor="#003f5c"
                                        value={dropoffDate}
                                        onChangeText={(text) => setDropoffDate(text)}
                                    />
                                </View>

                                <Text style={styles.label}>Select Payment Method:</Text>
                                <View style={styles.paymentMethodContainer}>
                                    <TouchableOpacity
                                        style={[
                                            styles.paymentMethodButton,
                                            paymentMethod === 'Cash' && styles.paymentMethodSelected,
                                        ]}
                                        onPress={() => handlePaymentMethodSelect('Cash')}
                                    >
                                        <Text
                                            style={[
                                                styles.paymentMethodButtonText,
                                                paymentMethod === 'Cash' && styles.paymentMethodSelectedText,
                                            ]}
                                        >
                                            Cash
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[
                                            styles.paymentMethodButton,
                                            paymentMethod === 'Card' && styles.paymentMethodSelected,
                                        ]}
                                        onPress={() => handlePaymentMethodSelect('Card')}
                                    >
                                        <Text
                                            style={[
                                                styles.paymentMethodButtonText,
                                                paymentMethod === 'Card' && styles.paymentMethodSelectedText,
                                            ]}
                                        >
                                            Card
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                {paymentMethod === 'Card' && (
                                    <View>
                                        <Text style={styles.label}>Card Details:</Text>

                                        <TextInput
                                            style={styles.input}
                                            placeholder="Name on Card"
                                            value={nameOnCard}
                                            onChangeText={setNameOnCard}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Card Number"
                                            value={cardNumber}
                                            onChangeText={setCardNumber}
                                        />

                                        <TextInput
                                            style={styles.input}
                                            placeholder="Expiration Date (MM/YY)"
                                            value={expirationDate}
                                            onChangeText={setExpirationDate}
                                        />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="CVV"
                                            value={cvv}
                                            onChangeText={setCVV}
                                        />
                                    </View>
                                )}
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View
                style={{ position: "absolute", bottom: SPACING * 2, width: "100%" }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: '#cea1dd',
                        padding: SPACING * 1.5,
                        marginHorizontal: SPACING * 1.6,
                        borderRadius: SPACING * 2,
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            color: COLOR.white,
                            fontSize: SPACING * 2,
                            fontWeight: "bold",
                            marginRight: SPACING * 7,
                            marginLeft: SPACING * 7,
                        }}
                    >
                        Book Now
                    </Text>
                    <Ionicons
                        name="md-arrow-forward-circle-outline"
                        size={SPACING * 3}
                        color={COLOR.white}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 40,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#cea1dd',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: '#003f5c',
    },

    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paymentMethodContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    paymentMethodButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        minWidth: 100,
        alignItems: 'center',
    },
    paymentMethodButtonText: {
        fontSize: 16,
    },
    paymentMethodSelected: {
        backgroundColor: '#cea1dd',
    },
    paymentMethodSelectedText: {
        color: '#fff',
    },
    bookingText: {
        color: 'white',
        fontWeight: 'bold',
    },
    input: {
        width: 190,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    confirmButton: {
        backgroundColor: '#2196F3',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default BookingScreen;
