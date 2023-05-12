import React, { useContext } from "react";
import {View,Text,Button,StyleSheet} from 'react-native';
import { AuthContext } from "../../Naviagation/AuthProvider";
import auth from '@react-native-firebase/auth';

function Home({navigation}) {
  const {logout,user}=useContext(AuthContext);

    return (
      
        <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>Welcome {user.uid}</Text>

        <Button
          title="Go to PostScreen"
          onPress={() => navigation.navigate('AddPostScreen')}
        />
         <Button
          title="logout"
          onPress={() =>{logout();
           

          } 
          
          
          }
        />
        
      </View>
    );
  }
export default Home;
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center', justifyContent: 'center',
  }
});