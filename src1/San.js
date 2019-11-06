import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, ScrollView, Button,TouchableOpacity ,TextInput,Image} from 'react-native';
import Basic from './Basic'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Searchbar,Card } from 'react-native-paper';

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
              <View style={{height:'100%',width:'80%',alignItems:'center',right:'0.5%'}}>
                        <Image style={{width:380,height:400}} source={require('./assets/1111.png')} />              
              </View>
          </View>
          <View style={styles.ScrollContainer}>
              <View style={{height:'100%',width:'80%',alignItems:'center',right:'0.5%'}}>
                        <Image style={{width:380,height:400}} source={require('./assets/1111.png')} />              
              </View>
          </View>
          <View style={styles.ScrollContainer}>
                <View style={{height:'100%',width:'80%',alignItems:'center',right:'0.5%'}}>
                        <Image style={{width:380,height:400}} source={require('./assets/1111.png')} />              
                </View>
          </View>
          <View style={styles.ScrollContainer}>
                    <View style={{height:'100%',width:'80%',alignItems:'center',right:'0.5%'}}>
                        <Image style={{width:380,height:400}} source={require('./assets/1111.png')} />              
                    </View>
          </View>
        </ScrollView>
        <View style={styles.ButtonViewContainer}>
             <Card style={{height:'50%',width:'20%',marginLeft:'1%'}} onPress = {() => this.onPress(0)}>
                <Image style={{width:80,height:60,marginLeft:'0%'}} source={require('./assets/1111.png')}  /> 
             </Card>
             <Card style={{height:'50%',width:'20%',marginLeft:'4%'}} onPress = {() => this.onPress(1)}>
                <Image style={{width:80,height:60,marginLeft:'0%'}} source={require('./assets/1111.png')}  /> 
             </Card>
             <Card style={{height:'50%',width:'20%',marginLeft:'4%'}} onPress = {() => this.onPress(2)}>
                <Image style={{width:80,height:60,marginLeft:'0%'}} source={require('./assets/1111.png')}  /> 
             </Card>
             <Card style={{height:'50%',width:'20%',marginLeft:'4%'}} onPress = {() => this.onPress(3)}>
                <Image style={{width:80,height:60,marginLeft:'0%'}} source={require('./assets/1111.png')}  /> 
             </Card>
        </View>
        <View style={{flex:1}}>
            <Text style={{fontSize:width/23,fontWeight:'bold',marginTop:'4%',marginLeft:'10%'}}>Description</Text>
            <Text style={{fontSize:width/15,fontWeight:'bold',marginTop:'0%',marginLeft:'10%',bottom:'20%',color:'red'}}>__ _</Text>
            {/* <View style={{flex:1,height:'100%',Bottom:'25%'}}>
                <TextInput style={styles.input}/> 
            </View> */}
        </View>                
        <View style={{flex:1}}>
            <Text style={{fontSize:width/23,fontWeight:'bold',marginTop:'4%',marginLeft:'10%'}}>Features</Text>
            <Text style={{fontSize:width/15,fontWeight:'bold',marginTop:'0%',marginLeft:'10%',bottom:'30%',color:'red'}}>__ _</Text>
            {/* <View style={{flexDirection:'row',height:'100%',Bottom:'25%'}}>
                <Icon size={15} name='check-circle' color='red' style={{marginLeft:'10%'}} /> 
                <Text style={{marginLeft:'3%',fontSize:width/35}}>Car parking</Text>
                <Icon size={15} name='check-circle' color='red' style={{marginLeft:'3%'}}/> 
                <Text style={{marginLeft:'3%',fontSize:width/35}}>Card and All Digital Payment accepted</Text>
            </View> */}
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
    
    alignItems:'center',marginLeft:'2%'
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