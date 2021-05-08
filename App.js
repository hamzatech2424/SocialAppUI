import React from 'react'
import {View,Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ChooseProfession from "./Screens/ChooseProfession"
import Login  from "./Screens/Login"
import SignUp from "./Screens/SignUp"
import AddaProfilePic from "./Screens/AddaProfilePic"
import Home from './Screens/Home';
import EventView from "./Screens/EventView"
import Menu from "./Screens/Menu"
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenWithButtons from './Screens/ScreenWithButtons';
import UsersProfile from './Screens/UsersProfile';
import SharePost from './Screens/SharePost';
import Comments from './Screens/Comments';
import Gallery from './Screens/Gallery';
import PostCreation from './Screens/PostCreation';
import CreateEvent from './Screens/CreateEvent';
import CreateJob from './Screens/CreateJob';
import Events from './Screens/Events';
import JobsView from './Screens/JobsView';
import SearchScreen from './Screens/SearchScreen';
import Notifications from './Screens/Notifications';
import Chat from './Screens/Chat';
import GoToConversation from './Screens/GoToConversation';
import FriendsProfile from './Screens/FriendsProfile';
import AddFriend from './Screens/AddFriend';
import JobsForView from './Screens/JobsForView';
import Like from './Screens/Like';
import SideMenu from './Screens/SideMenu';


const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const Drawer = createDrawerNavigator();




const ChatStack = () => {

  return(
 <Stack.Navigator>
 <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}} /> 
 <Stack.Screen name="Convo" component={GoToConversation} options={{headerShown: false}}  />

 </Stack.Navigator>  

  )

}




const MenuScreenStack = () => {

  return(
 <Stack.Navigator>
  <Stack.Screen name="JobScr" component={Home} options={{headerShown: false}}  />
 <Stack.Screen name="ChatSta" component={ChatStack} options={{headerShown: false}} /> 
 <Stack.Screen name="Notifi" component={Notifications} options={{headerShown: false}}  />
 <Stack.Screen name="Post" component={PostCreation} options={{headerShown: false}}  />
 <Stack.Screen name="Gal" component={Gallery} options={{headerShown: false}}  />
 <Stack.Screen name="CreateEve" component={CreateEvent} options={{headerShown: false}}  />
 <Stack.Screen name="AddFri" component={AddFriend} options={{headerShown: false}}  />
 <Stack.Screen name="CreateJob" component={CreateJob} options={{headerShown: false}}  />
 <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false}}  />
 <Stack.Screen name="CJob" component={CreateJob} options={{headerShown: false}}  />
 <Stack.Screen name="Friend" component={FriendsProfile} options={{headerShown: false}}  />
 <Stack.Screen name="UserPro" component={UsersProfile} options={{headerShown: false}} />
 <Stack.Screen name="Lik" component={Like} options={{headerShown: false}} />
 <Stack.Screen name="Com" component={Comments} options={{headerShown: false}} />
 <Stack.Screen name="Share" component={SharePost} options={{headerShown: false}} />

 </Stack.Navigator>  

  )

}


const JobStack = () => {
  return (
<Stack.Navigator>
  <Stack.Screen name="JobScr" component={JobsView} options={{headerShown: false}}  />
  <Stack.Screen name="JobVie" component={JobsForView} options={{headerShown: false}}  />
 </Stack.Navigator>  

  )
}




const BottomTabNavigation = () =>{
  return(
        <Tab.Navigator  initialRouteName="Home" activeColor="purple" inactiveColor="grey" barStyle={{ backgroundColor: 'white'}} >
            
            <Tab.Screen name="Home" component={MenuScreenStack}   options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home-variant-outline" color={color} size={25} />
            ),
          }}  />


 <Tab.Screen name="User" component={UsersProfile}   options={{
            tabBarLabel: 'User',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={25} />
            ),
          }}  />

<Tab.Screen name="JobS" component={JobStack}   options={{
            tabBarLabel: 'Jobs Search',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="feature-search" color={color} size={25} />
            ),
          }}  />

<Tab.Screen name="Event" component={EventView}   options={{
            tabBarLabel: 'Event View',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar-check-outline" color={color} size={25} />
            ),
          }}  />

<Tab.Screen name="Men" component={Menu}   options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="menu" color={color} size={25}
              
              />
            ),
          }} 
         
          listeners={({navigation})=>({
            tabPress: e =>{
              navigation.toggleDrawer()
            }
          })}
          
          />
            
          
  </Tab.Navigator> 

  )
}


const App = () => {
  return (
    <NavigationContainer>

<Drawer.Navigator initialRouteName="Home" drawerContent={props => <SideMenu {...props} />} >
        <Drawer.Screen name="Home" component={BottomTabNavigation} />
       
</Drawer.Navigator>





          

  </NavigationContainer>
  )
}

export default App





