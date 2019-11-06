import React, {Component} from 'react';  
import { Text, View ,Dimensions,StyleSheet,Image,Picker,ScrollView,TextInput,TouchableOpacity,ImageBackground} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Paragraph } from 'react-native-paper';
import { Header, Rating} from 'react-native-elements';
const {width,height} = Dimensions.get('window');
  
export default class Add extends Component{
    static navigationOptions = {
        title: 'Ad Details',
        headerStyle: {
          backgroundColor: '#FF9933',
        },
        headerTintColor: '#FF9933',
        headerTitleStyle: {
          fontWeight: 'bold',
          color:'#FFFFFF'
        },
      };       
    render() {  
        return(  
        <View style={styles.container}>
            {/* <View style={{width:'100%',height: '10%',backgroundColor: "#FF9933",borderStyle: "solid",borderWidth: 0.7,borderColor: "#707070"}}>
                    <View style={{marginLeft:'5%', flexDirection:'row',marginTop:'10%'}}>
                            <Icon name="arrow-left" color='#FFFFFF' size={20} />
                            <Text style={{color:'#FFFFFF',marginLeft:'10%',fontWeight:'bold',fontSize:width/23}}>Ad Details</Text>
                    </View>
            </View> */}
            <ScrollView style={{flex:1}}>
        <View style={{flex:1}}>
            
            <View style={{flex:1}}>
                <ImageBackground
                    style={styles.smile1726471960720}
                    source={require('./assets/BBB.jpg')}>
                    <Image style={{width:50,height:40,marginLeft:270,marginTop:290}} source={require('./assets/LOGOIDMCOLOR.png')} />
                </ImageBackground>
            </View>
            <View style={styles.rectangle105}>
                <View style={{flexDirection:'row',width:'18%',height:'14%',borderWidth:2,borderColor:'#FF9933',marginLeft:'2%',marginTop:'2%'}}>
                    <Icon name="bullhorn" color='#cccccc' size={20} />
                    <Text style={{color:'#FF9933',fontSize:width/28,fontWeight:'bold',marginLeft:'15%'}}>Sell</Text>  
                </View>
                <Text style={{fontWeight:'bold',fontSize:width/25,marginLeft:'2%',marginTop:'1%'}}>
                        Audi A6 with Turbro Charger
                </Text>
                <View style={{flexDirection:'row',width:'60%',height:'12%',marginLeft:'4%',marginTop:'2%'}}>
                    <View style={{flexDirection:'row'}}>
                    <Icon name="calendar" color='#cccccc' size={15} />
                    <Text style={{color:'#cccccc',fontSize:width/30,fontWeight:'bold',marginLeft:'7%',bottom:'3%'}}>April 7,2107</Text>
                    </View>
                    <View style={{flexDirection:'row',marginLeft:'8%'}}>
                    <Icon name="eye" color='#cccccc' size={15} />
                    <Text style={{color:'#cccccc',fontSize:width/28,fontWeight:'bold',marginLeft:'7%',bottom:'5%'}}>3423</Text>
                    </View>  
                </View>
                <View style={{flexDirection:'row',marginLeft:'4%',marginBottom:'2%'}}>
                    <Icon name="map-marker-alt" color='#cccccc' size={15} />
                    <Text style={{color:'#cccccc',fontSize:width/28,fontWeight:'bold',marginLeft:'2%',bottom:'0.5%'}}>United States,Colorado</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:'4%',marginBottom:'2%'}}>
                    <Icon name="euro-sign" color='#FF9933' size={15} />
                    <Text style={{color:'#FF9933',fontSize:width/28,fontWeight:'bold',marginLeft:'2%',bottom:'0.5%'}}>370.00</Text>
                </View>
                <View style={{flexDirection:'row',width:'100%',height:'33%',borderColor:'#cccccc',borderTopWidth:0.5}}>
                    <View style={{width:'25%',borderEndWidth:0.5,borderColor:'#cccccc',}}>
                        <View style={{flexDirection:'row',alignSelf:'center',marginTop:'35%',bottom:'20%'}}>
                            <Icon name="share-alt" color='#cccccc' size={15} />
                            <Text style={{color:'#cccccc',fontSize:width/30,fontWeight:'bold',marginLeft:'7%'}}>Share</Text>
                        </View>
                    </View>
                    <View style={{width:'50%',borderEndWidth:0.5,borderColor:'#cccccc',}}>
                        <View style={{flexDirection:'row',alignSelf:'center',marginTop:'7.5%'}}>
                            <Icon name="heart" color='#cccccc' size={15} />
                            <Text style={{color:'#cccccc',fontSize:width/30,fontWeight:'bold',marginLeft:'7%'}}>Add To favourites</Text>
                        </View>
                    </View>
                    <View style={{width:'25%',borderEndWidth:0.5,borderColor:'#cccccc',}}>
                        <View style={{flexDirection:'row',alignSelf:'center',marginTop:'15%'}}>
                            <Icon name="exclamation-triangle" color='#cccccc' size={15} />
                            <Text style={{color:'#cccccc',fontSize:width/30,fontWeight:'bold',marginLeft:'7%'}}>Report</Text>
                        </View>
                    </View>
                </View>
                
