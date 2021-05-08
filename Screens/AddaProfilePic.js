import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';



const AddaProfilePic = () => {
    return (
        <View style={styles.container} >
            <View style={styles.Header} ></View>
            <View style={styles.Middle} >
           
            <View style={{width:"100%",height:"15%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:16,fontWeight:"bold",color:"purple"}}>Add a Profile Pictute</Text>
                <Text style={{color:"purple"}}>Add your photo as other Professionals can find you</Text>
            </View>

            <View style={{width:"100%",height:"45%",justifyContent:"center",alignItems:"center"}}> 
          <Icon name="account-circle" size={130} color="purple"  />
            </View>



<View style={{width:"100%",height:"40%"}}>
            <View style={styles.nextBtnView}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    style={styles.nextbtnStyle}>
                        <Text style={{color:"white"}}>Choose a Photo</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.nextBtnView}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    style={styles.nextbtnStyle}>
                        <Text style={{color:"white"}}>Take a Photo</Text>
                    </TouchableOpacity>
                </View>
</View>

            </View>
            <View style={styles.Footer} ></View>
        </View>
    )
}

export default AddaProfilePic


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Header:{
        width:"100%",
        height:"13%",
        // backgroundColor:"yellow"
    },
    Middle:{
        width:"100%",
        height:"77%",
        // backgroundColor:"green"
    },
    nextBtnView: {
        width: "100%",
        height: "25%",
        // backgroundColor: "blue",
        alignItems:"center",
        marginTop:"7%"
    },
    nextbtnStyle:{
        width:"70%",
        backgroundColor:"purple",
        height:"100%",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
    },
    Footer:{
        width:"100%",
        height:"10%",
        // backgroundColor:"red"
    },

})