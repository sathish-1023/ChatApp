import React from 'react';
import { COLORS } from '../utils/Constant/Color';
import {FONTS} from '../utils/Constant/Font';
import {View,TextInput,StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
const FormInput =({lableValue,placeHolderText,iconType,...rest})=>{
return(
    <View style={styles.inputContainer}>
        <View style={styles.inputIconView}>
        <AntDesign name={iconType} size={25} color='#8666'/>
        </View>
        <TextInput
        style={styles.inputs}
        numberOfLines={1}
        value={lableValue}
        placeholder={placeHolderText}
        placeholderTextColor="#666"
        {...rest}
        />
    </View>
);
};export default FormInput;

const styles=StyleSheet.create({
    inputs: {
        borderBottomColor: COLORS.white,
        flex: 1,
       // color: COLORS.Black,
        paddingLeft: 10,
        fontFamily : FONTS.Regular,
        fontSize:20,
      },
      inputContainer: {
        borderRadius: 30,
        height:48,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        marginBottom:10,
        elevation: 2,
      },
      inputIconView: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor : COLORS.theme,
        height: '100%',
        borderRadius: 30,
        alignSelf: 'center',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        elevation: 2,
      },
      
});