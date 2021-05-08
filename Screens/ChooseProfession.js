import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Picker } from '@react-native-picker/picker';



const ChooseProfession = ({navigation}) => {

    const [selectedLanguage, setSelectedLanguage] = useState();


    return (
        <View style={styles.container} >

            <View style={styles.Header} ></View>


            <View style={styles.Middle} >

                <View style={styles.chooseTxt} >
                    <Text style={{ color: "purple" }} >Choose Your Profession</Text>
                </View>

                <View style={styles.arrowIcon} >
                    <Icon name="keyboard-arrow-down" size={120} color="purple"  />
                </View>

                <View style={styles.dropdownView} >
                    <View style={styles.dropdownWrapper}>
                        <Picker
                            style={{ width: "100%", color: "white" }}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item label="Computer Science" value="Computer Science" />
                            <Picker.Item label="Medical" value="Medical" />
                            <Picker.Item label="Music" value="Music" />
                        </Picker>
                    </View>
                </View>


                <View style={styles.nextBtnView}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    style={styles.nextbtnStyle}>
                        <Text style={{color:"white"}}>Next</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginBtnView}>
                <Text style={{ color: "purple",paddingTop:"15%",paddingBottom:"2%" }} >Already have an Account?</Text>
                <TouchableOpacity 
                activeOpacity={0.8}
                style={styles.loginBtnStyle}>
                        <Text style={{color:"white"}}>Login</Text>
                    </TouchableOpacity>
                </View>



            </View>


            <View style={styles.Footer} ></View>
        </View>
    )
}

export default ChooseProfession


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Header: {
        width: "100%",
        height: "10%",
        // backgroundColor: "yellow"
    },
    Middle: {
        width: "100%",
        height: "80%",
        // backgroundColor: "green"
    },
    chooseTxt: {
        width: "100%",
        height: "10%",
        alignItems: "center",
        // backgroundColor:"red",
        paddingTop:"8%"
    },
    arrowIcon: {
        width: "100%",
        height: "20%",
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    dropdownView: {
        width: "100%",
        height: "20%",
        // backgroundColor: "yellow",
        alignItems: "center"
    },
    dropdownWrapper: {
        width: "80%",
        backgroundColor: "#846FAA",
        marginTop: "5%"
    },
    nextBtnView: {
        width: "100%",
        height: "25%",
        // backgroundColor: "blue",
        alignItems:"center",
    },
    loginBtnView: {
        width: "100%",
        height: "25%",
        // backgroundColor: "grey",
        alignItems:"center",
    },
    nextbtnStyle:{
        width:"40%",
        backgroundColor:"purple",
        height:"35%",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
    },
    loginBtnStyle:{
        width:"40%",
        backgroundColor:"purple",
        height:"35%",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
    },
    Footer: {
        width: "100%",
        height: "10%",
        // backgroundColor: "red"
    },

})