
import React ,{useState,useContext}from 'react';
//import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input ,Image,Button, registerCustomIconType} from 'react-native-elements';
import {View ,StyleSheet,TouchableOpacity,Text, Alert} from 'react-native';
import { AuthContext } from '../../Naviagation/AuthProvider';
import FormButton from '../../Component/FormButton';
const Register=({navigation})=>{
const [email,setEmail]=useState('');
const[pass,setPass]=useState('');
const{register,fblogin,googlelogin}=useContext(AuthContext)
  return(
    
    
  <View style={styles.container}>
<Text style={styles.text}>Registration</Text>
<Input
  placeholder='email'
  autoCapitalize='none'
  keyboardType='email-address'
  autoCorrect={false}
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
  onChangeText={(useremail)=>setEmail(useremail)}
  errorStyle={{ color: 'red' }}
  errorMessage='error'
/>
    <Input placeholder="Password" secureTextEntry={true}
   leftIcon={ <Icon
    name='lock'
    size={24}
    color='black'
    
  />
   }
   onChangeText={(userpass)=>setPass(userpass)}
      errorStyle={{ color: 'red' }}
       errorMessage='error'
    />
    <FormButton
          btnTitle='SignUp' 
          backgroundColor='blue'
          onPress={()=>register(email,pass)}
    
    />
  
     <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
      <Text style={{color:'blue'}}> create have account?login</Text>
     </TouchableOpacity>


  <Icon.Button style={styles.cont}
    name="facebook"
    backgroundColor="#3b5998"
    onPress={()=>fblogin()}
    
  >
    Login with Facebook
  </Icon.Button>


  <Icon.Button style={styles.cont}
    name="google"
    backgroundColor="green"
  // 
  onPress={()=>googlelogin()}
  >
    Login with Google
  </Icon.Button>

  </View>

    
  );
}
export default Register;
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  cont:{
    width: '100%',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  text:{
      fontSize:30,
      color:"blue",
      fontFamily:'Arial',
      fontVariant:'bold'
  }
});