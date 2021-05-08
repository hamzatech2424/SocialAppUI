import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"



const ScreenWithButtons = ({navigation}) => {
    return (
        <View style={styles.container} >
         
            <View style={styles.Middle} >

            <View style={styles.nextBtnView}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Choose")}
                    style={styles.nextbtnStyle}>
                        <Text style={{color:"white"}}>ChooseProfession</Text>
                    </TouchableOpacity>
            </View>


            <View style={styles.nextBtnView}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Log")}
                    style={styles.nextbtnStyle}>
                        <Text style={{color:"white"}}>Login</Text>
                    </TouchableOpacity>
            </View>


            <View style={styles.nextBtnView}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Sign")}
                    style={styles.nextbtnStyle}>
                        <Text style={{color:"white"}}>SignUp</Text>
                    </TouchableOpacity>
            </View>


            <View style={styles.nextBtnView}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Pro")}
                    style={styles.nextbtnStyle}>
                        <Text style={{color:"white"}}>Add a Profile Photo</Text>
                    </TouchableOpacity>
            </View>


            <View style={styles.nextBtnView}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Job")}
                    style={styles.nextbtnStyle}>
                        <Text style={{color:"white"}}>JobSearch</Text>
                    </TouchableOpacity>
            </View>


            </View>
            
        </View>
    )
}

export default ScreenWithButtons


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
        height:"100%",
        // backgroundColor:"green",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    nextBtnView: {
        width: "80%",
        height: "10%",
        marginBottom:5,
        // backgroundColor: "blue"
    },
    nextbtnStyle:{
        width:"100%",
        backgroundColor:"purple",
        height:"100%",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
    },


})