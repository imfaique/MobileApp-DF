import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import data from 'react-native-ico-material-design/src/data';
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import tw from 'twrnc';

const NavFavourites = () => {
    const data = [
        {
            id: '123',
            icon: 'home-sharp',
            location: 'Home',
            destination: 'Street Pak',
        },
        {
            id: '456',
            icon: 'briefcase-sharp',
            location: 'Work',
            destination: 'Street Pakistan',
        },

    ];
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
            )}
            renderItem={({ item: { location, destination, icon } }) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Ionicons
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicons"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})