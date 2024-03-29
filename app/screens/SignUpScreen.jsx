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
    ToastAndroid,


} from "react-native";
import React, { useState, createRef, useSyncExternalStore, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
const avatar = require("../../assets/avatar/avatar.jpg");
// import cars from "../data/cars";
import hiaces from '../data/hiaces';
import { validateEmail, validateContactNo } from '../../shared/utils'
import { Positions } from "react-native-calendars/src/expandableCalendar";

const API = process.env.REACT_NATIVE_APP_API_KEY
console.log(API)

const { width } = Dimensions.get("window");

const gradient = [colors["dark-gray"], colors.black];

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

// export default function EmailVerification(){
//        let {userName} = useParams(); 
//        let {token} = useParams(); 
//        const [isValidToken,setIsValidToken]=useState(false);
//        const classes= useStyles();

//        function verifyEmailToken(userName,emailtoken){
//         console.log('testing Function')
//         const usernameAndToken={
//             userName: userName,
//             emailtoken: emailtoken,
//         }
//         axios.post('http//localhost:5000/verifyEmailToken',usernameAndToken)
//         .then(response=>{
//             const responseStatus = response.data.status;
//             if (responseStatus== 'okey') {
//                 setIsValidToken(true);
//             }
//         })
//        }
//        useEffect(()=>{
//         verifyEmailToken(userName,token)
//        })
// }

const SignUpScreen = ({ navigation }) => {
    console.log(API)



    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
            "Succesfully Registered!",
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        );
    };


    const [Agree, setAgree] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [emailError, setEmailError] = useState('')
    const [contactError, setContactError] = useState('')
    const [enableShift, setenableShift] = useState(false);

    const [
        isRegistraionSuccess,
        setIsRegistraionSuccess
    ] = useState(false);

    const handleChangeEmail = (e) => {
        setEmail(e)

    }

    const handleChangeContact = (e) => {
        setContactNo(e)

    }

    const onBlurEmail = () => {
        // console.log(email)
        if (!validateEmail(email)) {
            setEmailError("Email is not valid");
            setEmail('')
        }
        else {
            setEmailError("")
        }
    }

    const onBlurContact = () => {
        if (!validateContactNo(contactNo)) {
            setContactError("Contact Number is not valid");
            setContactNo('')
        }
        else {
            setContactError("")
        }
    }

    const lastnameInputRef = createRef();
    const emailInputRef = createRef();
    const contactInputRef = createRef();
    const usernameInputRef = createRef();
    const passwordInputRef = createRef();
    const confirmpasswordInputRef = createRef();

    const handleSubmitButton = () => {
        setErrortext('');
        if (!firstName) {
            alert('Please fill First Name');
            return;
        }
        if (!lastName) {
            alert('Please fill Last Name');
            return;
        }
        if (!email) {
            alert('Please fill Email');
            return;
        }
        if (!contactNo) {
            alert('Please fill Contact Number');
            return;
        }

        if (!userName) {
            alert('Please fill UserName');
            return;
        }

        if (!password) {
            alert('Please fill Password');
            return;
        }

        if (!confirmPassword) {
            alert('Password do not match');
            return;
        }
        if (password !== confirmPassword) {

        }
        //Show Loader
        setLoading(true);
        const data = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            contact: contactNo,
            username: userName,
            password: password,
            confirmpassword: confirmPassword,
        };

        let url = `${API}user/register`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: 'application/json',
                //Header Defination
                'Content-Type':
                    'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //Hide Loader
                // setLoading(false);
                console.log(responseJson);
                // If server response message same as Data Matched
                if (!(responseJson.code < 200 || responseJson.code >= 400)) {
                    navigation.navigate('Login')
                    showToastWithGravity()
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setContactNo('')
                    setUserName('')
                    setPassword('')
                    setConfirmPassword('')


                } else {
                    setErrortext(responseJson.msg);
                }
            })
            .catch((error) => {
                //Hide Loader
                // setLoading(false);
                console.error(error);
            });
    };



    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff', borderTopLeftRadius: 60, }}>
            {/* <Loader loading={loading} /> */}
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    alignContent: 'center',
                }}>
                <View style={{ alignItems: 'center' }}>
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
                <KeyboardAvoidingView enabled>
                    <Text style={{ color: '#2e1437', fontSize: 16, marginLeft: 40 }}>First Name:</Text>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            value={firstName}
                            style={styles.inputStyle}
                            onChangeText={(FirstName) => setFirstName(FirstName)}
                            underlineColorAndroid="#f000"
                            placeholderTextColor="black"
                            autoCapitalize="sentences"
                            keyboardType="default"
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                lastnameInputRef.current && lastnameInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                    </View>
                    <Text style={{ color: '#2e1437', fontSize: 16, marginLeft: 40 }}>Last Name:</Text>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            value={lastName}
                            style={styles.inputStyle}
                            onChangeText={(LastName) => setLastName(LastName)}
                            underlineColorAndroid="#f000"
                            placeholderTextColor="black"
                            autoCapitalize="sentences"
                            ref={lastnameInputRef}
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                emailInputRef.current && emailInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                    </View>

                    <Text style={{ color: '#2e1437', fontSize: 16, marginLeft: 40 }}>Email:</Text>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            value={email}
                            style={styles.inputStyle}
                            onChangeText={handleChangeEmail}
                            underlineColorAndroid="#f000"
                            placeholderTextColor="black"
                            keyboardType="email-address"
                            ref={emailInputRef}
                            returnKeyType="next"
                            onBlur={onBlurEmail}
                            onSubmitEditing={() =>
                                contactInputRef.current &&
                                contactInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                    </View>
                    {
                        emailError ? <Text style={{ color: 'blue', marginTop: -(HEIGHT / 50), marginLeft: WIDTH / 9, marginBottom: HEIGHT / 50 }}>{emailError}</Text> : null
                    }

                    <Text style={{ color: '#2e1437', fontSize: 16, marginLeft: 40 }}>Contact No:</Text>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            value={contactNo}
                            style={styles.inputStyle}
                            onChangeText={handleChangeContact}
                            underlineColorAndroid="#f000"
                            placeholderTextColor="black"
                            keyboardType="number-pad"
                            ref={contactInputRef}
                            onBlur={onBlurContact}
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                usernameInputRef.current &&
                                usernameInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                    </View>
                    {
                        contactError ? <Text style={{ color: 'blue', marginTop: -(HEIGHT / 50), marginLeft: WIDTH / 9, marginBottom: HEIGHT / 50 }}>{contactError}</Text> : null
                    }

                    <Text style={{ color: '#2e1437', fontSize: 16, marginLeft: 40 }}>Username:</Text>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            value={userName}
                            style={styles.inputStyle}
                            onChangeText={(UserName) => setUserName(UserName)}
                            underlineColorAndroid="#f000"
                            placeholderTextColor="black"
                            keyboardType="text"
                            ref={usernameInputRef}
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                passwordInputRef.current &&
                                passwordInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                    </View>

                    <Text style={{ color: '#2e1437', fontSize: 16, marginLeft: 40 }}>Password:</Text>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            value={password}
                            style={styles.inputStyle}
                            onChangeText={(Password) =>
                                setPassword(Password)
                            }
                            underlineColorAndroid="#f000"
                            placeholderTextColor="black"
                            ref={passwordInputRef}
                            returnKeyType="next"
                            secureTextEntry={true}
                            onSubmitEditing={() =>
                                confirmpasswordInputRef.current &&
                                confirmpasswordInputRef.current.focus()
                            }
                            blurOnSubmit={false}
                        />
                    </View>

                    <Text style={{ color: '#2e1437', fontSize: 16, marginLeft: 40 }}>Confirm Password:</Text>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            value={confirmPassword}
                            style={styles.inputStyle}
                            onChangeText={(ConfirmPassword) => setConfirmPassword(ConfirmPassword)}
                            underlineColorAndroid="#f000"
                            placeholderTextColor="black"
                            keyboardType="text"
                            secureTextEntry={true}
                            ref={confirmpasswordInputRef}
                            blurOnSubmit={false}
                        />
                    </View>

                    {errortext != '' ? (
                        <Text style={styles.errorTextStyle}>
                            {errortext}
                        </Text>
                    ) : null}
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={handleSubmitButton}>
                        <Text style={styles.buttonTextStyle}>REGISTER</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -5, marginBottom: 10 }}>
                        <Text
                            style={styles.textStyle}>
                            Already a User ?
                        </Text >
                        <Text
                            style={styles.loginTextStyle}
                            onPress={() => navigation.navigate('Login')}>
                            Login
                        </Text>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    );
};
//         <SafeAreaView>
//             <ScrollView showsVerticalScrollIndicator={false}
//                 keyboardShouldPersistTaps="handled"
//                 contentContainerStyle={{
//                     alignContent: 'center',
//                 }}
//             >
//                 <KeyboardAvoidingView behavior='position' style={styles.mainContainter} enabled={enableShift}>
//                     <View >
//                         {/* <Text style={styles.mainHeader}>Registeration</Text> */}
//                         {/* <Text style={styles.description}>Enter Details Here</Text> */}

