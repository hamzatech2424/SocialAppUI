import React from 'react'
import {View,Text,StyleSheet, TextInput, TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Icon1 from 'react-native-vector-icons/dist/Ionicons';



const JobsView = ({navigation}) => {
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
                <Text style={{color:"white"}}>Jobs</Text>
            </View>


            <View style={{height:52,width:"100%",flexDirection:"row"}}>
                <View style={{height:"100%",width:"80%",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                    <View style={{borderWidth:1,borderColor:"grey",width:"90%",height:"70%",justifyContent:"center",flexDirection:"row",alignItems:"center"}}>
                        
                    <View style={{width:"85%",height:37}}>
                        <TextInput placeholder="Data Science" style={{width:"100%",height:38,paddingLeft:"10%"}} />
                        </View>
                    <View style={{width:"15%",height:"80%",justifyContent:"center"}}>
                    <Icon name="search" size={30} color="grey" />
                    </View>    



                    </View>

             

                

                </View>

                <View style={{width:"20%",height:"100%",justifyContent:"center"}}>
                <Icon name="settings" size={40} color="black" />
                </View>

            </View>



            <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>navigation.navigate("JobVie")}
            style={{height:150,width:"95%",borderWidth:1,borderColor:"grey",alignSelf:"center",flexDirection:"row",backgroundColor:"lightgrey"}}>

              <View style={{height:"100%",width:"35%",alignItems:"center",justifyContent:"center"}}>

              <Icon name="account-circle" size={90} color="purple"  />

              </View>


                  <View style={{width:"65%",height:"100%",flexDirection:"column"}} >


              <View style={{width:"100%",height:"75%",justifyContent:"center"}}>
                  <Text style={{color:"purple"}}>Data Scientist</Text>
                  <Text style={{color:"white"}}>BCU</Text>
                  <Text style={{color:"white"}}>Birmingham</Text>
              </View>

             
            
        
             
              <View style={{width:"100%",height:"25%",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>
                  <Text style={{color:"purple"}}>1 hour ago</Text>
                  <Icon1 name="stopwatch" size={30} color="purple"  />
              </View>
                  



                  </View>

            </TouchableOpacity>








            </View>
        </View>
    )
}

export default JobsView


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
        height:45,
        backgroundColor:"purple",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },

})