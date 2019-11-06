import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, ScrollView, Button,TouchableOpacity ,TextInput,Image} from 'react-native';
import Basic from './Basic'
import Icon from 'react-native-vector-icons/FontAwesome';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
const {width,height} = Dimensions.get('window');

export default class App extends React.Component {
  onPress = (index) => {
    this.scroll.scrollTo({x: index * screenWidth, y: 0, animated: true})
 }
  render() {
    return (
        <ScrollView>
      <View style={styles.MainContainer}>
        <Text style={{fontSize:width/23,fontWeight:'bold',marginTop:'4%',marginLeft:'10%'}}>Gallery</Text>
        <Text style={{fontSize:width/15,fontWeight:'bold',marginTop:'0%',marginLeft:'10%',bottom:'3%',color:'red'}}>__ _</Text>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          ref = {re => this.scroll = re}
        >
          {/* <View style={{height:'5%'}}></View> */}
          <View style={styles.ScrollContainer}>
              <View style={{height:'100%'}}>
                    <Icon size={400} name='user' color='#20B2AA'/>                
              </View>
          </View>
          <View style={styles.ScrollContainer}>
              <View  style={{height:'100%'}}>
                  <Icon size={400} name='user' color='#20B2AA'/>              
              </View>
          </View>
          <View style={styles.ScrollContainer}>
              <View style={{height:'100%'}}>
                  <Icon size={400} name='user' color='#20B2AA'/>              
              </View>
          </View>
          <View style={styles.ScrollContainer}>
              <View style={{height:'100%'}}>
                  <Icon size={400} name='user' color='#20B2AA'/>              
              </View>
          </View>
        </ScrollView>
        <View style={styles.ButtonViewContainer}>
             <Icon size={80} name='user' color='#20B2AA' style={{marginLeft:'0%'}} onPress = {() => this.onPress(0)} /> 
             <Icon size={80} name='user' color='#20B2AA' style={{marginLeft:'6%'}} onPress = {() => this.onPress(1)} />
             <Icon size={80} name='user' color='#20B2AA' style={{marginLeft:'6%'}} onPress = {() => this.onPress(2)} />
             <Icon size={80} name='user' color='#20B2AA' style={{marginLeft:'6%'}} onPress = {() => this.onPress(3)} />
        </View>
        <View style={{flex:1}}>
            <Text style={{fontSize:width/23,fontWeight:'bold',marginTop:'4%',marginLeft:'10%'}}>Description</Text>
            <Text style={{fontSize:width/15,fontWeight:'bold',marginTop:'0%',marginLeft:'10%',bottom:'20%',color:'red'}}>__ _</Text>
            <View style={{flex:1,height:'100%',Bottom:'25%'}}>
                <TextInput style={styles.input}/> 
            </View>
        </View>                
        <View style={{flex:1}}>
            <Text style={{fontSize:width/23,fontWeight:'bold',marginTop:'4%',marginLeft:'10%'}}>Features</Text>
            <Text style={{fontSize:width/15,fontWeight:'bold',marginTop:'0%',marginLeft:'10%',bottom:'20%',color:'red'}}>__ _</Text>
            <View style={{flexDirection:'row',height:'100%',Bottom:'25%'}}>
                <Icon size={15} name='check-circle' color='red' style={{marginLeft:'10%'}} /> 
                <Text style={{marginLeft:'3%',fontSize:width/35}}>Car parking</Text>
                <Icon size={15} name='check-circle' color='red' style={{marginLeft:'3%'}}/> 
                <Text style={{marginLeft:'3%',fontSize:width/35}}>Card and All Digital Payment accepted</Text>
            </View>
        </View>
        <View style={{flex:1}}>
            <Text style={{fontSize:width/23,fontWeight:'bold',marginTop:'4%',marginLeft:'10%'}}>Location</Text>
            <Text style={{fontSize:width/15,fontWeight:'bold',marginTop:'0%',marginLeft:'10%',bottom:'20%',color:'red'}}>__ _</Text>
            <View style={{flex:1,height:'100%',Bottom:'25%'}}>
            <Text style={{fontSize:width/30,fontWeight:'500',marginTop:'0%',marginLeft:'10%'}}>Jaipur</Text> 
            </View>
        </View>
        
      </View >
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    justifyContent: 'center',
    

  },
  ScrollContainer: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    marginTop: 0,
    width: screenWidth,
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ScrollTextContainer: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center'
  },
  ButtonViewContainer: {
    flexDirection: 'row',
    width:'100%',
    height:'15%',
    justifyContent:'center',
    alignItems:'center',marginLeft:'0%'
  },
  
  rectangle105 : {
    flex:1,
    width: '80%',
    height:'0%',
    borderWidth: 1,
borderRadius:10,
backgroundColor:'#fff',
borderColor: 'lightgray',
borderBottomWidth: 0,
shadowRadius: 0,
 
  },
  input: {
    marginTop:'0%',
    padding:'1%',
    height: '100%',
    width:'80%',
    borderRadius: 5,
    borderWidth: 0,
backgroundColor:'#fff',
borderColor: 'lightgray',
shadowRadius: 16,
elevation: 20,alignSelf:'center'
 },
});