import React, {Component} from 'react';
import{
   
    Platform,
    StyleSheet, 
    View,
    Text,


} from 'react-native';

export default class JustifyContentExample extends Component{

    render(){
        return(
            <View style={{
                backgroundColor:'aquamarine',
                //flex:1 // flexyble
                height:500,
                //justifyContent:
                //alignItems:
                flexDirection:'row',
                justifyContent:'center', //define the content starting point in  
                alignItems:'center',//use to center of row or column
                //alignItems:'stretch' // stretch is use when size is not fixed
                
            }}>
                <Text style ={{width:50, height:50 , backgroundColor:'red'}}/>
                <Text style ={{width:50, height:50 , backgroundColor:'green'}}/>
                <Text style ={{width:50, height:50 , backgroundColor:'blue'}}/>
            </View>

        );
    }

}




