
import React ,{useState,useContext}from 'react';
//import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input ,Image,Button} from 'react-native-elements';
import {View ,StyleSheet,TouchableOpacity,Text} from 'react-native';
import { AuthContext } from '../../Naviagation/AuthProvider';
import FormButton from '../../Component/FormButton';
const Login=({navigation})=>{
const [email,setEmail]=useState('');
const[pass,setPass]=useState('');
const{login,fblogin,googlelogin}=useContext(AuthContext);
  return(
    
    
  <View style={styles.container}>
<View>
    
    </View>
<Input
  placeholder='username'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
  onChangeText={(value)=>setEmail(value)}
  errorStyle={{ color: 'red' }}
  errorMessage=''
/>
    <Input placeholder="Password" secureTextEntry={true}
   leftIcon={ <Icon
    name='lock'
    size={24}
    color='black'
    
  />
   }
   onChangeText={(value)=>setPass(value)}
      errorStyle={{ color: 'red' }}
       errorMessage=''
    />
    <FormButton
            btnTitle='SignIn' 
            backgroundColor='blue'
            onPress={()=>login(email,pass)}
    />
    
     <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
      <Text > create an account</Text>
     </TouchableOpacity>

     
  <Icon.Button style={styles.cont}
    name="facebook"
    backgroundColor="#3b5998"
    onPress={()=>fblogin()}
     width='100%'
    
  >
    Login with Facebook
  </Icon.Button>


  <Icon.Button style={styles.cont}
    name="google"
    backgroundColor="green"
  onPress={()=>googlelogin()}
    
  >
    Login with Google
  </Icon.Button>

  </View>

    
  );
}
export default Login;
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  cont:{
    width: '100%',
    margin:10,
    padding:3,
  }
});