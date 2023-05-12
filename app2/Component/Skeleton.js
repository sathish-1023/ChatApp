
import React from 'react'
import { View, ScrollView,Text } from 'react-native'
//import { createStackNavigator } from '@react-navigation/stack'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


const Skeleton=()=>{
    return(
        <ScrollView style={{flex:1,}} contentContainerStyle={{alignItems:'center'}}>
  <SkeletonPlaceholder borderRadius={4}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 60, height: 60, borderRadius: 50}} />
        <View style={{marginLeft: 20}}>
         
          <Text style={{marginTop: 6, fontSize: 14, lineHeight: 18}}>Hello world</Text>
        </View>
      </View>
      <View>
      <View style={{ marginTop:10,marginBottom:30,}}/>
        <View style={{width:300,height:20,borderRadius:4}}/>
        <View style={{marginTop:6,height:20,width:350,borderRadius:4}}/>
        <View style={{marginTop:6,height:250,width:300,borderRadius:4}}/>
      </View>
    </SkeletonPlaceholder>

    <SkeletonPlaceholder borderRadius={4}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{width: 60, height: 60, borderRadius: 50}} />
        <View style={{marginLeft: 20}}>
         
          <Text style={{marginTop: 6, fontSize: 14, lineHeight: 18}}>Hello world</Text>
        </View>
      </View>
      <View>
      <View style={{ marginTop:10,marginBottom:30,}}/>
        <View style={{width:300,height:20,borderRadius:4}}/>
        <View style={{marginTop:6,height:20,width:350,borderRadius:4}}/>
        <View style={{marginTop:6,height:250,width:300,borderRadius:4}}/>
      </View>
    </SkeletonPlaceholder>
    </ScrollView>

    );
};export default Skeleton;
