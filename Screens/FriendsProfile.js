import React from 'react'
import {View,Text,StyleSheet, Touchable, TouchableOpacity} from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';



const FriendsProfile = ({navigation}) => {
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
                <Text style={{color:"white"}}>Probub</Text>
            </View>


            
            <View style={{width:"100%",height:"17%",flexDirection:'row'}}>
                <View style={{width:"30%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                <Icon name="account-circle" size={80} color="purple"  />
                </View>

                <View style={{flexDirection:"column",width:"70%",height:"100%"}}>
                    <View style={{height:"40%",width:"100%",justifyContent:"center",alignItems:"center"}}>
                        <Text style={{color:"purple"}}>Ahsan Mehboob</Text>
                    </View>
                    <View style={{height:"60%",width:"100%",flexDirection:"row"}}>
                        <View style={{height:"100%",width:"33.3%",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            <Text style={{color:"purple"}}>Followers</Text>
                            <Text style={{color:"purple"}}>01</Text>
                        </View>

                        <View style={{height:"100%",width:"33.3%",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            <Text style={{color:"purple"}}>Following</Text>
                            <Text style={{color:"purple"}}>01</Text>
                        </View>

                        <View style={{height:"100%",width:"33.3%",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            <Text style={{color:"purple"}}>Friends</Text>
                            <Text style={{color:"purple"}}>01</Text>
                        </View>
                    </View>

                </View>

            </View>



              <View style={{height:"7%",width:"100%",justifyContent:"center",alignItems:"center"}}>
                  <Text style={{color:"purple",fontSize:18}}>Scores</Text>

              </View>


<View style={{width:"100%",height:"10%",flexDirection:"row"}}>

    <View style={{width:"25%",height:"95%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Text>Answers</Text>
        <Icon name="star" size={50} color="lightgrey" />
    </View>
    <View style={{width:"25%",height:"95%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Text>Questions</Text>
        <Icon name="star" size={50} color="lightgrey" />
    </View>
    <View style={{width:"25%",height:"95%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Text>Jobs</Text>
        <Icon name="star" size={50} color="lightgrey" />
    </View>
    <View style={{width:"25%",height:"95%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <Text>Events</Text>
        <Icon name="star" size={50} color="lightgrey" />
    </View>

</View>



<View style={{width:"70%",height:"30%",marginTop:"11%",alignSelf:"center"}}>
    <View style={{width:"100%",height:"25%",flexDirection:"row"}}>
        <Text style={{fontSize:17,color:"purple"}}>Profession -</Text>
        <Text style={{fontSize:17,color:"grey"}}> Computer Science</Text>
    </View>

    <View style={{width:"100%",height:"25%",flexDirection:"row"}}>
        <Text style={{fontSize:17,color:"purple"}}>Work in -</Text>
        <Text style={{fontSize:17,color:"grey"}}> BCU</Text>
    </View>

    <View style={{width:"100%",height:"25%",flexDirection:"row"}}>
        <Text style={{fontSize:17,color:"purple"}}>Studied -</Text>
        <Text style={{fontSize:17,color:"grey"}}> MSC ACS AT BCU</Text>
    </View>

    <View style={{width:"100%",height:"25%",flexDirection:"row"}}>
        <Text style={{fontSize:17,color:"purple"}}>Projects -</Text>
        <Text style={{fontSize:17,color:"grey"}}> Prophub - 2020 2021</Text>
    </View>
 


</View>

{/* 
<View style={{width:"100%",height:"7%",backgroundColor:"red",marginTop:"1%",justifyContent:"center",alignItems:"center"}}>

    <TouchableOpacity style={{height:"90%",width:"70%",backgroundColor:"blue",justifyContent:"center",alignItems:"center"}}><Text style={{color:"white"}} >Edit Profile</Text></TouchableOpacity>
    
</View> */}


<View style={{width:"90%",height:"9%",marginTop:"4%",justifyContent:"space-between",alignItems:"center",flexDirection:"row",alignSelf:"center"}}>

    <TouchableOpacity style={{height:"90%",width:"30%",backgroundColor:"purple",justifyContent:"center",alignItems:"center"}}><Text style={{color:"white"}} >Edit Profile</Text></TouchableOpacity>

    <TouchableOpacity style={{height:"90%",width:"30%",backgroundColor:"purple",justifyContent:"center",alignItems:"center"}}><Text style={{color:"white"}} >Edit Profile</Text></TouchableOpacity>

    <TouchableOpacity style={{height:"90%",width:"30%",backgroundColor:"purple",justifyContent:"center",alignItems:"center"}}><Text style={{color:"white"}} >Edit Profile</Text></TouchableOpacity>
    
</View>















            </View>

        </View>
    )
}

export default FriendsProfile


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Header:{
        width:"100%",
        height:"8%",
        backgroundColor:"purple",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    Main:{
        width:"100%",
        height:"100%",
        backgroundColor:"white"
    }

})