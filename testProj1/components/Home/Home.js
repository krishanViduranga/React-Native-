import React, {Component} from 'react';

import{
   
    Platform,
    StyleSheet, 
    View,
    Image,
    Text



} from 'react-native';



export default class Home extends Component{

    render(){
        const ImgUrl ={
           uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkpSRFzul1-b7eApwO-ZODUGho5x_UL8Rau9TEd87emy2Q4uCV"
        };
        let welcomeSpeech = `Welcome to Home`;
        return(

            <View style= {{alignItems: 'center'}}>
                
                
                <Image source={ImgUrl}
                       style={{width:200, height:200}}
                >
                </Image>
                <Text > 
                    {welcomeSpeech}
                </Text>

            </View>

        );
    }


}


