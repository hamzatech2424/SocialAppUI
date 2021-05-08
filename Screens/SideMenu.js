import React from "react"
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
  import {View,Text,StyleSheet, Touchable, TouchableOpacity,Dimensions} from "react-native"
  import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Drawer } from "react-native-paper";


const vw = Dimensions.get("window").width/100
const vh = Dimensions.get("window").width/100



  const SideMenu = (props) => {
      return(


<View style={{flex:1}}>




<DrawerContentScrollView  {...props} >

<View style={{width:"100%",backgroundColor:"purple",height:50*vh}}>


<View style={{width:"100%",height:30*vh,  justifyContent:"center",paddingLeft:20}}>

<Icon name="account-circle" size={70} color="white"  />


</View>




<View style={{width:"100%",height:20*vh,paddingLeft:20}}>
<Text style={{color:"white"}}>Lenora Medina</Text>
<Text style={{color:"white"}}>@Melina</Text>
</View>


</View>




<Drawer.Section>

<DrawerItem
label="Settings"
// onPress={()=>{props.navigation.navigate("")}}
/>

<DrawerItem
label="Notifications"
onPress={()=>{props.navigation.navigate("Notifi")}}
/>


<DrawerItem
label="Location services"
// onPress={()=>{props.navigation.navigate("")}}
/>


<DrawerItem
label="Invite friends"
// onPress={()=>{props.navigation.navigate("")}}
/>


<DrawerItem
label="Help"
// onPress={()=>{props.navigation.navigate("")}}
/>

</Drawer.Section>

</DrawerContentScrollView>





<Drawer.Section>
<DrawerItem
style={{backgroundColor:"purple",width:"70%",alignSelf:"center",borderRadius:20,justifyContent:"center"}}
labelStyle={{textAlign:"center",color:"white",width:50*vw}}
label="Sign Out"
onPress={()=>{props.navigation.navigate("")}}
/>
    
</Drawer.Section>
</View>



)
  }


  export default SideMenu