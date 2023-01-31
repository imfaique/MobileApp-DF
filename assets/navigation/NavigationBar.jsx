import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-ico-material-design';

var iconHeight = 26;
var iconWidth = 26;

export default class NavigationBar extends React.Component {
    state = {
        screenText: 'press a buttton'
    }
    changeText = (text) => {
        console.log(text + 'have been pressed')
        this.setState({
            screenText: text
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>navigationBar</Text>
                <View style={styles.NavContainer}>
                    <View style={styles.NavBar}>
                        <Pressable onPress={() => this.changeText('Favourites')} style={styles.IconBehave}
                            android_ripple={{ borderless: true, radius: 50 }}
                        >
                            <Icon name='back-arrow' height={iconHeight} width={iconWidth} color='black' />

                        </Pressable>

                        <Pressable onPress={() => this.changeText('Favourites')} style={styles.IconBehave}
                            android_ripple={{ borderless: true, radius: 50 }}
                        >
                            <Icon name='round-account-button-with-user-inside' height={iconHeight} width={iconWidth} color='black' />

                        </Pressable>

                        <Pressable onPress={() => this.changeText('Favourites')} style={styles.IconBehave}
                            android_ripple={{ borderless: true, radius: 50 }}
                        >
                            <Icon name='home-button' height={iconHeight} width={iconWidth} color='black' />

                        </Pressable>

                        <Pressable onPress={() => this.changeText('Favourites')} style={styles.IconBehave}
                            android_ripple={{ borderless: true, radius: 50 }}
                        >
                            <Icon name='forward-arrow' height={iconHeight} width={iconWidth} color='black' />

                        </Pressable>
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 20,
    },
    NavBar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '90%',
        justifyContent: 'space-evenly',
        borderRadius: 30,
    },
    IconBehave: {
        padding: 14
    }
});