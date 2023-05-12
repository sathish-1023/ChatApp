import React from "react";
import {View,Text,StyleSheet} from 'react-native';

const Onboaring=()=>{
    return(
        <View style={styles.container}>
            <Text> On Boarding page</Text>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

});
export default Onboaring;