//                         <View style={styles.inputContainer}>
//                             <Image
//                                 source={require('../../assets/logos/logo3.gif')}
//                                 style={{
//                                     width: WIDTH / 1.5,
//                                     height: HEIGHT / 3,
//                                     resizeMode: 'stretch',
//                                     marginBottom: -10,
//                                     borderBottomLeftRadius: HEIGHT / 40,
//                                     borderBottomRightRadius: HEIGHT / 40,
//                                     overflow: 'hidden'

//                                 }}
//                             />


//                         </View>
//                         <View style={styles.inputContainer}>

//                             <TextInput style={styles.inputStyle}
//                                 autoCapitalize="none"
//                                 autoCorrect={false}
//                                 // secureTextEntry={true}
//                                 value={firstName}
//                                 onFocus={() => setenableShift(false)}
//                                 placeholder="First Name" //dummy@abc.com
//                                 placeholderTextColor="white"
//                                 keyboardType="default"
//                                 onChangeText={(FirstName) => setFirstName(FirstName)}
//                                 returnKeyType="next"
//                                 onSubmitEditing={() =>
//                                     lastnameInputRef.current && lastnameInputRef.current.focus()
//                                 }
//                                 blurOnSubmit={false}
//                             />
//                         </View>
//                         <View style={styles.inputContainer}>

