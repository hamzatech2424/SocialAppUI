import React from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';




const SignUp = () => {
    return (
        <View style={styles.container} >
     
            <View style={styles.Middle} >

          <View style={{height:"15%",width:"100%",justifyContent:"center",alignItems:"center"}}>
          <Icon name="account-circle" size={65} color="purple"  />
          </View>

          <View style={{height:"60%",width:"100%",alignItems:"center",justifyContent:"space-between"}}>


           <View style={{width:"92%",height:"14%",flexDirection:"row",justifyContent:"space-between"}}>
          <TextInput placeholder="First Name" style={{width:"48%",height:"100%",borderWidth:1,borderColor:"grey",paddingLeft:"5%",borderRadius:5}} />

           <TextInput placeholder="Last Name" style={{width:"48%",height:"100%",borderWidth:1,borderColor:"grey",paddingLeft:"5%",borderRadius:5}} /> 
          </View>

          <TextInput placeholder="Email Address" style={{width:"92%",height:"14%",borderWidth:1,borderColor:"grey",paddingLeft:"5%",borderRadius:5}} />

          <TextInput placeholder="******" style={{width:"92%",height:"14%",borderWidth:1,borderColor:"grey",paddingLeft:"5%",borderRadius:5}} />

          <TextInput placeholder="Birthday" style={{width:"92%",height:"14%",borderWidth:1,borderColor:"grey",paddingLeft:"5%",borderRadius:5}} />

          <TextInput placeholder="Gender" style={{width:"92%",height:"14%",borderWidth:1,borderColor:"grey",paddingLeft:"5%",borderRadius:5}} />

          <TextInput placeholder="Phone Number" style={{width:"92%",height:"14%",borderWidth:1,borderColor:"grey",paddingLeft:"5%",borderRadius:5}} />
          </View>


          <View style={styles.nextBtnView}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    style={styles.nextbtnStyle}>
                        <Text style={{color:"white"}}>Login</Text>
                    </TouchableOpacity>
                </View>



            </View>



     
        </View>
    )
}

export default SignUp


const styles = StyleSheet.create({
    container:{
        flex:1
    },

    Middle:{
        width:"100%",
        height:"100%",
        // backgroundColor:"green"
    },
    nextBtnView: {
        width: "100%",
        height: "8%",
        // backgroundColor: "blue",
        alignItems:"center",
        marginTop:"5%"
    },
    nextbtnStyle:{
        width:"40%",
        backgroundColor:"purple",
        height:"100%",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
    },


})