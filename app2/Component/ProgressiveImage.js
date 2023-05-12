import React from 'react'
import { View, Text ,Animated,StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'


class ProgressiveImage extends React.Component{
    defaultImageAnimated=new Animated.Value(0);
    ImageAnimated=new Animated.Value(0);
    handleDefaultImageLoad =()=>{
        Animated.timing(this.defaultImageAnimated,{
           toValue:1,
           useNativeDriver:true, 
        }).start();
    }

    handleImageLoad =()=>{
        Animated.timing(this.ImageAnimated,{
           toValue:1,
           useNativeDriver:true, 
        }).start();
    }
    render(){
        const {defaultImageSource,source,style,...props}=this.props;
        return(
           <View>
            <Animated.Image
            {...props}
            source={defaultImageSource}  style={{style,opacity:this.defaultImageAnimated}}
            onLoad={this.handleDefaultImageLoad}

            />
{//{opacity:this.defaultImageAnimated}
}
            <Animated.Image
            {...props}
            source={defaultImageSource}  style={styles.imageOverlay,{style,opacity:this.ImageAnimated}}
            onLoad={this.handleImageLoad}
            
            />
           </View>
        
        );}

        };
        export default ProgressiveImage;

        const styles=StyleSheet.create({
            container:{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
            },
            imageOVerlay:{
                position:'absolute',
                top:0,
                bottom:0,
                left:0,
                right:0,
            }
        });
