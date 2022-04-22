import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';


export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Image style={{
                width:100,
                height:100
            }} source={require('../assets/logo.png')} />
            <TouchableOpacity 
            onPress={
                () => navigation.navigate('CreateBill')
            }
            style={styles.button}>
                <Text>Create Bill</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"#fff",
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        height:40,
        width:100,
        backgroundColor:"lightblue",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        elevation:10
    }
})