import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Keyboard,
    ToastAndroid,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import React, { useState, createRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
const avatar = require("../../assets/avatar/avatar.jpg");
// import cars from "../data/cars";
import hiaces from '../data/hiaces';
const API = process.env.REACT_NATIVE_APP_API_KEY

import AsyncStorage from "@react-native-async-storage/async-storage";

console.log(process.env.REACT_NATIVE_APP_API_KEY)
const { width } = Dimensions.get("window");

const gradient = [colors["dark-gray"], colors.black];

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

API
const LoginScreen = ({ navigation }) => {
    // const navigation = useNavigation();

    const [Agree, setAgree] = useState(false);
    const [userName, setUserName] = useState('faiqueraza');
    const [password, setPassword] = useState('123');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState();
    const [userNameError, setUserNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const passwordInputRef = createRef();

    const showErrorToastWithGravity = (error) => {
        ToastAndroid.showWithGravity(
            error,
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        );
    };

    const loginAdmin = (details) => {
        AsyncStorage.setItem("user", JSON.stringify(details));
        console.log(details);
        navigation.navigate('Company', {
            // pass: password
        });

    };

    const handleSubmitPress = () => {
        setErrortext('');
        if (!userName) {
            setUserNameError("Usernames is required")
            // alert('Please fill Email');
            return;
        }
        if (!password) {
            setPasswordError('Password is required');
            // alert('Please fill Password');
            return;
        }
        // setLoading(true);

        let url = `${API}user/login`
        console.log(url)
        fetch(url, {
            method: 'POST',
            headers: {
                //Header Defination
                'Content-Type':
                    'application/json',
            },
            // redirect: 'follow',
            body: JSON.stringify({ username: userName, password: password })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //Hide Loader
                // setLoading(false);                
                if (responseJson.role === 'user') {
                    loginAdmin(responseJson);

                    Alert.alert("Welcomne", responseJson.name)
                }

                console.log(responseJson);
                showErrorToastWithGravity(responseJson.message)
                // If server response message same as Data Matched
                // if (responseJson.role === 'user') {
                //     if (!(responseJson.code < 200 || responseJson.code >= 400)) {
                //         console.log('n')


                //     }
                //     else {

                //         // AlertMessage(responseJson.msg)
                //         // Alert.alert("Oops!", responseJson.err)

                //     }
                // }
            })
            .catch((error) => {
                //Hide Loader
                setErrortext(error)
                setLoading(false);
                // showErrorToastWithGravityerror(error)
                // console.error(error);
            });
    };


    // const submit = () => {
    //     // return Alert.alert(userName, password);
    //     if (id === '1') {
    //         // Alert.alert(`Thank-You ${userName}`);
    //         navigation.navigate('Car');
    //     } else {
    //         navigation.navigate('Hiace');
    //     }

    // };

    return (

        <View style={styles.mainBody}>

            {/* <Loader loading={loading} /> */}
            <ScrollView

                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    flex: 1,
                    alignContent: 'center',

                }}>
                <View>
                    <KeyboardAvoidingView enabled>
                        <View>
                            {/* <Text>Hello</Text> */}
                            <Image
                                source={require('../../assets/logos/logo3.gif')}
                                style={{
                                    width: WIDTH / 1.104,
                                    height: HEIGHT / 2.5,
                                    resizeMode: 'stretch',
                                    marginBottom: 30,
                                    borderBottomLeftRadius: HEIGHT / 40,
                                    borderBottomRightRadius: HEIGHT / 40,
                                    overflow: 'hidden'
                                }}
                            />
                        </View>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(UserName) => {
                                    setUserNameError("")
                                    setUserName(UserName)
                                }}
                                placeholder="Username" //dummy@abc.com
                                placeholderTextColor="#2e1437"
                                autoCapitalize="none"
                                keyboardType="default"
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    passwordInputRef.current &&
                                    passwordInputRef.current.focus()
                                }
                                underlineColorAndroid="#f000"
                                blurOnSubmit={false}
                            />
                        </View>
                        {userNameError !== '' ? (
                            <Text style={styles.errorTextStyle}>{userNameError}</Text>
                        ) : null}
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(Password) => {
                                    setPasswordError("")
                                    setPassword(Password)
                                }}
                                placeholder="Password" //12345
                                placeholderTextColor="#2e1437"
                                keyboardType="default"
                                ref={passwordInputRef}
                                onSubmitEditing={Keyboard.dismiss}
                                blurOnSubmit={false}
                                secureTextEntry={true}
                                underlineColorAndroid="#f000"
                                returnKeyType="next"
                            />
                        </View>
                        {passwordError != '' ? (
                            <Text style={styles.errorTextStyle}>
                                {passwordError}
                            </Text>
                        ) : null}
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            activeOpacity={0.5}
                            onPress={handleSubmitPress}>
                            <Text style={styles.buttonTextStyle}>LOGIN</Text>
                        </TouchableOpacity>
                        {/* <View>
                            <Text
                                style={styles.forgotPasswordStyle}
                                onPress={() => navigation.navigate('ForgetPass')}>
                                Forgot Password?
                            </Text>
                        </View>
                        */}
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text
                                style={styles.textStyle}>
                                Create an Account ?
                            </Text >
                            <Text
                                style={styles.signupTextStyle}
                                onPress={() => navigation.navigate('SignUp')}>
                                SignUp
                            </Text>
                        </View>

                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </View>
        // <SafeAreaView>
        //     <ScrollView showsVerticalScrollIndicator={false}>
        //         <View style={styles.mainContainter}>

        //             {/* <Text style={styles.mainHeader}>Login Form</Text> */}
        //             {/* <Text style={styles.description}>Enter Email & Password to sign-in</Text> */}
        //             <View style={styles.imageView}>
        //                 <Image
        //                     source={require('../../assets/logos/logo3.gif')}
        //                     style={{
        //                         width: WIDTH / 1.5,
        //                         height: HEIGHT / 2.7,
        //                         resizeMode: 'stretch',
        //                         marginBottom: 30,
        //                         borderBottomLeftRadius: HEIGHT / 40,
        //                         borderBottomRightRadius: HEIGHT / 40,
        //                         overflow: 'hidden'

        //                     }}
        //                 />
        //             </View>
        //             <View style={styles.txtBackground}>
        //                 <View style={styles.inputContainer}>

        //                     <TextInput style={styles.inputStyle}
        //                         autoCapitalize="none"
        //                         autoCorrect={false}
        //                         placeholder="Username" //dummy@abc.com
        //                         placeholderTextColor="white"
        //                         keyboardType="default"
        //                         onChangeText={(UserName) => {
        //                             setUserNameError("")
        //                             setUserName(UserName)
        //                         }}
        //                     />
        //                 </View>

        //                 <View style={styles.inputContainer}>

        //                     <TextInput style={styles.inputStyle}
        //                         autoCapitalize="none"
        //                         autoCorrect={false}
        //                         secureTextEntry={true}
        //                         placeholder="Password" //dummy@abc.com
        //                         placeholderTextColor="white"
        //                         keyboardType="default"
        //                         onChangeText={(Password) => {
        //                             setPasswordError("")
        //                             setPassword(Password)
        //                         }}
        //                     />
        //                 </View>
        //                 {passwordError != '' ? (
        //                     <Text style={styles.errorTextStyle}>
        //                         {passwordError}
        //                     </Text>
        //                 ) : null}


        //                 <TouchableOpacity style={[
        //                     styles.buttonStyle,
        //                     {
        //                         backgroundColor: "white",
        //                     },
        //                 ]}

        //                     onPress={handleSubmitPress}>
        //                     <Text style={styles.buttonText}>
        //                         Login
        //                     </Text>
        //                 </TouchableOpacity>

        //                 <TouchableOpacity style={[
        //                     styles.buttonStyle,
        //                     {
        //                         backgroundColor: "white",
        //                     },
        //                 ]}

        //                     onPress={() => navigation.navigate('SignUp')}>
        //                     <Text style={styles.buttonText}>
        //                         Sign-Up
        //                     </Text>
        //                 </TouchableOpacity>


        //             </View>
        //         </View>
        //     </ScrollView>
        // </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({

    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        alignContent: 'center',
    },

    SectionStyle: {
        flexDirection: 'row',
        height: 50,
        marginBottom: 10,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#cea1dd'
    },

    inputStyle: {
        flex: 1,
        color: 'black',
        paddingLeft: 30,
        paddingRight: 30,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#2e1437',
        fontSize: 16,
    },

    buttonStyle: {
        backgroundColor: '#2e1437',
        borderWidth: 0,
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 5,
    },
    buttonTextStyle: {
        color: 'white',
        paddingVertical: 12,
        fontSize: 20,
        fontWeight: 'bold',
    },

    textStyle: {
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },

    forgotPasswordStyle: {
        textDecorationLine: 'underline',
        color: '#cea1dd',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
    signupTextStyle: {
        textDecorationLine: 'underline',
        color: '#cea1dd',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
    errorTextStyle: {
        color: '#2e1437',
        textAlign: 'center',
        fontSize: 14,
    },

    // mainContainter: {
    //     height: "100%",
    //     paddingHorizontal: 30,
    //     paddingTop: 30,
    //     // backgroundColor: "#fff",

    // },
    // mainHeader: {
    //     fontSize: 25,
    //     color: "#ffff",
    //     fontWeight: "500",
    //     paddingTop: 20,
    //     paddingBottom: 15,
    //     textTransform: "capitalize",
    //     fontFamily: "bold",
    //     textAlign: 'center',
    // },
    // description: {
    //     fontSize: 20,
    //     color: "#ffff",
    //     paddingBottom: 20,
    //     lineHeight: 25,
    //     fontFamily: "regular",
    // },
    // inputContainer: {
    //     marginTop: 20,

    // },
    // labels: {
    //     fontSize: 18,
    //     color: "#ffff",
    //     marginTop: 10,
    //     marginBottom: 5,
    //     lineHeight: 25,
    //     fontFamily: "regular",

    // },
    // inputStyle: {
    //     borderWidth: 1,
    //     borderColor: "#ffff",
    //     paddingHorizontal: 15,
    //     paddingVertical: 7,
    //     borderRadius: 9,
    //     fontFamily: "regular",
    //     fontSize: 18,
    //     color: 'white',

    // },
    // multilineStyle: {

    // },
    // buttonStyle: {
    //     alignItems: "center",
    //     justifyContent: "center",
    //     marginVertical: 10,
    //     marginHorizontal: 6.8,
    //     borderRadius: 9,
    //     backgroundColor: "black",
    //     width: 310,
    //     height: 40,

    // },
    // buttonText: {
    //     fontSize: 20,
    //     // fontWeight: "bold",
    //     letterSpacing: 0.25,
    //     color: "black",


    // },
    // wrapperText: {
    //     textAlign: "center",
    //     position: "absolute",
    //     marginLeft: 35,
    //     marginTop: 5,
    // },
    // imageView: {
    //     alignItems: "center",
    // },
    // txtBackground: {
    //     // backgroundColor: 'orange',
    //     color: 'white',
    // },


});
