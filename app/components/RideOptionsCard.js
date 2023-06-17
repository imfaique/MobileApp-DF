import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import data from 'react-native-ico-material-design/src/data';
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const RideOptionsCard = () => {
    const data = [
        {
            id: "Uber-X-123",
            title: "UberX",
            multiplier: "1",
            image: "https://i.postimg.cc/pX4vDLNm/toyota.png",
        },
        {
            id: "Uber-XL-456",
            title: "UberXL",
            multiplier: "1.2",
            image: "https://i.postimg.cc/B6Sfq8FV/Hiace5.png",
        },
        {
            id: "Uber-XUL-789",
            title: "UberXUL",
            multiplier: "1.75",
            image: "https://i.postimg.cc/pX4vDLNm/toyota.png",
        },
    ]
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('NavigateCard')}
                    style={tw`absolute top-4.5 left-5 p-3 rounded-full`}
                >
                    <Ionicons name='arrow-back' type='fontawesome' />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a ride</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image }, item }) => (
                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={tw`flex-row justify-between items-center px-3${id === selected?.id && "bg-gray-200"}`}
                    >
                        <Image
                            style={{
                                width: 90,
                                height: 80,
                                resizeMode: 'contain'
                            }}
                            source={{
                                uri: item.image
                            }}
                        />
                        <View style={tw`-ml-3 `}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>Travel Time...</Text>
                        </View>
                        <Text style={tw`text-xl`}>Rs.7,000</Text>
                    </TouchableOpacity>
                )}
            />

            <View>
                <TouchableOpacity style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})