import React, { useEffect ,useState} from 'react'
import { View, Text,FlatList ,Button,Alert, SafeAreaView} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import PostCard from '../Component/PostCard';
import { Container, PostImage } from '../Screen/styles/FeedStyles';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import Skeleton from '../Component/Skeleton';
import storage from '@react-native-firebase/storage';
const Stack = createStackNavigator()

const Posts=[
  {
    id:'1',
    userName:'Jenny Doe',
    userImg:require('../Assets/Background1.jpg'),
    postTime:'4 mins ago',
    post: 'hey this is test for post of social app',
    postImg:require('../Assets/Background3.jpg'),
    liked:true,
    likes:'14',
    comments:'15'
  },
  {
  id:'2',
  userName:'nextLevel',
  userImg:require('../Assets/Background2.jpg'),
  postTime:'10 mins ago',
  post: 'hey this is test for post of social app',
  postImg:require('../Assets/socialLogo.jpg'),
  liked:false,
  likes:'44',
  comments:'66'
},
{
  id:'3',
  userName:'Harry portter Doe',
  userImg:require('../Assets/socialLogo.jpg'),
  postTime:'4 mins ago',
  post: 'hey this is test for post of social app',
  postImg:'none',
  liked:false,
  likes:'14',
  comments:'15'
},
]

function insert(){
  url='https://firebasestorage.googleapis.com/v0/b/chatapp-d9719.appspot.com/o/photos%2F89cd3b2d-d440-4a15-a13d-5cbfac33929e1681617530227.jpg?alt=media&token=94f19476-f0e7-4c83-8733-1332e55f895d'

imgRef=storage().refFromURL(url);
imgRef
.delete()
.then(()=>{
  console.log("image deleted")
})
.catch((e)=>{
  console.log("error in url",e);
})

}
const Home = () => {
const [posts,setPosts]=useState(null);
const[loading,setLoading]=useState(true);
const[deleted,setDeleted]=useState(null);
const fetchPosts=async()=>{
  try{

    const list=[];
    await firestore()
    .collection('posts')
    .orderBy('postTime','desc')
    .get()
    .then((querySnapShot) =>{
     // console.log('Total Posts: ',querySnapShot.size);
     querySnapShot.forEach(doc =>{
      const {post,userId,postImg,postTime,likes,comments}=doc.data();
      list.push(
      {
        id:doc.id,
        userId,
        userName:'Test Name',
        userImg:'https://firebasestorage.googleapis.com/v0/b/chatapp-d9719.appspot.com/o/photos%2F89cd3b2d-d440-4a15-a13d-5cbfac33929e1681617530227.jpg?alt=media&token=94f19476-f0e7-4c83-8733-1332e55f895d',
        postTime,
        post,
        postImg,
        liked:false,
        likes,
        comments,
      },
      );
    })
     
    })
    setPosts(list);
    if(loading){
      setLoading(false);
    }

  console.log("posts: ",list);
  }catch(e){
    console.log(e);
  }
}
  useEffect(()=>{
   
    fetchPosts();
   },[])

   useEffect(()=>{
    fetchPosts();
    setDeleted(false);
   },[deleted])

const handleDelete=(postId)=>{
Alert.alert(
  'Delete Post',
  'Are you sure ??',
  [
    {
      text:'Cancel',
      onPress:()=> console.log("Cancel Pressed"),
      style:'cancel',
    },
    
    {
      text:'Confirm',
      onPress:()=>deletePost(postId),
      
    },
  ],
  {cancelable:false}
);

}







   const deletePost=(postId) =>{
    console.log('Current Post id:',postId);
    firestore().collection('posts')
    .doc(postId)
    .get()
    .then((documentSnapShot)=>{
      if(documentSnapShot.exists){
        const {postImg,likes}=documentSnapShot.data();
       console.log('Current Post image:',postImg);
        if(postImg!=null){
          const storageRef=storage().refFromURL(postImg);
         console.log('Current Post storage:',storageRef);
       // const imgRef=storage().ref(storage().full);
          const imgRef=storage().ref(storageRef.fullPath);
          console.log('Current Post image Ref:',imgRef);
        //  let imgRef = storage.refFromURL(postImg);

          imgRef
          .delete()

          .then(()=>{
            console.log(`${postImg} is deleted successfully`);
            deleteFirestoreData(postId);
            setDeleted(true);
          })
          .catch((e)=>{
            console.log("error while deleting the image",e);
          })
        }else{
          deleteFirestoreData(postId);
        }
      }
    })
   }


   const deleteFirestoreData=(postId)=>{
    firestore().collection('posts')
    .doc('postId')
    .delete()
    .then(()=>{
      Alert.alert('Post deleted',
      'Your post has been deleted',
      );
    }).catch((e)=>{
      console.log('error in firestore delete',e);
    })
   };
  return(
  <SafeAreaView style={{flex:1,}}>
     
  {loading ?<Skeleton/>:
  
  
  
  
  <Container>

    
    <FlatList 
    data={posts}
    renderItem={({item})=><PostCard  item={item} onDelete={handleDelete}/>}
    keyExtractor={item=>item.id}
    showsVerticalScrollIndicator={false}

    />
    <Button title='realtime'
    onPress={insert}
    
    > insert</Button>
  </Container>
}
  </SafeAreaView>
  );
  }
const HomeStackNavigator = () => {
  return (
    
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator