import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';


const GoToConversation = ({navigation}) => {

    const windowHeight = Dimensions.get('window').height;



    return (
        <View style={styles.container} >
            <View style={styles.Middle} >

                <View style={styles.Header} >
                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    style={{ position: "absolute", left: "10%", width: "6%", height: "50%", alignItems: "center", justifyContent: "center" }}>
                        <Icon name="arrow-back-ios" size={18} color="white" />
                    </TouchableOpacity>
                    <Text style={{ color: "white" }}>Name</Text>
                </View>

                <ScrollView style={{ width: "100%", height: windowHeight }}>





                    <View style={{ width: "100%", height: 80, flexDirection: "row", marginBottom: 5 }}>

                        <View style={{ width: "20%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                            <Icon name="account-circle" size={50} color="purple" />

                        </View>
                        <View style={{ width: "80%", height: "100%" }}>
                            <View style={{ width: "90%", height: "70%", backgroundColor: "white", marginTop: 10, borderRadius: 5 }}>

                                <Text style={{ color: "grey", fontSize: 12, paddingLeft: 15, paddingTop: 5 }}  >Ahsan</Text>
                                <Text style={{ color: "purple", fontSize: 15, fontWeight: "900", paddingTop: 5, paddingLeft: 15 }}>Lorem Ipsum dolor sit amet</Text>

                            </View>
                            <Text style={{ color: "grey", fontSize: 10, paddingTop: 1, paddingLeft: 15 }} >5 minutes ago</Text>
                        </View>

                    </View>



                    <View style={{ width: "100%", height: 350, flexDirection: "row", marginBottom: 5}}>

                        <View style={{ width: "20%", height: "100%", alignItems: "center", justifyContent: "flex-start" }}>
                            <Icon name="account-circle" size={50} color="purple" />

                        </View>


                        <View style={{ width: "80%", height: "100%" }}>
                            <View style={{ width: "90%", height: "90%", backgroundColor: "white", marginTop: 10, borderRadius: 5 }}>

                                <View style={{ height: "50%", width: "100%", backgroundColor: "grey", borderTopRightRadius: 5, borderTopLeftRadius: 5, justifyContent: "center", alignItems: "center" }}>

                                    <Ionicons name="image-outline" size={50} color="white" />

                                </View>
                                <Text style={{ color: "purple", fontSize: 15, fontWeight: "900", paddingTop: 5, paddingLeft: 15 }}>Lorem Ipsum dolor sit amet</Text>
                                <Text style={{ color: "grey", fontSize: 13, fontWeight: "900", paddingTop: 5, paddingLeft: 15,width:"90%" }}>Lorem Ipsum dolor sit amet Lorem Ipsum dolor sit amet Lo</Text>

                                <TouchableOpacity style={{width:"100%",height:35,justifyContent:"center",alignItems:"center",marginTop:5}}><Text style={{color:"purple"}}>Open article</Text></TouchableOpacity>
                                <TouchableOpacity style={{width:"100%",height:35,justifyContent:"center",alignItems:"center"}}><Text style={{color:"purple"}}>Dismiss</Text></TouchableOpacity>


                            </View>
                            <Text style={{ color: "grey", fontSize: 10, paddingTop: 1, paddingLeft: 15 }} >5 minutes ago</Text>
                        </View>

                    </View>



                    </ScrollView>




                    <View style={{width:"100%",height:60,position:"absolute",bottom:0,flexDirection:"row"}}>

                      <View style={{width:"15%",height:"100%",backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
                           <TouchableOpacity
                           activeOpacity={0.8}
                            style={{height:40,width:40,borderRadius:20,backgroundColor:"purple",justifyContent:"center",alignItems:"center"}}>

                           <Icon name="add" size={18} color="white" />
                           </TouchableOpacity>
                      </View>

                      <View style={{width:"60%",height:"100%",backgroundColor:"white"}}>

                          <TextInput placeholder="Write Message" placeholderTextColor="grey" style={{height:"100%",paddingLeft:15}} />

                      </View>

                      <View style={{width:"25%",height:"100%"}}>

                      <TouchableOpacity
                           activeOpacity={0.8}
                            style={{height:"100%",width:"100%",backgroundColor:"purple",justifyContent:"center",alignItems:"center"}}>
                                <Text style={{color:"white"}} >Send</Text>
                           </TouchableOpacity>

                      </View>


                    </View>















               

            </View>

        </View>
    )
}

export default GoToConversation


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Middle: {
        width: "100%",
        height: "100%",
        backgroundColor: "lightgrey"
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