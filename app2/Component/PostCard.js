import React, { useContext }  from 'react';
import moment from 'moment';
import { AuthContext } from '../Naviagation/AuthProvider';
import {Container,Card,UserImg,UserInfo, UserName, 
    UserInfoText, PostTime, PostText, PostImage, Interaction,
     InteractionWrapper, InteractionText,Divider} from '../Screen/styles/FeedStyles';
  
  import Ionicons from 'react-native-vector-icons/Ionicons';
import ProgressiveImage from './ProgressiveImage';
  
const PostCard=({item,onDelete})=>{
  const{user,logout}=useContext(AuthContext);
  likeIcon=item.liked ? 'heart':'heart-outline';
  likeIconColor=item.liked ? 'blue':'#333';
  if(item.likes==1){
    likeText='1 Like';

  }else if(item.likes>1){
    likeText=item.likes+' Likes'
  }else{
      likeText='Like';
  }
 //comments
  if(item.comments==1){
    commentText='1 Comment';

  }else if(item.comments>1){
    commentText=item.comments+' Comments'
  }else{
      commentText='Comment';
  }

return(
    <Card>
    <UserInfo>
      <UserImg source={{uri: item.userImg}}/>
      <UserInfoText>
        <UserName>{item.userName}</UserName>
        <PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime>
      </UserInfoText>
    </UserInfo>
    <PostText>{item.post}</PostText>
  {    item.postImg != null?
   <PostImage source={{uri:item.postImg}}/> :
   <Divider/>
 }




    {
    /*
    item.postImg != null?
   <ProgressiveImage
   defaultImageSource={require("../Assets/Background2.jpg")}
   source={{uri:item.postImg}}
   style={{width:'370px',height:'150px'}}
   resizeMode='cover'
   /> :
   <Divider/>
    */ }
  
    <InteractionWrapper>
      <Interaction active={item.liked}>
        <Ionicons name={likeIcon} size={25} color={likeIconColor}/>
        <InteractionText active={item.liked}>{likeText}</InteractionText>
      </Interaction>
      <Interaction>
        <Ionicons name='md-chatbubble-outline' size={25}/>
        <InteractionText>{commentText}</InteractionText>
      </Interaction>
      {(user.uid===item.userId)?(
      <Interaction onPress={()=>onDelete(item.id)}>
        <Ionicons name='md-trash-bin' size={25}/>
        <InteractionText>{commentText}</InteractionText>
      </Interaction>
      ):null}
    </InteractionWrapper>
  </Card>
);
};
export default PostCard;