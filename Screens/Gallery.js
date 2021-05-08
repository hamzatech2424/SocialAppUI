import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon1 from 'react-native-vector-icons/dist/MaterialIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';


const Gallery = ({navigation}) => {
    return (
        <View style={styles.container} >
            <View style={styles.Main} >

                <View style={styles.Header} >
                    <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>navigation.goBack()}
                    style={{ position: "absolute", left: "10%", width: "6%", height: "50%", alignItems: "center", justifyContent: "center" }}>
                        <Icon name="arrow-back-ios" size={18} color="white" />
                    </TouchableOpacity>
                    <Text style={{ color: "white" }}>Gallery</Text>
                </View>


                <View style={{ height: "10%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={{ width: "30%", height: "55%", backgroundColor: "#1673EA", justifyContent: "center", alignItems: "center", borderRadius: 10, flexDirection: "row" }}>
                        <Text style={{ color: "white", paddingRight: "2%" }}>Tab One</Text>
                        <Icon1 name="keyboard-arrow-down" size={16} color="white" style={{ marginTop: 5 }} />
                    </TouchableOpacity>
                </View>


                <View style={{ width: "85%", height: "75%", alignSelf: "center", marginTop: 10 }}>

                    <View style={{ width: "100%", height: "25%", backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name="image-outline" size={65} color="grey" />
                    </View>




                    <View style={{ height: "20%", width: "100%", flexDirection: "row" }}>

                        <View style={{ width: "30%", height: "80%", backgroundColor: "black", marginTop: 8, marginLeft: 5, marginRight: 5, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="image-outline" size={45} color="grey" />
                        </View>


                        <View style={{ width: "30%", height: "80%", backgroundColor: "black", marginTop: 8, marginLeft: 5, marginRight: 5, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="image-outline" size={45} color="grey" />
                        </View>

                        <View style={{ width: "30%", height: "80%", backgroundColor: "black", marginTop: 8, marginLeft: 5, marginRight: 5, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="image-outline" size={45} color="grey" />
                        </View>

                    </View>



                    <View style={{ height: "18%", width: "100%", flexDirection: "row" }}>

                        <View style={{ width: "30%", height: "90%", backgroundColor: "black", marginLeft: 5, marginRight: 5, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="image-outline" size={45} color="grey" />
                        </View>


                        <View style={{ width: "30%", height: "90%", backgroundColor: "black", marginLeft: 5, marginRight: 5, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="image-outline" size={45} color="grey" />
                        </View>

                        <View style={{ width: "30%", height: "90%", backgroundColor: "black", marginLeft: 5, marginRight: 5, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="image-outline" size={45} color="grey" />
                        </View>

                    </View>




                    <View style={{ height: "18%", width: "100%", flexDirection: "row" }}>

                        <View style={{ width: "30%", height: "90%", backgroundColor: "black", marginLeft: 5, marginRight: 5, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="image-outline" size={45} color="grey" />
                        </View>


                        <View style={{ width: "30%", height: "90%", backgroundColor: "black", marginLeft: 5, marginRight: 5, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="image-outline" size={45} color="grey" />
                        </View>

                        <View style={{ width: "30%", height: "90%", backgroundColor: "black", marginLeft: 5, marginRight: 5, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="image-outline" size={45} color="grey" />
                        </View>

                    </View>







                    <View style={{ height: "18%", width: "100%", flexDirection: "row" }}>

                        <View style={{ width: "30%", height: "90%", backgroundColor: "black", marginLeft: 5, marginRight: 5, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="image-outline" size={45} color="grey" />
                        </View>


                        <View style={{ width: "30%", height: "90%", backgroundColor: "black", marginLeft: 5, marginRight: 5, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="image-outline" size={45} color="grey" />
                        </View>

                        <View style={{ width: "30%", height: "90%", backgroundColor: "black", marginLeft: 5, marginRight: 5, justifyContent: "center", alignItems: "center" }}>
                            <Ionicons name="image-outline" size={45} color="grey" />
                        </View>

                    </View>














                </View>






            </View>
        </View>
    )
}

export default Gallery


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    Main: {
        width: "100%",
        height: "100%",
        // backgroundColor: "green"
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