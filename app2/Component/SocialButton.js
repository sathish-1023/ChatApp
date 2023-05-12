import React from 'react';
import { COLORS } from '../utils/Constant/Color';
import {FONTS} from '../utils/Constant/Font';
import {TouchableOpacity,Text,StyleSheet,View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const SocialButton =({btnTitle,btnType,color,backgroundColor,...rest})=>{
    let bgcolor=backgroundColor;
return(
  <View>
    <TouchableOpacity     {...rest} 
    style={[styles.btn,{backgrounColor:bgcolor}]}
    >
        <View style={styles.btnIconView}>
            <FontAwesome name={btnType} size={22} color={color}/>
        </View>
        <View style={[]}>
        <Text style={[{color:color}]}>{btnTitle}</Text>
        </View>
        
    </TouchableOpacity>
    </View>
);
};export default SocialButton;

const styles=StyleSheet.create({
  btntext: {
   // borderBottomColor: COLORS.white,
    //flex: 1,
    color: COLORS.Black,
    paddingLeft: 10,
    fontFamily : FONTS.Regular,
    fontSize:20,
  },
  container: {
    borderRadius: 30,
    height:48,
   // flexDirection: 'row',
   // alignItems: 'center',
   // backgroundColor: COLORS.white,
    marginBottom:10,
    elevation: 2,
  },
  btnIconView: {
    width: 50,
    justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor : COLORS.theme,
    height: '100%',
    //borderRadius: 30,
    //alignSelf: 'center',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 2,
  },
  btnText: {
    color: '#fff',
   // fontFamily : FONTS.SemiBold,
    fontSize: 20,
    marginTop: 2,
   
    fontVariant:'bold',
  },
  btn: {
   // backgroundColor : COLORS.theme,
    width: '100%',
    height: 50,
    borderRadius: 30,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});