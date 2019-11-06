import React, {Component} from 'react';  
import { Text, View ,Dimensions,StyleSheet,Image,Picker,ScrollView,TextInput,TouchableOpacity,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
  
export default class CoorderScreen extends Component{  
       
//   state = {
//     data: ''
//  }
//  componentDidMount = () => {
//     fetch('http://13.235.168.108:8080/home/login', {
//        method: 'POST'
//     })
//     .then((response) => response.json())
//     .then((responseJson) => {
//        console.log(responseJson);
//        this.setState({
//           data: responseJson
//        })
//     })
//     .catch((error) => {
//        console.error(error);
//     });
//  }
 render() {
    return (
       <View>
          <Text>
             {/* {this.state.data.body} */}hi
          </Text>
       </View>
    )
 }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },            
  });

