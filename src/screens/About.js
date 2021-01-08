import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function About(props) {
    const { navigation } = props;
    return (
        <View>
            <Text>about</Text>
            
            <Button title="ir a Contact" onPress={ () => navigation.navigate('contact')} />
        </View>
    )
}

const styles = StyleSheet.create({})
