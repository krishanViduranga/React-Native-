import React, {Component} from 'react';
import{
   
    Platform,
    StyleSheet, 
    View,
    Image,
    Text
} from 'react-native';

class Blink extends Component{    //react native component
    constructor(props){
        super(props);
        this.state={
            showText: true
        };

        const timeToBlink = 500;//500 milisecond

        setInterval(taskToDo = () => {
            this.setState(previousState =>  {
                return(
                    {showText: !previousState.showText}
                );
            });
        },timeToBlink);
    }

    render(){
        let textToDisplay = this.state.showText ? this.props.inputText:' ';
        //let display = this.state.isShowingText ? this.props.text : ' ';
        return(
            <Text>{textToDisplay}</Text>  
        );
    }

}

export default class TextBlink extends Component{

    render(){
        return(
            <View style= {{alignItems: 'center'}}> 
                
                <Text style={[styles.bigblue]} >
                    <Blink inputText='Click the Button'></Blink>
    
                </Text>

                
            </View>
        );


    }
}

const styles = StyleSheet.create({
    
    bigblue: {
        
        justifyContent: 'center',
        alignItems:'center',
        color:'blue',
        fontWeight: 'bold',
        fontSize: 30,
        
       
        
    },

    red:{
        color: 'red',
    },


});


// import { AppRegistry, Text, View, StyleSheet } from 'react-native';
 
// class BlinkingClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {showText: true};
 
//     // Change the state every second or the time given by User.
//     setInterval(() => {
//       this.setState(previousState => {
//         return { showText: !previousState.showText };
//       });
//     }, 
//     // Define any blinking time.
//     1000);
//   }
 
//   render() {
//     let display = this.state.showText ? this.props.text : ' ';
//     return (
//       <Text style = {{ textAlign: 'center', marginTop : 10 }}>{display}</Text>
//     );
//   }
// }
 
// class Myproject extends Component {
//   render() {
//     return (
//       <View>
//         <BlinkingClass text='This Is Blinking Text 1' />
//         <BlinkingClass text='This Is Blinking Text 2' />
//         <BlinkingClass text='This Is Blinking Text 3' />
//       </View>
//     );
//   }
// }
 
// AppRegistry.registerComponent('Myproject', () => Myproject);