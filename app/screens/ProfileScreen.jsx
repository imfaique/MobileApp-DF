import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import SPACING from "../config/SPACING";
import { useNavigation } from '@react-navigation/native';
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";

const logo = require("../../assets/logos/logo2.png");
import series from "../data/series";
import series1 from "../data/series1";
import series2 from "../data/series2";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = () => {

    const navigation = useNavigation();
    const submit = () => {
        // return Alert.alert(userName, password);
        // if (id === '1') {
        //   // Alert.alert(`Thank-You ${userName}`);
        //   navigation.navigate('Car');
        // } else {
        //   navigation.navigate('Hiace');
        // }

    };

    const [booking, setBooking] = useState({
        id: 1,
        passengerName: 'alina',
        pickupLocation: 'north nazimabad',
        dropoffLocation: 'hawsbay',
        pickupTime: '10:00 AM',
    });

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        paddingVertical: SPACING * 4,
                    }}
                >
                    <Image
                        style={{
                            height: SPACING * 7,
                            width: SPACING * 20,
                        }}
                        source={logo}
                    />
                    <Text
                        style={{
                            color: colors.white,
                            fontSize: SPACING * 3,
                            fontWeight: "150",
                        }}
                    >
                        Profile
                    </Text>
                    {/* <Text
              style={{
                color: colors.light,
                marginTop: SPACING / 2,
              }}
            >
              5 Searies
            </Text> */}
                </View>



                {series2.map((item) => (
                    <LinearGradient
                        key={item.id}
                        colors={[colors["dark-gray"], colors.black]}
                        style={{
                            height: 260,
                            borderRadius: SPACING * 2,
                            padding: SPACING * -2,
                            marginBottom: SPACING * 16,
                        }}
                    >

                        <View style={styles.container}>
                            <Text style={styles.label}>Name:</Text>
                            <Text style={styles.info}>Moosa</Text>
                            <Text style={styles.label}>Email:</Text>
                            <Text style={styles.info}>moosa@gmail.com</Text>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Company') }}
                                style={styles.button}>
                                <Text style={styles.buttonText}>Go to Home Page</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                ))}

            </ScrollView>
            <TouchableOpacity>

                {/* <LinearGradient
              style={{
                padding: SPACING * 1.6,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: SPACING * 2,
              }}
              colors={[colors["dark-gray"], colors.dark]}
            >
              <Text
                style={{
                  color: colors.light,
                  fontWeight: "800",
                  fontSize: SPACING * 2,
                }}
              >
                View All
              </Text>
            </LinearGradient> */}

            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'white',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'white',
    },
    info: {
        fontSize: 16,
        marginBottom: 16,
        color: 'white',
    },
    button: {
        backgroundColor: '#C29DCB',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
