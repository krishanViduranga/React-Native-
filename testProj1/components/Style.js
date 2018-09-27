import React, {Component} from 'react';
import{
   
    Platform,
    StyleSheet, 
    View,
    Text,


} from 'react-native';

export default class Style extends Component{
    render(){
        return(
            <View style = { styles.container}>
                <Text style={styles.firstText}>First Text</Text>
                <Text style={styles.secondText}> Second Text</Text>
                <Text >FreeStyleText</Text>
            </View>

        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#2BB463',
        borderWidth: 2,
        borderColor: '#1F618D',
    },
    firstText:{
        margin: 5,color: 'white'
    },
    secondText: {
        margin: 5,
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 20,
    }

});
 