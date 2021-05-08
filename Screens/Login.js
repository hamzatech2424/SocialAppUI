import React from 'react'
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from "react-native"
import Icon from 'react-native-vector-icons/dist/MaterialIcons';



const Login = () => {
    return (
        <View style={styles.container} >
            <View style={styles.Header} ></View>


            <View style={styles.Middle} >

                <View style={{ width: "100%", height: "20%",marginVertical:"1%" }}>
                    <View style={{ width: "80%", height: "50%",  alignSelf: "center",flexDirection:"row",marginBottom:"2%" }}>
                        <View style={{width:"20%", height:"100%",justifyContent:"center",alignItems:"center"}}>
                        <Icon name="email" size={40} color="purple" />
                        </View>

                        <View style={{width:"80%", height:"100%",justifyContent:"center"}}>
                            <Text>Email address:</Text>
                        </View>
                    </View>

                    <View style={{ width: "80%", height: "50%", alignSelf: "center",justifyContent:"center",alignItems:"center" }}>
                      
                      <TextInput placeholder="Enter your Email Address Here" style={{width:"92%",height:"100%",borderWidth:1,borderColor:"grey",paddingLeft:"10%",borderRadius:5}} />

                    </View>

                </View>



                <View style={{ width: "100%", height: "20%",marginVertical:"5%" }}>
                    <View style={{ width: "80%", height: "50%",  alignSelf: "center",flexDirection:"row" }}>
                        <View style={{width:"100%", height:"100%",justifyContent:"center",paddingLeft:"5%"}}>
                            <Text>Password:</Text>
                        </View>
                    </View>

                    <View style={{ width: "80%", height: "50%", alignSelf: "center",justifyContent:"center",alignItems:"center" }}>
                      
                      <TextInput placeholder="*******" style={{width:"92%",height:"100%",borderWidth:1,borderColor:"grey",paddingLeft:"10%",borderRadius:5}} />

                    </View>

                </View>

                <View style={styles.nextBtnView}>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    style={styles.nextbtnStyle}>
                        <Text style={{color:"white"}}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={{width:"60%",height:"10%",alignSelf:"center",flexDirection:"row",marginVertical:"5%"}}>
                    <View style={{width:"50%",height:"100%",flexDirection:"column"}}>
                        <Text style={{color:"purple"}}>forget</Text>
                        <Text style={{color:"purple"}}>Password?</Text>
                    </View>
                    <View style={{width:"50%",height:"100%",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{color:"#846FAA"}}>Click Here!</Text>
                    </View>

                </View>


            </View>

            <View style={styles.Footer} >
                <View style={{width:"35%",height:"20%",alignSelf:"center"}}>
                    <Text style={{color:"purple",fontSize:15}}>For new Account</Text>
                </View>

                <View style={{width:"22%",height:"22%",alignSelf:"center",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{color:"#846FAA",fontSize:15}}>Sign Up</Text>
                </View>
            </View>
        </View>
    )
}

export default Login


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Header: {
        width: "100%",
        height: "15%",
        // backgroundColor: "yellow"
    },
    Middle: {
        width: "100%",
        height: "65%",
        // backgroundColor: "green"
    },
    nextBtnView: {
        width: "100%",
        height: "12%",
        // backgroundColor: "blue",
        alignItems:"center",
    },
    nextbtnStyle:{
        width:"40%",
        backgroundColor:"purple",
        height:"100%",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
    },
    Footer: {
        width: "100%",
        height: "20%",
        // backgroundColor: "red"
    },

})