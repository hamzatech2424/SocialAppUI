import React from 'react'
import {View,Text,StyleSheet, Touchable, TouchableOpacity} from "react-native"



const Menu = ({navigation}) => {
    return (
        <View style={styles.container} >
            <View style={styles.Main} >
          
            </View>

        </View>
    )
}

export default Menu


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Main:{
        width:"100%",
        height:"100%",
        backgroundColor:"lightgrey",
        justifyContent:"center",
        alignItems:"center"
    },
  

})