import styled from 'styled-components';
export const Container=styled.View`
flex:2;
//justify-content:center;
//align-items:center;
background-color:#fff;
padding:20px;
`;
export const Card=styled.View`
background-color:#f8f8f8f;
width:100%;
margin-bottom:20px;
border-radius:10px;
`;
export const UserInfo=styled.View`
flex-direction:row;
justify-content:flex-start;
padding:15px;
`;
export const UserImg=styled.Image`
    width:50px;
    height:50px;
    border-radius:25px;

`;

export const UserInfoText=styled.View`
flex-direction:column;
justify-content:center;
margin-left:10px;
`;

export const UserName=styled.Text`
font-size=14px;
font-weight:bold;
font-family:Lato-Regular;
`;
export const PostTime=styled.Text`
font-size:12px;
font-family:Lato-Regular;
color:#666;
`;
export const PostText=styled.Text`
font-size:12px;
font-family:Lato-Regular;
padding-left:15px;
padding-right:15px;

`;
export const PostImage=styled.Image`
width:370px;
height:150px;
margin-top:15px;
margin-right:10px;
`;
export const InteractionWrapper=styled.View`
flex-direction:row;
justify-content:space-around;
padding:15px
`;

export const Divider=styled.View`
border-bottom-color:#fff;
border-bottom-width:1px;
width:92%;
align-self:center;
margin-top:15px;
`;
export const Interaction=styled.TouchableOpacity`
flex-direction:row;
flex-content:center;
border-radius:5px;
padding:2px 5px;
background-color:${props =>props.active?'#2e64e515':'transparent'}
`;
export const InteractionText=styled.Text`
font-size:12px;
font-family:'Lato-Regular';
font-weight:bold;
color:${props =>props.active ?'blue':'#333'};
margin-top:5px;
margin-left:5px;
`;




