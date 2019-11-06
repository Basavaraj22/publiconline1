import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, ScrollView, Button,TouchableOpacity } from 'react-native';
import Basic from './Basic'
import Icon from 'react-native-vector-icons/FontAwesome5';

var screenWidth = Dimensions.get('window').width;
const {width,height} = Dimensions.get('window');

export default class App extends React.Component {
  onPress = (index) => {
    this.scroll.scrollTo({x: index * screenWidth, y: 0, animated: true})
 }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize:width/23,fontWeight:'bold',textAlign:'center',marginTop:'4%'}}>Choose Type of Listing</Text>
        <View style={styles.ButtonViewContainer}>
          
             <TouchableOpacity style={{backgroundColor:'#FF8000',marginLeft:'5%',width:'25%',height:'45%',marginRight:'3%',borderRadius:10}} onPress = {() => this.onPress(0)}>
              <Text style={{fontWeight:'bold',fontSize:width/35,marginTop:'10%',marginLeft:'10%',color:'#FFFFFF'}}> Basic Listing </Text>
             </TouchableOpacity> 
        
          
            <TouchableOpacity style={{backgroundColor:'#FFFFFf',marginLeft:'5%',width:'25%',height:'45%',marginRight:'3%',borderRadius:10}} onPress = {() => this.onPress(1)}>
              <Text style={{fontWeight:'bold',fontSize:width/35,marginTop:'10%',marginLeft:'5%',color:'#009900'}}>Ultimate Listing</Text>
             </TouchableOpacity> 
        
          
             <TouchableOpacity style={{backgroundColor:'#009900',marginLeft:'5%',width:'25%',height:'45%',marginRight:'3%',borderRadius:10}} onPress = {() => this.onPress(2)}>
              <Text style={{fontWeight:'bold',fontSize:width/35,marginTop:'10%',marginLeft:'10%',color:'#FFFFFF'}}>Prime Listing</Text>
             </TouchableOpacity> 
          
        </View>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          ref = {re => this.scroll = re}
        >
          {/* <View style={{height:'5%'}}></View> */}
          <View style={styles.ScrollContainer}>
              <View style={styles.rectangle105}>
                  <View style={{backgroundColor:'#FF9933',width:'100%',height:'25%',borderTopStartRadius:15,borderTopEndRadius:15}}>
                          <View style={{flex:1,alignSelf:'center',marginTop:'10%'}}>
                                <Icon name="paper-plane" color='#FFFFFF' size={40} />
                          </View>
                          <View style={{flex:1,alignSelf:'center'}}>
                                <Text style={{color:'#FFFFFF',fontSize:width/20,fontWeight:'bold'}}>Basic Listing</Text>  
                          </View>
                  </View>
                  <View style={{flex:1,marginTop:'2%'}}>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                            <Icon name="check" color='#32CD32' size={15} />
                            <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'6.5%'}}>One Basic Ad</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="times" color='#ff0000' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>Live Ads Display</Text>
                        </View>
                        
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'7%'}}>Photo Gallery(1)</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'7%'}}>Featured</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'6.5%'}}>Complete Business Profile</Text>
                        </View><View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'5%'}}> Search Results in Second</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'6%'}}>365 Days Availability</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="times" color='#ff0000' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'7%'}}>Video Visuals Ads</Text>
                        </View>
                        <TouchableOpacity style={{backgroundColor:'#99FFFF',alignSelf:'center',width:'40%',height:'10%',marginTop:'8%'}} onPress={() =>  this.props.navigation.navigate('Basic')}>
                            <Text style={{fontSize:width/25,fontWeight:'bold',textAlign:'center',marginTop:'5%'}}>Pay</Text>
                        </TouchableOpacity>
                  </View>
              </View>
          </View>
          <View style={styles.ScrollContainer}>
          <View style={styles.rectangle105}>
                  <View style={{backgroundColor:'#009900',width:'100%',height:'25%',borderTopStartRadius:15,borderTopEndRadius:15}}>
                          <View style={{flex:1,alignSelf:'center',marginTop:'10%'}}>
                                <Icon name="plane" style={{transform: [{ rotate: '-30deg'}]}} color='#FFFFFF' size={45} />
                          </View>
                          <View style={{flex:1,alignSelf:'center'}}>
                                <Text style={{color:'#FFFFFF',fontSize:width/20,fontWeight:'bold'}}>Ultimate Plan</Text>  
                          </View>
                  </View>
                  <View style={{flex:1,marginTop:'2%'}}>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                            <Icon name="check" color='#32CD32' size={15} />
                            <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>One Ultimate Ad</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>Live Ads Display</Text>
                        </View>
                        
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>Photo Gallery(5)</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>Featured</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>Complete Business Profile</Text>
                        </View><View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}> Search Results in Second</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>365 Days Availability</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>Video LED Display for 20 sec</Text>
                        </View>
                        <TouchableOpacity style={{backgroundColor:'#99FFFF',alignSelf:'center',width:'40%',height:'10%',marginTop:'8%'}} onPress={() =>  this.props.navigation.navigate('Ultimate1')}>
                            <Text style={{fontSize:width/25,fontWeight:'bold',textAlign:'center',marginTop:'5%'}}>Pay</Text>
                        </TouchableOpacity>
                  </View>
              </View>
          </View>
          <View style={styles.ScrollContainer}>
          <View style={styles.rectangle105}>
                  <View style={{backgroundColor:'#FF6666',width:'100%',height:'25%',borderTopStartRadius:15,borderTopEndRadius:15}}>
                          <View style={{flex:1,alignSelf:'center',marginTop:'10%'}}>
                                <Icon name="rocket" color='#FFFFFF' size={40} />
                          </View>
                          <View style={{flex:1,alignSelf:'center'}}>
                                <Text style={{color:'#FFFFFF',fontSize:width/20,fontWeight:'bold'}}>Prime Plan</Text>  
                          </View>
                  </View>
                  <View style={{flex:1,marginTop:'2%'}}>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                            <Icon name="check" color='#32CD32' size={15} />
                            <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>One Prime  Ad</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>Live Ads Display</Text>
                        </View>
                        
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>Photo Gallery(3)</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>Featured</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>Complete Business Profile</Text>
                        </View><View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#32CD32' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}> Search Results in Second</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="check" color='#00ff00' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>365 Days Availability</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:'3%',marginTop:'5%'}}>
                        <Icon name="times" color='#ff0000' size={15} />
                        <Text style={{color:'#000000',fontSize:width/30,fontWeight:'bold',marginLeft:'8%'}}>Video Visuals Ads</Text>
                        </View>
                        <TouchableOpacity style={{backgroundColor:'#99FFFF',alignSelf:'center',width:'40%',height:'10%',marginTop:'8%'}} onPress={() =>  this.props.navigation.navigate('Prime')}>
                            <Text style={{fontSize:width/25,fontWeight:'bold',textAlign:'center',marginTop:'5%'}}>Pay</Text>
                        </TouchableOpacity>
                  </View>
              </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  ScrollContainer: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    marginTop: 0,
    width: screenWidth,
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
    alignItems:'center',marginLeft:'0%'
  },
  
  rectangle105 : {
    flex:1,
    width: '80%',
    height:'0%',
    borderWidth: 1,
borderRadius:15,
backgroundColor:'#fff',
borderColor: 'lightgray',
borderBottomWidth: 0,
shadowRadius: 10,
 
  },
});