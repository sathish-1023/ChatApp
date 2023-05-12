import React ,{useContext}from 'react'
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import ChatScreen from './ChatScreen';
import HomeStackNavigator from './HomeStackNavigator'
import MyRewardsStackNavigator from './MyRewardsStackNavigator'
import LocationsStackNavigator from './LocationsStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import Icon from 'react-native-vector-icons/Ionicons';
import {View ,TouchableOpacity} from 'react-native';
import AddPostScreen from '../Component/AddPostScreen';
import Login from '../Screen/Auth/LoginScreen';
import Navigation from '../../app/Service/Navigation'
import { background } from 'native-base/lib/typescript/theme/styled-system'
import { AuthContext } from '../Naviagation/AuthProvider';
const Stack = createStackNavigator()

const DrawerNavigator = () => {
  const {logout}=useContext(AuthContext);
const getTabBarVisibility=(route)=>{
  const routeName=route.state?route.state.routes[route.state.index].name:'';
  if(routeName==='Chat'){
    return false;
  }
  return true;
};
  return (
            <Stack.Navigator screenOptions={({navigation,route})=>({
              //headerShown:false,
              headerRight:()=>(
                <>
                <View style={{flexDirection:'row',marginLeft:10}}>
                <View style={{marginLeft:10 ,background:'green'}}>
                 <TouchableOpacity onPress={()=>navigation.navigate('AddPostScreen')}>
                 <Icon name="md-add-circle-outline" size={40} />
                 </TouchableOpacity>
                 </View>
                  <View style={{marginLeft:20,background:'green'}}>
                  
                  <Button 
          title="logout"
          onPress={() =>{logout();
            navigation.navigate('Login');
           

          } 
          
          
          }
        />
        </View>
        </View>

                  </>
   ) })}>
        <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
      <Stack.Screen name="HomeStack" component={HomeStackNavigator} />
      <Stack.Screen name="MyRewardsStack" component={MyRewardsStackNavigator} />
      <Stack.Screen name="LocationsStack" component={LocationsStackNavigator} />
      <Stack.Screen name="AddPostScreen" component={AddPostScreen} screenOptions={{headerShown:false,}}/>
      
      <Stack.Screen name="Login" component={Login} 
                    options={{header:()=>null}}/>
      <Stack.Screen name="ChatScreen" component={ChatScreen} 
      
      options={({route})=>({
       // tabBarVisible:getTabBarVisibility(route),
       tabBarVisible:route.state && route.state.index===0,
        title:route.params.userName,
        headerBackTitleVisible:false,
      })}
      
      />
      
      
      
      
    </Stack.Navigator>
  )
}

export default DrawerNavigator