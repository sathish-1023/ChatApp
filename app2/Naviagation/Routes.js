import React,{useContext,useState,useEffect} from 'react';
import {NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { AuthContext } from './AuthProvider';
import AppStack from './AppStack';
import auth from '@react-native-firebase/auth';
const Routes=()=>{
    const {user,setUser} =useContext(AuthContext);
    const {initializing,setInitializing}=useState(true);
    const onAuthStateChanged=(user)=>{
        setUser(user);
        if(initializing ==false){
            setInitializing=true;
        }
    }

    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    },[]);
    if(initializing){
        return null;
    }
return(
<NavigationContainer>
    {user?<AppStack/>:<AuthStack/>}
</NavigationContainer>
);
};
export default Routes;