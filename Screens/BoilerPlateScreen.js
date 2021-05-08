import React from 'react'
import {View,Text,StyleSheet} from "react-native"



const BoilerPlateScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.Header} ></View>
            <View style={styles.Middle} ></View>
            <View style={styles.Footer} ></View>
        </View>
    )
}

export default BoilerPlateScreen


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Header:{
        width:"100%",
        height:"20%",
        backgroundColor:"yellow"
    },
    Middle:{
        width:"100%",
        height:"60%",
        backgroundColor:"green"
    },
    Footer:{
        width:"100%",
        height:"20%",
        backgroundColor:"red"
    },

})