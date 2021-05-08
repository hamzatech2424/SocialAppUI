import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity,ImageBackground } from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';



const CreateJob = ({navigation}) => {
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
                    <Text style={{ color: "white" }}>Job Details</Text>
                </View>


   <View style={{height:"22%",width:"100%"}} >

 <ImageBackground 
 source={require("../Assets/images/fsdMapjpg.jpg")}
 style={{height:"100%",width:"100%",justifyContent:"flex-end"}}>
       <Text style={{color:"black",marginBottom:10,marginLeft:"10%"}}>Job Name</Text>
       </ImageBackground>
   </View>


   <View style={{backgroundColor:"lightgrey",width:"100%",height:"10%",flexDirection:"column",justifyContent:"center",paddingLeft:"10%",marginBottom:"0.5%"}}>
       <Text  style={{color:"purple"}}>Experience</Text>
       <Text style={{color:"grey"}}>New Week 8/17 showers</Text>
   </View>

   <View style={{backgroundColor:"lightgrey",width:"100%",height:"10%",flexDirection:"column",justifyContent:"center",paddingLeft:"10%",marginBottom:"0.5%"}}>
       <Text  style={{color:"purple"}}>Location</Text>
       <Text style={{color:"grey"}}>New Week 8/17 showers</Text>
   </View>

   <View style={{backgroundColor:"lightgrey",width:"100%",height:"10%",flexDirection:"column",justifyContent:"center",paddingLeft:"10%",marginBottom:"0.5%"}}>
       <Text  style={{color:"purple"}}>Pay</Text>
       <Text style={{color:"grey"}}>New Week 8/17 showers</Text>
   </View>

   <View style={{backgroundColor:"lightgrey",width:"100%",height:"10%",flexDirection:"column",justifyContent:"center",paddingLeft:"10%",marginBottom:"0.5%"}}>
       <Text  style={{color:"purple"}}>Contact</Text>
       <Text style={{color:"grey"}}>+92 300234234</Text>
   </View>



<View style={{width:"100%",height:"10%",backgroundColor:"lightgrey",marginTop:"18%",justifyContent:"center",alignItems:"center"}}>
<TouchableOpacity style={{backgroundColor:"purple",height:"80%",width:"80%",borderRadius:20,justifyContent:"center",alignItems:"center"}} ><Text style={{color:"white"}}>Create Job</Text></TouchableOpacity>
</View>



            </View>

        </View>
    )
}

export default CreateJob


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Main:{
        width:"100%",
        height:"100%",
        // backgroundColor:"yellow"
    },
    Header: {
        width: "100%",
        height:45,
        backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    

})