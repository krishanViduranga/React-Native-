import React, {Component} from 'react';
import { View }from 'react-native';

export default class FlexdDimension extends Component{
    render(){
        return(
         <View style={{flex: 1}} >
            <View style={{flex:50,backgroundColor:'mediumaquamarine'}}/>
            <View style={{flex:50,backgroundColor:'#1e90ff'}}/>
         </View>
        );

    }
} 