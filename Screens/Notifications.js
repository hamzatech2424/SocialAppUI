import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Notifications = ({navigation}) => {
    return (
        <View style={styles.container} >
            <View style={styles.Main} >

              

                <View style={styles.Header} >
                    <TouchableOpacity
                    onPress={()=>navigation.goBack()}
                    style={{ position: "absolute", left: "10%", width: "6%", height: "50%", alignItems: "center", justifyContent: "center" }}>
                        <Icon name="arrow-back-ios" size={18} color="white" />
                    </TouchableOpacity>
                    <Text style={{ color: "white" }}></Text>
                </View>


                <View style={{ backgroundColor: "lightgrey", height: "10%", width: "100%", flexDirection: "row" }}>
                    <View style={{ width: "20%", height: "100%", justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons name="bell-outline" color="purple" size={45} />
                    </View>

                    <View style={{ width: "80%", height: "100%", justifyContent: "center" }}>
                        <Text style={{ fontSize: 23 }}>Notifications</Text>
                    </View>
                </View>


                <ScrollView style={{width:"100%"}}>




                <View style={{ height: 30, width: "100%", backgroundColor: "white", flexDirection: "row",marginBottom:2 }}>

                    <View style={{height: "100%", width: "10%", justifyContent: "center", alignItems: "center" }}>
                        <View style={{ height: 20, width: 20, borderRadius: 10,backgroundColor:"lightgrey" }}>

                        </View>
                    </View>
                    <View style={{ height: "100%", width: "80%",justifyContent:"center" }}>
                        <Text><Text style={{fontWeight:"bold"}}>Ali Akbar</Text> have send you a message</Text>

                    </View>
                    <View style={{height: "100%", width: "10%",flexDirection:"row",alignItems:"center" }}>
                    <MaterialCommunityIcons name="clock" size={12} color="lightgrey" />
                    <Text style={{fontSize:8,color:"lightgrey"}} >1 min</Text>
                    </View>

                </View>




                <View style={{ height: 30, width: "100%", backgroundColor: "white", flexDirection: "row",marginBottom:2 }}>

<View style={{height: "100%", width: "10%", justifyContent: "center", alignItems: "center" }}>
    <View style={{ height: 20, width: 20, borderRadius: 10,backgroundColor:"lightgrey" }}>

    </View>
</View>
<View style={{ height: "100%", width: "80%",justifyContent:"center" }}>
    <Text><Text style={{fontWeight:"bold"}}>May Mess</Text> have send you a message</Text>

</View>
<View style={{height: "100%", width: "10%",flexDirection:"row",alignItems:"center" }}>
<MaterialCommunityIcons name="clock" size={12} color="lightgrey" />
<Text style={{fontSize:8,color:"lightgrey"}} >1 min</Text>
</View>

</View>




     
<View style={{height:160,width:"100%",backgroundColor:"white",flexDirection:"column",marginBottom:2}}>
    <View style={{ height: "25%", width: "100%", backgroundColor: "white", flexDirection: "row",marginBottom:2 }}>

<View style={{height: "100%", width: "10%", justifyContent: "center", alignItems: "center" }}>
    <View style={{ height: 20, width: 20, borderRadius: 10,backgroundColor:"lightgrey" }}>

    </View>
</View>
<View style={{ height: "100%", width: "80%",justifyContent:"center" }}>
    <Text><Text style={{fontWeight:"bold"}}>Antony Mess</Text> like your photo</Text>

</View>
<View style={{height: "100%", width: "10%",flexDirection:"row",alignItems:"center" }}>
<MaterialCommunityIcons name="clock" size={12} color="lightgrey" />
<Text style={{fontSize:8,color:"lightgrey"}} >1 min</Text>
</View>

</View>

<View style={{height:"75%",width:"100%",justifyContent:"center",alignItems:"center"}}>
<View style={{backgroundColor:"grey",width:"70%",height:"90%"}}>

</View>
</View>

</View>




<View style={{ height: 30, width: "100%", backgroundColor: "white", flexDirection: "row",marginBottom:2 }}>

<View style={{height: "100%", width: "10%", justifyContent: "center", alignItems: "center" }}>
    <View style={{ height: 20, width: 20, borderRadius: 10,backgroundColor:"lightgrey" }}>

    </View>
</View>
<View style={{ height: "100%", width: "80%",justifyContent:"center" }}>
    <Text><Text style={{fontWeight:"bold"}}>Ahmad Khalid</Text> have send you a message</Text>

</View>
<View style={{height: "100%", width: "10%",flexDirection:"row",alignItems:"center" }}>
<MaterialCommunityIcons name="clock" size={12} color="lightgrey" />
<Text style={{fontSize:8,color:"lightgrey"}} >1 min</Text>
</View>

</View>



     
<View style={{height:160,width:"100%",backgroundColor:"white",flexDirection:"column",marginBottom:2}}>
    <View style={{ height: "25%", width: "100%", backgroundColor: "white", flexDirection: "row",marginBottom:2 }}>

<View style={{height: "100%", width: "10%", justifyContent: "center", alignItems: "center" }}>
    <View style={{ height: 20, width: 20, borderRadius: 10,backgroundColor:"lightgrey" }}>

    </View>
</View>
<View style={{ height: "100%", width: "80%",justifyContent:"center" }}>
    <Text><Text style={{fontWeight:"bold"}}>Antony</Text> tagged you in a Udemy course </Text>

</View>
<View style={{height: "100%", width: "10%",flexDirection:"row",alignItems:"center" }}>
<MaterialCommunityIcons name="clock" size={12} color="lightgrey" />
<Text style={{fontSize:8,color:"lightgrey"}} >1 min</Text>
</View>

</View>

<View style={{height:"75%",width:"100%",justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
<View style={{width:"50%",height:"90%",justifyContent:"center",alignItems:"flex-end"}}>
    <View style={{backgroundColor:"grey",height:"90%",width:"70%",marginRight:10}}>

    </View>

</View>

<View style={{width:"50%",height:"90%",justifyContent:"center"}}>
<Text style={{fontWeight:"bold"}}>Intoduction to UI/UX</Text>
<Text style={{color:"lightgrey",fontSize:12}}>Powered by Tonny Ramous</Text>
<Text style={{fontSize:11}}>This course has 3hours+ duration</Text>
<Text style={{fontSize:13}}>40 Videos</Text>
</View>


</View>

</View>




<View style={{ height: 30, width: "100%", backgroundColor: "white", flexDirection: "row",marginBottom:2 }}>

<View style={{height: "100%", width: "10%", justifyContent: "center", alignItems: "center" }}>
    <View style={{ height: 20, width: 20, borderRadius: 10,backgroundColor:"lightgrey" }}>

    </View>
</View>
<View style={{ height: "100%", width: "80%",justifyContent:"center" }}>
    <Text><Text style={{fontWeight:"bold"}}>Ahmad Khalid</Text> have send you a message</Text>

</View>
<View style={{height: "100%", width: "10%",flexDirection:"row",alignItems:"center" }}>
<MaterialCommunityIcons name="clock" size={12} color="lightgrey" />
<Text style={{fontSize:8,color:"lightgrey"}} >1 min</Text>
</View>

</View>



<View style={{ height: 30, width: "100%", backgroundColor: "white", flexDirection: "row",marginBottom:2 }}>

<View style={{height: "100%", width: "10%", justifyContent: "center", alignItems: "center" }}>
    <View style={{ height: 20, width: 20, borderRadius: 10,backgroundColor:"lightgrey" }}>

    </View>
</View>
<View style={{ height: "100%", width: "80%",justifyContent:"center" }}>
    <Text><Text style={{fontWeight:"bold"}}>Ahmad Khalid</Text> have send you a message</Text>

</View>
<View style={{height: "100%", width: "10%",flexDirection:"row",alignItems:"center" }}>
<MaterialCommunityIcons name="clock" size={12} color="lightgrey" />
<Text style={{fontSize:8,color:"lightgrey"}} >1 min</Text>
</View>

</View>





</ScrollView>


            </View>

        </View>
    )
}

export default Notifications


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Main: {
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