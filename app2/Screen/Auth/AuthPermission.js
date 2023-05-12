import React ,{Component} from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { Permission,PERMISSIONS_TYPE } from './AppPermission';
export default class App extends Component{
    componentDidMount(){
       // Permission.requestMultiple([PERMISSIONS_TYPE.microphone,PERMISSIONS_TYPE.photo])
       Permission.requestNotifyPermission()
    }
    render(){
        return(

        )
    }
}