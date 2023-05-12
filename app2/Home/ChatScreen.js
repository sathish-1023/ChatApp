import React, { useState, useCallback, useEffect } from 'react';
import { Text, View } from "react-native";
import { Bubble, GiftedChat } from 'react-native-gifted-chat'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
const ChatScreen=()=>{

    const [messages, setMessages] = useState([]);
  useEffect(() => {
  
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])
  
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
const scrollToBottomComponent=()=>{
    return(

<FontAwesome name='angle-double-down' size={22} color='#333'/>


    );
}




  const renderSend=(props)=>{
    return(
        <Send
        {...props}>
        <View>
            <MaterialCommunityIcon name='send-circle' size={32} color='green'
               style={{marginBottom:5,marginRight:5}}
            />
        </View>
        

        </Send>
    );

  }

  const renderBubble=(props)=>{
    return(
<Bubble
{...props}
wrapperStyle={{
    right:{
        backgroundColor:'blue',
    }
}}
textStyle={{
    right:{
        color:'#fff',
    }
}}

/>
    );
  }
    return(
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        //renderBubble={renderBubble}
        alwaysShowSend
       // renderSend={renderSend}
       scrollToBottomComponent={scrollToBottomComponent}
      />

    );
};
export default ChatScreen;