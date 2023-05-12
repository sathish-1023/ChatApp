
import { Platform } from 'react-native';
import {request,check, PERMISSIONS, RESULTS} from 'react-native-permissions';


const PLATFORM_MICROPHONE_PERMISSIONS={
ios:PERMISSIONS.IOS.MICROPHONE,
android:PERMISSIONS.ANDROID.RECORD_AUDIO,
}


const PLATFORM_PHOTO_PERMISSIONS={
  ios:PERMISSIONS.IOS.PHOTO_LIBRARY,
  android:PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  }

  const PLATFORM_SEND_SMS_PERMISSIONS={
    ios:null,
    android:PERMISSIONS.ANDROID.SEND_SMS,
    }


const REQUEST_PERMISSION_TYPE={
    microphone:PLATFORM_MICROPHONE_PERMISSIONS,
    photo:PLATFORM_PHOTO_PERMISSIONS,
    send_sms:PLATFORM_SEND_SMS_PERMISSIONS,
    
}
const PERMISSIONS_TYPE={
    microphone:'microphone',
    photo:'photo'
    SEND_SMS:'send_sms'
}

class AppPermission{
 // console.log("AppPermission checkPermission type:",type);
    checkPermission=async(type):Promise<boolean> =>{
        const permissions=REQUEST_PERMISSION_TYPE[TYPE][Platform.OS]
        if(!permissions){
            return true;
        }
        try{
            const result=await check(permissions)
            if(result===RESULTS.GRANTED) return true;
            return this.requestPermission(permissions) //request permission
        }catch(error){
              return false  
        }
    }
    requestPermission=async (permissions):Promise<boolean> =>{
        try{
          const results=await this.request(permissions);
            return result==RESULTS.GRANTED return true;
        }catch(error){
            return false
        }
    }
    requestMutliple=async(types):Promise<boolean> =>{
      // console.log("AppPermission checkPermission type:",type);
      const result=[]
      for(const type of types){
        const permission=REQUEST_PERMISSION_TYPE[TYPE][Platform.OS]
        if(!permissions){
          const result=await this.requestPermission(permission)
          results.push(result)
      }
      }
      for(const result of results){
        if(!result){
          return false;
      }
      }
      return true
    }
    requsetNotifyPermission=async ()=>{
      if(Platform.OS ==='android'){
        return true
      }
      const {status,settings}=await this.requestNotifications(['alert','sound','badge'])
      console.log("AppPermission requestNotifyPermission status settings:",status,settings);
      return status===RESULTS.GRANTED
    }
}

const Permisson=new AppPermission()
export {Permisson,PERMISSIONS_TYPE}





/*

check(PERMISSIONS.IOS.LOCATION_ALWAYS)
  .then((result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log('This feature is not available (on this device / in this context)');
        break;
      case RESULTS.DENIED:
        console.log('The permission has not been requested / is denied but requestable');
        break;
      case RESULTS.LIMITED:
        console.log('The permission is limited: some actions are possible');
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  })
  .catch((error) => {
    // …
  });
  */