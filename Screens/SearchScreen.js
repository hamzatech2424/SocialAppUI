import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';



const SearchScreen = ({navigation}) => {
    return (
        <View style={styles.container} >
            <View style={styles.Main} >


                <View style={styles.Header} >


                    <View style={{ backgroundColor: "purple", height: 30, width: "100%", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 16 }}>Search</Text>
                    </View>

                    <View style={{ height: 50, width: "100%", flexDirection: "row" }}>


                        <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "flex-end" }}>

                            <TouchableOpacity
                            onPress={()=>navigation.goBack()}
                            style={{paddingRight:"15%"}} >
                                <Icon name="arrow-back-ios" size={18} color="white" />
                            </TouchableOpacity>

                        </View>



                        <View style={{ width: "60%", height: "100%", justifyContent: "center" }}>

                            <View style={{  height: "80%", width: "100%", borderColor: "grey", borderWidth: 1, flexDirection: "row" }}>
                                <View style={{  height: "100%", width: "20%", justifyContent: "center", alignItems: "center" }}>

                                    <TouchableOpacity >
                                        <Icon name="search" size={24} color="white" />
                                    </TouchableOpacity>

                                </View>

                                <View style={{ height: "100%", width: "80%" }}>
                                    <TextInput style={{ width: "90%", height: "100%",color:"white" }} placeholder="Search" placeholderTextColor="white" />
                                </View>



                            </View>

                        </View>


                        <View style={{ width: "20%", height: "100%",justifyContent:"center" }}>
                            <TouchableOpacity style={{paddingLeft:"15%"}} >
                                <Icon name="settings" size={30} color="black"  />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


<View style={{backgroundColor:"lightgrey",height:40,width:"100%",marginBottom:3,justifyContent:"center"}}>
<Text style={{paddingLeft:15}}>Designing</Text>
</View>

<View style={{backgroundColor:"lightgrey",height:40,width:"100%",marginBottom:3,justifyContent:"center"}}>
<Text style={{paddingLeft:15}}>Designing</Text>
</View>

<View style={{backgroundColor:"lightgrey",height:40,width:"100%",marginBottom:3,justifyContent:"center"}}>
<Text style={{paddingLeft:15}}>Designing</Text>
</View>

<View style={{backgroundColor:"lightgrey",height:40,width:"100%",marginBottom:3,justifyContent:"center"}}>
<Text style={{paddingLeft:15}}>Designing</Text>
</View>

<View style={{backgroundColor:"lightgrey",height:40,width:"100%",marginBottom:3,justifyContent:"center"}}>
<Text style={{paddingLeft:15}}>Designing</Text>
</View>





            </View>


        </View>
    )
}

export default SearchScreen


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Main: {
        width: "100%",
        height: "100%",
        backgroundColor: "white"
    },
    Header: {
        width: "100%",
        height: 80,
        backgroundColor: "purple",
        flexDirection: "column"
    }


})