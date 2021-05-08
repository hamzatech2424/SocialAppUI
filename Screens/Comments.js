import React from 'react'
import {View,Text,StyleSheet, TextInput, TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';



const Comments = ({navigation}) => {
    return (
        <View style={styles.container} >
            <View style={styles.Main} >

            <View style={styles.Header} >
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>navigation.goBack()}
                style={{position:"absolute",left:"10%",width:"6%",height:"50%",alignItems:"center",justifyContent:"center"}}>
                <Icon name="arrow-back-ios" size={18} color="white" />
                </TouchableOpacity>
                <Text style={{color:"white"}}>Comment</Text>
            </View>


            
            <View style={{width:"100%",height:"16%",flexDirection:"row"}}>
                    <View style={{width:"20%",height:"100%",justifyContent:"center",alignItems:"center",marginLeft:"2%"}}>
                    <Icon name="account-circle" size={50} color="purple"  />
                    </View>

                    <View style={{width:"80%",height:"100%",flexDirection:"column"}}>

                        <View style={{width:"90%",height:55,marginTop:"7%"}}>
                            <TextInput placeholder="Ask something to pro!" style={{borderColor:"grey",borderWidth:1,width:"100%",paddingLeft:15}} />
                        </View>

                        <View style={{width:"100%",height:"50%"}}>
                            <View style={{width:"80%",height:"100%",flexDirection:"row",marginLeft:11}}>

                            <View style={{height:"100%",width:"50%",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <IconFontAwesome name="thumbs-up" size={30} color="purple"  />
                        <Text style={{color:"purple"}}>Thumbs up</Text>
                        </View>

                        <View style={{height:"100%",width:"50%",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                        <IconMaterialCommunityIcons name="message-processing-outline" size={30} color="purple"  />
                        <Text style={{color:"purple"}}>Reply</Text>
                        </View>


                            </View>
                        </View>

                    </View>

                </View>




<View style={{width:"85%",height:"10%",backgroundColor:"lightgrey",position:"absolute",bottom:0,alignSelf:"center",flexDirection:"row",marginBottom:"5%"}}>
    <TextInput placeholder="Write your message" style={{height:"100%",width:"80%",paddingLeft:15}} />
    <TouchableOpacity style={{width:"20%",height:"100%",backgroundColor:"purple",justifyContent:"center",alignItems:"center"}}><Text style={{color:"white"}}>Send</Text></TouchableOpacity>

</View>







            </View>
        </View>
    )
}

export default Comments


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Header:{
        width:"100%",
        height:45,
        backgroundColor:"purple",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    Main:{
        width:"100%",
        height:"100%",
        // backgroundColor:"yellow"
    },


})