//                             <TextInput style={styles.inputStyle}
//                                 autoCapitalize="none"
//                                 autoCorrect={false}
//                                 // secureTextEntry={true}
//                                 value={lastName}
//                                 onFocus={() => setenableShift(false)}
//                                 placeholder="Last Name" //dummy@abc.com
//                                 placeholderTextColor="white"
//                                 keyboardType="default"
//                                 onChangeText={(LastName) => setLastName(LastName)}
//                                 returnKeyType="next"
//                                 onSubmitEditing={() =>
//                                     emailInputRef.current && emailInputRef.current.focus()
//                                 }
//                                 blurOnSubmit={false}

//                             />
//                         </View>
//                         <View style={styles.inputContainer}>

//                             <TextInput style={styles.inputStyle}
//                                 autoCapitalize="none"
//                                 autoCorrect={false}
//                                 // secureTextEntry={true}
//                                 value={email}
//                                 placeholder="Email" //dummy@abc.com
//                                 onFocus={() => setenableShift(false)}
//                                 placeholderTextColor="white"
//                                 keyboardType="default"
//                                 onChangeText={handleChangeEmail}
//                                 ref={emailInputRef}
//                                 returnKeyType="next"
//                                 onBlur={onBlurEmail}
//                                 onSubmitEditing={() =>
//                                     contactInputRef.current &&
//                                     contactInputRef.current.focus()
//                                 }
//                                 blurOnSubmit={false}
//                             // onBlur={onBlurEmail}
//                             />
//                         </View>
//                         {
//                             emailError ? <Text style={{ color: 'blue', marginTop: -(HEIGHT / 50), marginLeft: WIDTH / 9, marginBottom: HEIGHT / 50 }}>{emailError}</Text> : null
//                         }
//                         <View style={styles.inputContainer}>

//                             <TextInput style={styles.inputStyle}
//                                 autoCapitalize="none"
//                                 autoCorrect={false}
//                                 // secureTextEntry={true}
//                                 value={contactNo}
//                                 onFocus={() => setenableShift(true)}
//                                 placeholder="Phone No." //dummy@abc.com
//                                 placeholderTextColor="white"
//                                 keyboardType="number-pad"
//                                 onChangeText={handleChangeContact}
//                                 ref={contactInputRef}
//                                 onBlur={onBlurContact}
//                                 returnKeyType="next"
//                                 onSubmitEditing={() =>
//                                     usernameInputRef.current &&
//                                     usernameInputRef.current.focus()
//                                 }
//                                 blurOnSubmit={false}
//                             />
//                         </View>
//                         {
//                             contactError ? <Text style={{ color: 'blue', marginTop: -(HEIGHT / 50), marginLeft: WIDTH / 9, marginBottom: HEIGHT / 50 }}>{contactError}</Text> : null
//                         }
//                         <View style={styles.inputContainer}>
//                             <TextInput style={styles.inputStyle}
//                                 autoCapitalize="none"
//                                 autoCorrect={false}
//                                 value={userName}
//                                 onFocus={() => setenableShift(true)}
//                                 onChangeText={(UserName) => setUserName(UserName)}
//                                 placeholder="Username" //dummy@abc.com
//                                 placeholderTextColor="white"

//                             />
//                         </View>
//                         <View style={styles.inputContainer}>

//                             <TextInput style={styles.inputStyle}
//                                 autoCapitalize="none"
//                                 autoCorrect={false}
//                                 secureTextEntry={true}
//                                 value={password}
//                                 onFocus={() => setenableShift(true)}
//                                 placeholder="Password" //dummy@abc.com
//                                 placeholderTextColor="white"
//                                 onChangeText={(Password) =>
//                                     setPassword(Password)
//                                 }
//                             />
//                         </View>

//                         <View style={styles.inputContainer}>

//                             <TextInput style={styles.inputStyle}
//                                 autoCapitalize="none"
//                                 autoCorrect={false}
//                                 secureTextEntry={true}
//                                 value={confirmPassword}
//                                 onFocus={() => setenableShift(true)}
//                                 placeholder="Confirm Password" //dummy@abc.com
//                                 placeholderTextColor="white"
//                                 onChangeText={(ConfirmPassword) => setConfirmPassword(ConfirmPassword)}
//                             />
//                         </View>
//                         {/* <View style={styles.wrapper}>

//                     <CheckBox
//                         value={Agree}
//                         onValueChange={() => setAgree(!Agree)}
//                         color={Agree ? "#4630EB" : undefined}

//                     />

//                     <Text style={styles.wrapperText}>
//                         Please check this box to signUp
//                     </Text>

//                 </View> */}

//                         <TouchableOpacity style={[
//                             styles.buttonStyle,
//                             {
//                                 backgroundColor: "white",
//                             },
//                         ]}
//                             // disabled={!Agree}
//                             onPress={handleSubmitButton}>
//                             <Text style={styles.buttonText}>
//                                 SignUp

//                             </Text>
//                         </TouchableOpacity>



//                     </View>
//                 </KeyboardAvoidingView>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

export default SignUpScreen;


const styles = StyleSheet.create({
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
    //     color: "#7d7d7d",
    //     paddingBottom: 20,
    //     lineHeight: 25,
    //     fontFamily: "regular",
    // },
    // inputContainer: {
    //     marginTop: 20,
    // },
    // labels: {
    //     fontSize: 18,
    //     color: "#7d7d7d",
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
    //     marginVertical: 20,
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
    SectionStyle: {
        flexDirection: 'row',
        height: 50,
        marginBottom: 15,
        marginLeft: 35,
        marginRight: 35,
        backgroundColor: '#cea1dd',
        borderRadius: 10
    },
    buttonStyle: {
        backgroundColor: '#2e1437',
        borderWidth: 0,
        borderColor: '#2e1437',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 20,
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
        color: '#ffffff',
        paddingVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    inputStyle: {
        flex: 1,
        color: '#2e1437',
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 10,
        borderColor: '#2e1437',
        borderWidth: 1,
        fontSize: 16
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
    successTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
    },

    textStyle: {
        color: '#cea1dd',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },

    loginTextStyle: {
        textDecorationLine: 'underline',
        color: '#2e1437',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center',
        padding: 10,
        marginLeft: -5,
        marginTop: -3
    },
});