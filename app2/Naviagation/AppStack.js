import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Auth/HomeScreen';
import Dashboard from '../Home/Dashboard';
import AddPostScreen from '../Component/AddPostScreen';
import DrawerNavigator from '../Home/DrawerNavigator';
const Stack=createStackNavigator();

const AppStack=()=>{
    return(
        <Stack.Navigator initialRouteName={"Dashboard"} screenOptions={{
            headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Dashboard" component={Dashboard}
       
        /> 
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}/> 
        </Stack.Navigator>
    );

};
export default AppStack;
