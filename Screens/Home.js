import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';



const Home = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <View style={styles.Header} >
                <Text style={{ color: "white" }}>Probub</Text>
            </View>
            <View style={styles.Middle} >





                <View style={{ width: "100%", height: "11%", flexDirection: "row" }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Notifi")}
                        activeOpacity={0.8}
                        style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons name="bell-outline" color="purple" size={32} />
                    </TouchableOpacity>

                    <View style={{ width: "60%", height: "100%", justifyContent: "center", alignItems: "center" }}>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Search")}
                            activeOpacity={0.8}
                            style={{ height: 42, width: "100%", borderWidth: 1, borderColor: "grey", borderRadius: 20, borderTopRightRadius: 20, borderBottomRightRadius: 20, flexDirection: "row" }}>
                            <View style={{ height: "100%", width: "80%" }}>
                                <Text
                                    style={{ height: "100%", width: "100%", paddingLeft: 15, color: "grey", textAlignVertical: "center" }}>Search</Text>
                            </View>

                            <View style={{ height: "100%", width: "20%", backgroundColor: "purple", justifyContent: "center", alignItems: "center", borderRadius: 20 }}>
                                <Fontisto
                                    name="search" color="white" size={20} />
                            </View>

                        </TouchableOpacity>


                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("ChatSta")}
                        activeOpacity={0.8}
                        style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons name="message" color="purple" size={32} />
                    </TouchableOpacity>

                </View>






                <View style={{ width: "100%", height: "22%", flexDirection: "row" }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("UserPro")}
                        style={{ width: "30%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Icon name="account-circle" size={90} color="purple" />
                    </TouchableOpacity>

                    <View style={{ width: "70%", height: "100%", flexDirection: "column" }}>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate("Post")}
                            style={{ width: "90%", height: 52, alignSelf: "center", marginTop: "4%", justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ borderColor: "grey", borderWidth: 1, width: "100%", paddingLeft: 15, height: "100%", color: "grey", textAlignVertical: "center" }}>Ask something to pro!</Text>
                        </TouchableOpacity>

                        <View style={{ width: "100%", height: "50%" }}>
                            <View style={{ width: "80%", height: "100%", flexDirection: "row", marginLeft: 11 }}>

                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate("Gal")}
                                    style={{ height: "100%", width: "26%", alignItems: "center" }}>
                                    <MaterialCommunityIcons name="image" color="purple" size={40} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate("CJob")}
                                    style={{ height: "100%", width: "26%", alignItems: "center" }}>
                                    <MaterialCommunityIcons name="feature-search" color="purple" size={40} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate("CreateEve")} style={{ height: "100%", width: "26%", alignItems: "center" }}>
                                    <MaterialCommunityIcons name="calendar-check-outline" color="purple" size={40} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </View>






                <View style={{ width: "100%", height: "12%", flexDirection: "row" }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("Friend")}
                        style={{ width: "25%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Icon name="account-circle" size={45} color="purple" />
                    </TouchableOpacity>
                    <View style={{ width: "50%", height: "100%", justifyContent: "center" }}>
                        <Text style={{ color: "purple", fontSize: 16 }}>Other user's Profile</Text>
                        <Text style={{ color: "grey" }}>1 Min, London</Text>
                    </View>
                    <View style={{ width: "25%", height: "100%", justifyContent: "center" }}>
                        <View style={styles.nextBtnView}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={styles.nextbtnStyle}
                                onPress={() => { navigation.navigate("AddFri") }}
                            >
                                <Text style={{ color: "white" }}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>






                <View style={{ width: "100%", height: "54%", alignItems: "center" }}>

                    <View style={{ height: "80%", width: "90%", marginTop: "2%", borderWidth: 1, borderColor: "grey", justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name="image-outline" size={120} color="purple" />
                    </View>

                    <View style={{ height: "15%", width: "90%", flexDirection: "row" }}>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate("Lik")}
                            style={{ height: "100%", width: "35%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <IconFontAwesome name="thumbs-up" size={30} color="purple" />
                            <Text style={{ color: "purple" }}>Thumbs up</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate("Com")}
                            style={{ height: "100%", width: "30%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <IconMaterialCommunityIcons name="message-processing-outline" size={30} color="purple" />
                            <Text style={{ color: "purple" }}>Ask..</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate("Share")}
                            style={{ height: "100%", width: "35%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <IconMaterialCommunityIcons name="share" size={30} color="purple" />
                            <Text style={{ color: "purple" }}>Share</Text>
                        </TouchableOpacity>

                    </View>

                </View>



                


            </View>
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Header: {
        width: "100%",
        height: "8%",
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center"
    },
    Middle: {
        width: "100%",
        height: "92%",
        // backgroundColor:"green"
    },
    nextBtnView: {
        width: "100%",
        height: "60%",
        // backgroundColor: "blue"
    },
    nextbtnStyle: {
        width: "80%",
        backgroundColor: "purple",
        height: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },


})