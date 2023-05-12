import  React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { View, Text,Button ,Image,TouchableOpacity} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
//import Navigation from './app/Service/Navigation';
//import icons from 'react-native-vector-icons/FontAwesome';
import Login from '../Screen/Auth/LoginScreen';
import Home from '../Screen/Auth/HomeScreen';
import Register from '../Screen/Auth/RegisterScreen';
import OnBoarding from '../Screen/Auth/OnBoardingScreen';
//import { HeaderStyleInterpolators } from '@react-navigation/stack'; 
import Dashboard from "../Home/Dashboard";
  
const Stack = createNativeStackNavigator();
  
  function AuthStack() {
    const [isFirstLaunch,setIsFirstLaunch]=React.useState(null);
   
    React.useEffect(()=>{
      AsyncStorage.getItem('alreadyLaunched') .then(value=>{
        if(value===null){
            AsyncStorage.setItem('alreadyLaunched','true');
            setIsFirstLaunch(true);
        }else{
            setIsFirstLaunch(false);
        }
      });


      GoogleSignin.configure({
        webClientId: "719390174812-j1fo9pflvpcm1c6othpfjvdckaineljs.apps.googleusercontent.com",
    
      });
    },[]);
    let routeName='OnBoarding';
            if(isFirstLaunch==null){
               routeName="OnBoarding"
            }else if(isFirstLaunch===true){
                routeName='OnBoarding';
        }else{
                routeName='Login';
        }
        return (
            
              <Stack.Navigator initialRouteName={routeName}  screenOptions={{
                headerShown: false,
              }}>
                 <Stack.Screen name="Home" component={Home}/> 
                <Stack.Screen name="OnBoarding" component={OnBoarding} 
                    options={{header:()=>null}}/>  
                <Stack.Screen name="Login" component={Login} 
                    options={{header:()=>null}}/>
                <Stack.Screen name="SignUp" component={Register} />
                <Stack.Screen name="Dashboard" component={Dashboard} /* 
                  options={(navigation)=>({
                    title:"",
                    headerStyle:{
                      backgroundColor:'lightgreen',
                      shadowColor:"white",
                      elevation:0,
                    },
                    headerLeft:()=>(
                        <View style={{marginLeft:10}}>
                          <FontAwesome.Button
                          name='long-arrow-back'
                          size={25}
                          backgroundColor='lightblue'
                          color='red'
                          />
                        </View>
                    ),
                  })
                  }*/
                  />
              </Stack.Navigator>
    
          );

  };


export default AuthStack;
