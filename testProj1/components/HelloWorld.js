import React, {Component} from 'react';
import{
   
    Platform,
    StyleSheet, 
    View,
    Text,


} from 'react-native';

export default class HellloWorld extends Component{
    render(){
        let greeting = `Hello Maven`;
        let txt1 = `emulator-5556 shell am start -n com.testproj1emulator-5556 shell am start -n com.testproj1`;
        let txt2 = `\Local\Android\Sdk/platform-tools/adb\Local\Android\Sdk/platform-tools/adb\Local\Android\Sdk/platform-tools/adb`;
        return(
            <Text>
                {greeting}
                {txt1}
                {txt2}
            </Text>
          
        
        );
    }

}