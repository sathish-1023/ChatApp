import React from 'react'
import { View, ScrollView,Text ,FlatList} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Card, Container, MessageText, PostTime, TextSection, UserImg, UserImgWrapper, UserInfo, UserName } from '../Screen/styles/MessageStyles';
import { UserInfoText } from '../Screen/styles/FeedStyles';

import ChatScreen from './ChatScreen';
const Stack = createStackNavigator()
const Messages=[
  {
    id:'1',
    userName:'Jony doe',
    userImg:require('../Assets/socialLogo.jpg'),
    messageTime:'4 min ago',
    messageText:
    'Hey there ,is my test for post  of social app in react-native',
  },
  {
    id:'2',
    userName:'Ramika Sen',
    userImg:require('../Assets/Background1.jpg'),
    messageTime:'19 min ago',
    messageText:
    ' unDefeatable person',
  },
  {
    id:'3',
    userName:'vishva Karma',
    userImg:require('../Assets/Background2.jpg'),
    messageTime:'6 min ago',
    messageText:
    'Creator of Universe',
  },
]

const Book = ({navigation}) => (
  <Container>
    
<FlatList
    data={Messages}
    keyExtractor={item =>item.id}
    renderItem={({item})=>(
      
      <Card onPress={()=>navigation.navigate("ChatScreen",{userName:
        item.userName}
        ) }>
        <UserInfo>
          <UserImgWrapper>
            <UserImg source={item.userImg}/>
          </UserImgWrapper>
          <TextSection>
            <UserInfoText>
                <UserName>{item.userName}</UserName>
                <PostTime>{item.messageTime}</PostTime>
            </UserInfoText>
            <MessageText>{item.messageText}</MessageText>
          </TextSection>
        </UserInfo>
      
        </Card>
    )

    }
    />
  </Container>
   

);

const BookStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Book" component={Book} />
      
    </Stack.Navigator>
  )
}

export default BookStackNavigator