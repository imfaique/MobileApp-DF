//rating code
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import React, { useState } from 'react'

const RatingScreen = () => {
    const [defaultRating, setdefaultRating] = useState(2)
    const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5])

    const starImgFilled = 'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true'
    const starImgCorner = 'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true'

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setdefaultRating(item)}>
                                <Image style={styles.starImgStyle}
                                    source={
                                        item <= defaultRating
                                            ? { uri: starImgFilled }
                                            : { uri: starImgCorner }
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
    return (
        <SafeAreaView style={StyleSheet.container}>
            <Text style={StyleSheet.textStyle}>Rate us</Text>
            <CustomRatingBar />
            <Text style={styles.textStyle}>
                {defaultRating + '/' + maxRating.length}
            </Text>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() => alert(defaultRating)}>
                <Text>Confirm Rating</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: 'center'

    },
    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        marginTop: 20
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover'

    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        padding: 15,
        backgroundColor: 'green'
    }
});

export default RatingScreen;

//export default function App() {
  //  return(
    //    <View>
      //      <Text style ={{fontSize:28,color:"black",textAlign:"center",
        //marginVertical:20}}>Ratings</Text>
        //<AirbnbRating reviews = {["Poor","Very Bad","Bad","Ok","Good","Very Good","Excellent"]}
        //count={7}></AirbnbRating>
        //</View>
      //  )
//}