            </View>
            <View style={styles.rectangle106}>
                <Text style={{fontWeight:'bold',fontSize:width/30,marginLeft:'4%',marginTop:'2%',color:'#696969'}}>
                        Description
                </Text>
                <View style={{flexDirection:'row',marginTop:'1%'}}>
                    <Text style={{color:'#000000',fontSize:width/35,fontWeight:'bold',marginLeft:'4%'}}>Category :</Text>
                    <Text style={{color:'#696969',fontSize:width/33,fontWeight:'bold',marginLeft:'1%'}}>Vehicles,Cars</Text>  
                </View>
                <View style={{flexDirection:'row',marginTop:'1%'}}>
                    <Text style={{color:'#000000',fontSize:width/35,fontWeight:'bold',marginLeft:'4%'}}>Date :</Text>
                    <Text style={{color:'#696969',fontSize:width/33,fontWeight:'bold',marginLeft:'1%'}}>April 7,2017</Text>  
                </View>
                <View style={{flexDirection:'row',marginTop:'1%'}}>
                    <Text style={{color:'#000000',fontSize:width/35,fontWeight:'bold',marginLeft:'4%'}}>Type  :</Text>
                    <Text style={{color:'#696969',fontSize:width/33,fontWeight:'bold',marginLeft:'1%'}}>Sell</Text>  
                </View>
                <View style={{flexDirection:'row',marginTop:'1%'}}>
                    <Text style={{color:'#000000',fontSize:width/35,fontWeight:'bold',marginLeft:'4%'}}>Price  :</Text>
                    <Text style={{color:'#696969',fontSize:width/33,fontWeight:'bold',marginLeft:'1%'}}>$ 370 </Text>  
                </View>
                <View style={{flexDirection:'row',marginTop:'1%'}}>
                    <Text style={{color:'#000000',fontSize:width/35,fontWeight:'bold',marginLeft:'4%'}}>Condition :</Text>
                    <Text style={{color:'#696969',fontSize:width/33,fontWeight:'bold',marginLeft:'1%'}}>Used</Text>  
                </View>
                <View style={{flexDirection:'row',marginTop:'1%'}}>
                    <Text style={{color:'#000000',fontSize:width/35,fontWeight:'bold',marginLeft:'4%'}}>Warranty :</Text>
                    <Text style={{color:'#696969',fontSize:width/33,fontWeight:'bold',marginLeft:'1%'}}>No</Text>  
                </View>
                <View style={{flexDirection:'row',marginTop:'1%'}}>
                    <Text style={{color:'#000000',fontSize:width/35,fontWeight:'bold',marginLeft:'4%'}}>Location :</Text>
                    <Text style={{color:'#696969',fontSize:width/33,fontWeight:'bold',marginLeft:'1%'}}>Colorado Springs, CO, United States</Text>  
                </View>
                {/* <View style={{flexDirection:'row',width:'60%',height:'20%',marginLeft:'4%',marginTop:'2%'}}>    
                </View> */}
                <View style={{flex:1,marginLeft:'4%',marginTop:'10%'}}>
                    <Paragraph>
                    When new animals are named, zoologists are known to slap on mysterious scientific labels (like Apodemus sylvaticus for the humble mouse). Thankfully, some animal scientists are kind enough to give them second names in English so the rest of us can pronounce them.Sometimes, they even have a sense of humor, translating Chaetophractus vellerosis into “Screaming Hairy Armadillo.” Looks like a blob? Blobfish. Resembles a wormy-thing eating ice cream? Ice Cream Cone Worm.
                    </Paragraph>
                </View>
                <View style={{flex:1,marginLeft:'4%',marginTop:'5%'}}>
                    <Text>1. Metallic paint</Text>
                    <Text>2. Black roof rails</Text>
                    <Text>3. Quattro Sport Differential</Text>
                    <Text>4. S Performance Package </Text>
                    <Text>5. Technik Package </Text>
                    <Text>6. Panoramic sunroof </Text>
                    <Text>7. Black High Gloss Exterior Package</Text>
                </View>     
            </View>
            <View style={styles.rectangle107}>
                <Text style={{textAlign:'center',fontSize:width/28,fontWeight:'bold',color:'#696969'}}>Rating & Reviews</Text>
                <View style={styles.rating}>
                    <Image style={{width:40,height: 40,marginTop:'2%',marginLeft:'3%'}} source={require('./assets/smile1.png')} />
                    <View style={{flex:1,marginLeft:'2%',marginTop:'1%'}} >
                        <Text style={{fontSize:width/35,fontWeight:'700'}}>Jhon</Text>
                            <View style={{flexDirection:'row',marginTop:'1%'}}>
                                <Icon name="star" color='orange'  size={12} />
                                <Icon name="star" color='#cccccc' size={12} />
                                <Icon name="star" color='#cccccc' size={12} />
                                <Icon name="star" color='#cccccc' size={12} />
                                <Icon name="star" color='#cccccc' size={12} />
                                <View style={{flexDirection:'row',marginLeft:'4%'}}>
                                    <Icon name="calendar" color='#cccccc' size={12} />
                                    <Text style={{fontSize:width/40,color:'#cccccc',marginLeft:'6%'}}>October 2,2019</Text>
                                </View> 
                            </View>
                        <Text style={{fontSize:width/40,color:'#cccccc',marginBottom:'3%'}}>Bad</Text>
                    </View>
                </View>
                <View style={styles.rating}>
                    <Image style={{width:40,height: 40,marginTop:'2%',marginLeft:'3%'}} source={require('./assets/smile1.png')} />
                    <View style={{flex:1,marginLeft:'2%',marginTop:'1%'}} >
                        <Text style={{fontSize:width/35,fontWeight:'700'}}>Test User</Text>
                            <View style={{flexDirection:'row',marginTop:'1%'}}>
                                <Icon name="star" color='orange'  size={12} />
                                <Icon name="star" color='#cccccc' size={12} />
                                <Icon name="star" color='#cccccc' size={12} />
                                <Icon name="star" color='#cccccc' size={12} />
                                <Icon name="star" color='#cccccc' size={12} />
                                <View style={{flexDirection:'row',marginLeft:'4%'}}>
                                    <Icon name="calendar" color='#cccccc' size={12} />
                                    <Text style={{fontSize:width/40,color:'#cccccc',marginLeft:'6%'}}>September 17,2019</Text>
                                </View> 
                            </View>
                        <Text style={{fontSize:width/40,color:'#cccccc',marginBottom:'3%'}}>Nice</Text>
                    </View>
                </View>
                <View style={styles.rating}>
                    <Image style={{width:40,height: 40,marginTop:'2%',marginLeft:'3%'}} source={require('./assets/smile1.png')} />
                    <View style={{flex:1,marginLeft:'2%',marginTop:'1%'}} >
                        <Text style={{fontSize:width/35,fontWeight:'700'}}>Onydote01</Text>
                            <View style={{flexDirection:'row',marginTop:'1%'}}>
                                <Icon name="star" color='orange'  size={12} />
                                <Icon name="star" color='orange' size={12} />
                                <Icon name="star" color='orange' size={12} />
                                <Icon name="star" color='orange' size={12} />
                                <Icon name="star" color='orange' size={12} />
                                <View style={{flexDirection:'row',marginLeft:'4%'}}>
                                    <Icon name="calendar" color='#cccccc' size={12} />
                                    <Text style={{fontSize:width/40,color:'#cccccc',marginLeft:'6%'}}>August 24,2019</Text>
                                </View> 
                            </View>
                        <Text style={{fontSize:width/40,color:'#cccccc',marginBottom:'3%'}}>Ok</Text>
                    </View>
                </View>
                <View style={styles.rating}>
                <Image style={{width:40,height: 40,marginTop:'2%',marginLeft:'3%'}} source={require('./assets/smile1.png')} />
                    <View style={{flex:1,marginLeft:'2%',marginTop:'1%'}} >
                        <Text style={{fontSize:width/35,fontWeight:'700'}}>Feljor</Text>
                            <View style={{flexDirection:'row',marginTop:'1%'}}>
                                <Icon name="star" color='orange'  size={12} />
                                <Icon name="star" color='orange' size={12} />
                                <Icon name="star" color='orange' size={12} />
                                <Icon name="star" color='orange' size={12} />
                                <Icon name="star" color='orange' size={12} />
                                <View style={{flexDirection:'row',marginLeft:'4%'}}>
                                    <Icon name="calendar" color='#cccccc' size={12} />
                                    <Text style={{fontSize:width/40,color:'#cccccc',marginLeft:'6%'}}>August 7,2019</Text>
                                </View> 
                            </View>
                        <Text style={{fontSize:width/40,color:'#cccccc',marginBottom:'3%'}}>Nice</Text>
                    </View>
                </View>
                <View style={styles.rating1}>
                            <TouchableOpacity style={{width:'40%',height:'100%',backgroundColor:'#FF9933',flex:1,alignSelf:'center',marginBottom:'5%'}} >    
                                <Text style={{color:'#FFFFFF',fontSize:width/26,fontWeight:'bold',marginLeft:'6%',textAlign:'center',marginTop:'6%'}}>Load More</Text>    
                            </TouchableOpacity>   
                </View>
            </View>
            <View style={styles.rating2}>
                <Image style={{width:80,height:80,marginTop:'2%'}} source={require('./assets/smile2.png')} />
                    <View style={{flex:1,marginLeft:'2%',marginTop:'1%'}} >
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:width/25,fontWeight:'700'}}>Muhammad Umair</Text>
                        <View style={{width:'30%',height:'120%',backgroundColor:'lightgreen',marginLeft:'8%'}}>
                            <Text style={{textAlign:'center',fontSize:width/30,color:'#Fefefe',fontWeight:'800',marginTop:'2%'}}>Verified</Text>
                        </View>
                        </View>
                        <Text style={{fontSize:width/32,color:'#cccccc',marginTop:'2%'}}>Last Login: 10 hours</Text>
                            <View style={{flexDirection:'row',marginTop:'3%'}}>
                                <Icon name="star" color='orange'  size={15} />
                                <Icon name="star" color='orange' size={15} />
                                <Icon name="star-half" color='orange' size={15} />
                                <Icon name="star" color='#cccccc' size={15} />
                                <Icon name="star" color='#cccccc' size={15} />
                                <Text style={{fontSize:width/30,color:'#cccccc',marginLeft:'5%',marginBottom:'2%'}}>5</Text> 
                            </View>
                        
                    </View>
                </View>
        </View>
        <View style={{height:15}}></View>
            </ScrollView>
            <View style={{height:'10%'}}>
            </View>
            <View style={styles.bottomView}>
                            <TouchableOpacity style={{width:'45%',height:'100%',backgroundColor:'#FF9933',flex:1}} >   
                                <View style={{flexDirection:'row',alignSelf:'center',marginTop:'10%'}}>
                                <Icon name="envelope" color='#FFFFFF' size={25} />
                                <Text style={{color:'#FFFFFF',fontSize:width/30,fontWeight:'bold',marginLeft:'7%'}}>Send Message</Text>    
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:'45%',height:'100%',backgroundColor:'#FF9933',flex:1,marginLeft:'0.5%'}} >   
                               <View style={{flexDirection:'row',alignSelf:'center',marginTop:'10%'}}>
                                <Icon name="mobile" color='#FFFFFF' size={25} />
                                <Text style={{color:'#FFFFFF',fontSize:width/30,fontWeight:'bold',marginLeft:'7%'}}>Call Now</Text>    
                            </View>
                            </TouchableOpacity>
            </View>
            
      </View>  
        ); 
    }  
}  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F6F6',
    },
      smile1726471960720 : {
        width:500,
        height: 250.7,
        alignSelf:'center',
        borderWidth: 0.7,
        borderColor: "#707070",flex:1
      },
      rectangle105 : {
        width: '92%',
        borderColor:'#000',
        height: '50%',
        marginTop:'3%',
        backgroundColor:'#fff',
        alignSelf:'center',  
        shadowColor:'#000',
        shadowOpacity:0,
        shadowRadius:1,
        shadowOffset:{
            width:10,
            height:5 },flex:1
        
        },
        rectangle106 : {
            width: '92%',
            height: '150%',
            marginTop:'3%',
            flex:1,
            backgroundColor:'#fff',
            alignSelf:'center',  
            shadowColor:'#000',
            shadowOpacity:0,
            shadowRadius:1,
            shadowOffset:{
                width:10,
                height:5 },
            
            },
            rectangle107 : {
                width: '92%',
                height: '100%',
                marginTop:'3%',
                flex:1,
                backgroundColor:'#fff',
                alignSelf:'center',  
                shadowColor:'#000',
                shadowOpacity:0.8,
                shadowRadius:10,
                shadowOffset:{
                    width:0,
                    height:10 },
                
                },
                rating:{
                    width:'96%',
                    height:'18%',
                    flexDirection:'row',
                    alignSelf:'center',
                    marginTop:'3%',
                    borderColor: '#fff',
                    borderBottomWidth: 0,
                    shadowColor: '#ccc',
                    shadowOffset: { width: 0, height: 10},
                    shadowOpacity: 0.8,
                    shadowRadius: 10.00,
                    elevation: 1,
                },
            rating1:{
                    width:'96%',
                    height:'18%',
                    alignSelf:'center',
                    marginTop:'3%',
                },
                rating2:{
                    width:'92%',
                    height:'18%',
                    flexDirection:'row',
                    backgroundColor:'#FFFFFF',
                    alignSelf:'center',
                    marginTop:'3%',
                    borderColor: '#fff',
                    borderBottomWidth: 0,
                    shadowColor: '#ccc',
                    shadowOffset: { width: 0, height: 10},
                    shadowOpacity: 0.8,
                    shadowRadius: 10.00,
                    elevation: 1,
                },
            bottomView: {
            width: '100%',
            height: '8%',
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            borderWidth:1,
            borderColor:'#cccccc',
            flexDirection:'row'
          },            
  });