import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch } from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';




const PostCreation = ({navigation}) => {
    return (
        <View style={styles.container} >
            <View style={styles.Middle} >


                <View style={styles.Header} >
                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    style={{ position: "absolute", left: "10%", width: "6%", height: "50%", alignItems: "center", justifyContent: "center" }}>
                        <Icon name="arrow-back-ios" size={18} color="white" />
                    </TouchableOpacity>
                    <Text style={{ color: "white" }}>Post Creation</Text>
                </View>


                <View style={{ width: "100%", height: "10%", backgroundColor: "lightgrey", alignSelf: "center", flexDirection: "row", marginBottom: "5%", marginTop: "5%" }}>
                    {/* <TouchableOpacity style={{width:"20%",height:"100%",backgroundColor:"purple",justifyContent:"center",alignItems:"center"}}><Text style={{color:"white"}}>Send</Text></TouchableOpacity> */}
                    <View style={{ width: "20%", height: "100%", backgroundColor: "grey", justifyContent: "center", alignItems: "center" }}>
                        <Icon name="account-circle" size={40} color="purple" />

                    </View>
                    <TextInput placeholder="Write something..." style={{ height: "100%", width: "80%", paddingLeft: 15 }} />


                </View>



                <View style={{ width: "100%", height: "10%", backgroundColor: "lightgrey", position: "absolute", bottom: 0, flexDirection: "row" }}>


                    <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>

                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={"purple"}
                            ios_backgroundColor="#3e3e3e"
                        // onValueChange={toggleSwitch}
                        // value={isEnabled}
                        />

                    </View>

                    <View style={{ width: "35%", height: "100%", flexDirection: "row", alignItems: "center" }}>

                        <View style={{ backgroundColor: "purple", height: 20, width: 20, borderRadius: 15, marginHorizontal: 5 }}></View>
                        <View style={{ backgroundColor: "purple", height: 20, width: 20, borderRadius: 15, marginHorizontal: 5 }}></View>
                        <View style={{ backgroundColor: "purple", height: 20, width: 20, borderRadius: 15, marginHorizontal: 5 }}></View>

                    </View>


                    <View style={{ height: "100%", width: "40%", alignItems: "flex-end", justifyContent: "center" }}>
                        <View style={{ backgroundColor: "purple", height: 20, width: 20, borderRadius: 15, marginHorizontal: 5 }}></View>

                    </View>

                </View>













            </View>

        </View>
    )
}

export default PostCreation


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Middle: {
        width: "100%",
        height: "100%",

    },
    Header: {
        width: "100%",
        height: 45,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },


})