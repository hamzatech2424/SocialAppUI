import React from 'react'
import {View,Text,StyleSheet, TextInput, TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';



const SharePost = ({navigation}) => {
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
                <Text style={{color:"white"}}>Share Post</Text>
            </View>


            <View style={{width:"100%",height:"12%",flexDirection:"row"}}>

<View style={{width:"20%",height:"100%",justifyContent:"center",alignItems:"center"}}>
<MaterialCommunityIcons name="bell-outline" color="purple" size={32} />
</View>

<View style={{width:"60%",height:"100%",justifyContent:"center",alignItems:"center"}}>

<View style={{height:42,width:"100%",borderWidth:1,borderColor:"grey",borderRadius:20,borderTopRightRadius:20,borderBottomRightRadius:20,flexDirection:"row"}}>
    <View style={{height:"100%",width:"80%"}}>
        <TextInput placeholder="Search" style={{height:"100%",width:"100%",paddingLeft:15}} />
    </View>

    <View style={{height:"100%",width:"20%",backgroundColor:"purple",justifyContent:"center",alignItems:"center",borderRadius:20}}>
    <Fontisto name="search" color="white" size={20} />
    </View>

</View>


</View>

<View style={{width:"20%",height:"100%",justifyContent:"center",alignItems:"center"}}>
<MaterialCommunityIcons name="message" color="purple" size={32} />
</View>

</View>


<View style={{width:"100%",height:"20%",flexDirection:"row"}}>
                    <View style={{width:"30%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                    <Icon name="account-circle" size={90} color="purple"  />
                    </View>

                    <View style={{width:"70%",height:"100%",flexDirection:"column"}}>

                        <View style={{width:"90%",height:90,alignSelf:"center",marginTop:"7%"}}>
                            <TextInput placeholder="Ask something to pro!" style={{borderColor:"grey",borderWidth:1,width:"100%",paddingLeft:15,height:"100%"}} />
                        </View>

                    </View>

                </View>



                <View style={{width:"100%",height:"12%",flexDirection:"row"}}>
                    <View style={{width:"25%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                    <Icon name="account-circle" size={45} color="purple"  />
                    </View>
                    <View style={{width:"50%",height:"100%",justifyContent:"center"}}>
                        <Text style={{color:"purple",fontSize:16}}>Other user's Profile</Text>
                        <Text style={{color:"grey"}}>1 Min, London</Text>
                    </View>
                    <View style={{width:"25%",height:"100%",justifyContent:"center"}}>
                    <View style={styles.nextBtnView}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    style={styles.nextbtnStyle}>
                        <Text style={{color:"white"}}>Add</Text>
                    </TouchableOpacity>
                     </View>
                    </View>
                </View>


                <View style={{width:"100%",height:"54%",alignItems:"center"}}>

<View style={{height:"65%",width:"90%",marginTop:"2%",borderWidth:1,borderColor:"grey",justifyContent:"center",alignItems:"center"}}>
<Ionicons name="image-outline" size={120} color="purple"  />
</View>

<View style={{height:"15%",width:"90%",flexDirection:"row",marginTop:"2%",alignItems:"center",justifyContent:"center"}}>

<TouchableOpacity style={{width:"50%",backgroundColor:"purple",height:"100%",justifyContent:"center",alignItems:"center"}}>
    <Text style={{color:"white"}}>Share Now</Text></TouchableOpacity>

</View>

</View>


            </View>
     
        </View>
    )
}

export default SharePost


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Main:{
        width:"100%",
        height:"100%",
        // backgroundColor:"yellow"
    },
    Header:{
        width:"100%",
        height:"8%",
        backgroundColor:"purple",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    nextBtnView: {
        width: "100%",
        height: "60%",
        // backgroundColor: "blue"
    },
    nextbtnStyle:{
        width:"80%",
        backgroundColor:"purple",
        height:"100%",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
    },


})