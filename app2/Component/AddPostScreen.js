import React, { Component,useState,useContext } from 'react';
import { Platform, StyleSheet, View ,Alert, ActivityIndicator,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { InputField, InputWrapper,SubmitBtn,SubmitBtnText,AddImage, StatusWrapper } from "../Screen/styles/AddPost";
import ActionButton from 'react-native-action-button';
import ImagePicker from 'react-native-image-crop-picker';
import { Container } from '../Screen/styles/FeedStyles';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../Naviagation/AuthProvider';

const AddPostScreen=()=> {
  const {user}=useContext(AuthContext);
   const [image,setImage]=useState(null);
    const [uploading,setUploading]=useState(false);
    const[transfered,setTransfered]=useState(0);
    const[post,setPost]=useState(null);
   // const[imageUrl,setImageUrl]=useState(null);
   const takePhotoFromCamera=()=>{
    ImagePicker.openCamera({
      width:1200,
      height:780,
      cropping:true,
    }).then((image)=>{
      console.log(image);
      const imageUri=Platform.OS ==='ios'? image.sourceURL:image.path;
      setImage(imageUri);
    })
    .catch((error)=>{
      console.log(e);
    }) 
   };

   const choosePhotoFromLibrary=()=>{
    ImagePicker.openPicker({
      width:1200,
      height:780,
      cropping:true,
    }).then((image)=>{
      console.log(image);
      const imageUri=(Platform.OS==='ios'?image.sourceURL:image.path);
      setImage(imageUri);
     

    });
   };
   const SubmitPost=async ()=>{
    
    const imageUrl=await uploadImage();
    console.log('Image Url:',imageUrl);
    
     firestore()
     .collection('posts')
     .add({
      userId:user.uid,
      
      postTime:firestore.Timestamp.fromDate(new Date()),
      post:post,
      postImg:imageUrl,
      likes:null,
      comments:null,

     })
     .then(()=>{
      console.log('post is Submitted Sucessful')
      Alert.alert(
        'Post published',
        'your post has been published successfull',
      );
    
      setPost(null);
     })
     .catch((error) =>{
      console.log('Some thing went wromg with added post to fire store',error);
     });

    
   }
   const uploadImage=async ()=>{
   
    if(image==null){
      return null;
    }
    const uploadUri=image;
    let filename=uploadUri.substring(uploadUri.lastIndexOf('/')+1);
   //const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/${filename}`;
    const extension=filename.split('.').pop();
    const name=filename.split('.').slice(0,-1).join('.');
    filename=name+Date.now()+'.'+extension;

    setUploading(true);
    setTransfered(0);
   const storageRef= storage().ref(`photos/${filename}`)
   const task=storageRef.putFile(uploadUri);
//set transfered
    
task.on('state_changed', taskSnapshot => {
  console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
  setTransfered(
Math.round(taskSnapshot.bytesTransferred/taskSnapshot.totalBytes)*100
  );
});


task.then(() => {
  console.log('Image uploaded to the bucket!');
});

    try{
      await task;

      const url=await storageRef.getDownloadURL();
    
      console.log(url);
      setUploading(false);
      Alert.alert(
        'Image uploaded',
        'Your image has been uploaded to firebase Cloud Storage Success!'
      );
      return url;
    }catch(e){
      console.log(e);
      return null;
    }
    setImage(null);
   }
    return (
      <Container>
    <InputWrapper>
      <InputWrapper>
      {image !=null ?<AddImage source={{uri:image}}/>:null}
      <InputField 
      placeholder="what's on your mind??"
      multiline
      numberOfLines={4}
      value={post}
      onChangeText={(content)=>{setPost(content)}}
      />
      {uploading?(
        <StatusWrapper>
          <Text>{transfered} % Completed</Text>
          <ActivityIndicator size='large' color='#0000ff'/>
        </StatusWrapper>
      ):(<SubmitBtn onPress={SubmitPost}>
        <SubmitBtnText>Post</SubmitBtnText>
        
      </SubmitBtn>)
      }
      
      </InputWrapper>
      <ActionButton buttonColor="rgba(231,76,60,1)">
      <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
        <Icon name="md-create" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item buttonColor='#3498db' title="upload form files" onPress={choosePhotoFromLibrary}>
        <Icon name="md-attach-outline" style={styles.actionButtonIcon} />
      </ActionButton.Item>
      <ActionButton.Item buttonColor='#1abc9c' title="take photo" onPress={takePhotoFromCamera}>
        <Icon name="md-camera-outline" style={styles.actionButtonIcon} />
      </ActionButton.Item>
    </ActionButton>
    </InputWrapper>
    </Container>
    );
  };

export default AddPostScreen;

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

