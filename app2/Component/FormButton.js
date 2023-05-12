import React from 'react';
import { COLORS } from '../utils/Constant/Color';
import {FONTS} from '../utils/Constant/Font';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';
const FormButton =({btnTitle,backgroundColor,...rest})=>{
  let bgcolor=backgroundColor
return(
    <TouchableOpacity  style={[styles.btn,{ backgroundColor:bgcolor}]}   {...rest} 
    
    
    >
        <Text style={styles.btnText}>{btnTitle}</Text>
    </TouchableOpacity>
);
};export default FormButton;

const styles=StyleSheet.create({
    btnText: {
        color: 'white',
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