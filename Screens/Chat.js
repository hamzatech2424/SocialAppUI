import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/dist/Ionicons';



const Chat = ({navigation}) => {
    return (
        <View style={styles.container} >
            <View style={styles.Main} >


            <View style={styles.Header} >
                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    style={{ position: "absolute", left: "10%", width: "6%", height: "50%", alignItems: "center", justifyContent: "center" }}>
                        <Icon name="arrow-back-ios" size={18} color="white" />
                    </TouchableOpacity>
                    <Text style={{ color: "white" }}>Chat with Pro</Text>
                </View>


                
                <View style={{ height: 52, width: "100%", flexDirection: "row" }}>
                    <View style={{ height: "100%", width: "80%", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                        <View style={{ borderWidth: 1, borderColor: "grey", width: "90%", height: "70%", justifyContent: "center", flexDirection: "row", alignItems: "center" }}>

                            <View style={{ width: "85%", height: 37 }}>
                                <TextInput placeholder="Data Science" style={{ width: "100%", height: 38, paddingLeft: "10%" }} />
                            </View>
                            <View style={{ width: "15%", height: "80%", justifyContent: "center" }}>
                                <Icon name="search" size={30} color="grey" />
                            </View>



                        </View>


                    </View>

                    <View style={{ width: "20%", height: "100%", justifyContent: "center" }}>
                        <Icon name="settings" size={40} color="black" />
                    </View>

                </View>


                <View style={{width:"100%",height:"9%",justifyContent:"center"}}>

                <View style={styles.nextBtnView}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    style={styles.nextbtnStyle}>
                        <Text style={{color:"green"}}>Online</Text>
                    </TouchableOpacity>
                </View>


                </View>




<View style={{width:"100%",height:"15%",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
<Icon name="account-circle" size={70} color="purple"  />
<Icon name="account-circle" size={70} color="purple"  />
<Icon name="account-circle" size={70} color="purple"  />
<Icon name="account-circle" size={70} color="purple"  />
<Icon name="account-circle" size={70} color="purple"  />
</View>




<TouchableOpacity
activeOpacity={0.8}
onPress={()=>navigation.navigate("Convo")}
style={{height:110,width:"90%",borderWidth:1,borderColor:"grey",alignSelf:"center",flexDirection:"row",backgroundColor:"lightgrey",borderRadius:5}}>

<View style={{height:"100%",width:"35%",alignItems:"center",justifyContent:"center"}}>

<Icon name="account-circle" size={90} color="purple"  />

</View>


    <View style={{width:"65%",height:"100%",flexDirection:"column"}} >


<View style={{width:"100%",height:"75%",justifyContent:"center"}}>
    <Text style={{color:"purple",fontSize:17,fontWeight:"bold"}}>Ahsan Mehboob</Text>
    <Text style={{color:"purple"}}>Hi.....</Text>
  
</View>





<View style={{width:"100%",height:"25%",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
    <Text style={{color:"purple"}}>1 hour ago</Text>
    <Icon1 name="stopwatch" size={22} color="purple"  />
</View>
    



    </View>




</TouchableOpacity>




            </View>

        </View>
    )
}

export default Chat


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Main:{
        width:"100%",
        height:"100%",
        backgroundColor:"white"
    },
    Header: {
        width: "100%",
        height: 45,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
        nextBtnView: {
            width: "100%",
            height: "70%",
            // backgroundColor: "blue",
            marginLeft:15
        },
        nextbtnStyle:{
            width:"30%",
            backgroundColor:"purple",
            height:"100%",
            borderRadius:10,
            justifyContent:"center",
            alignItems:"center",
        },

})