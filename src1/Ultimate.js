import React, {Component} from 'react';  
import { Text, View ,Dimensions,StyleSheet,Image,Picker,ScrollView,TextInput,TouchableOpacity,TouchableHighlight,ActivityIndicator,FlatList,YellowBox,ImageBackground,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Searchbar,Card } from 'react-native-paper';
import { Header,CheckBox} from 'react-native-elements'
import ImagePicker from 'react-native-image-picker';

const {width,height} = Dimensions.get('window');
  
export default class Community extends Component{  
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true
        }
     
        YellowBox.ignoreWarnings([
         'Warning: componentWillMount is deprecated',
         'Warning: componentWillReceiveProps is deprecated',
       ]);
     
      }
      
     GetItem () {
        bussiness_title,
        name,
        city,
        imageFile       
      }
      
      FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      }
     
      webCall=()=>{
        
       return fetch('https:/publiconline.in/User/getUltimate')
       
              .then((response) => response.json())
              .then((responseJson) => {
                this.setState({
                  isLoading: false,
                  dataSource: responseJson
                }, function() {
                    
                  // In this block you can do something with new state.
                });
                console.log(responseJson)
              })
              .catch((error) => {
                console.error(error);
              });
      }
     
      componentDidMount(){
        
       this.webCall();
     
      }
    render() {  
        if (this.state.isLoading) {
            return (
       
             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       
                <ActivityIndicator size="large" />
       
              </View>
              
            );
       
          }       
        return(  
        <ScrollView >
            <View style={styles.container}>
            <FlatList
       
       data={ this.state.dataSource }
       
       ItemSeparatorComponent = {this.FlatListItemSeparator}

       renderItem={({item}) =>
                    // <Card style={styles.rectangle105} onPress={() =>  this.props.navigation.navigate('Rks')}>
                        
                    //     <View style={{flexDirection:'row',marginTop:'5%',marginLeft:'8%'}}>
                    //         <Icon  size={25} name='briefcase'/>
                    //         <Text onPress={this.GetItem.bind(this, item.bussiness_title)}  style={{fontSize:width/30,fontWeight:'700',marginLeft:'3%',marginTop:'1%',color:'#CCCCCC'}}>{item.bussiness_title}</Text>
                    //     </View>
                    //     <View style={{flexDirection:'row',marginTop:'2%',marginLeft:'8%'}}>
                    //         <Text onPress={this.GetItem.bind(this, item.name)} style={{fontSize:width/25,fontWeight:'700',marginTop:'2%',color:'#000000'}}>{item.name}</Text>
                    //         <Icon  size={25} color='green' name='check-circle'style={{marginLeft:'3%',marginTop:'2%'}}/>
                    //     </View>
                    //     <Text onPress={this.GetItem.bind(this, item.city)} style={{fontSize:width/30,fontWeight:'700',marginTop:'0%',color:'#cccccc',marginLeft:'8%'}}>{item.city}</Text>
                    //         <View style={{height:15}}></View>
                    // </Card>
                     <Card style={styles.rectangle105} onPress={() =>  this.props.navigation.navigate('Wwe')}>
                        <ImageBackground style={styles.smile1726471960720} source = {{uri:"https://publiconline.in/uploads/users/" + item.imageFile2 }}> 
                          <Image source={require('./assets/heart.png')} style={{width:30,height:30,marginLeft:'85%',marginTop:'5%'}}/>  
                        </ImageBackground>
                        <View  style={{flexDirection:'row',marginTop:'5%',marginLeft:'8%'}}>
                            <Icon  size={25} name='briefcase'/>
                            <Text onPress={this.GetItem.bind(this, item.bussiness_title)} style={{fontSize:width/30,fontWeight:'700',marginLeft:'3%',marginTop:'1%',color:'#CCCCCC'}}>{item.bussiness_title}</Text>
                        </View>
                        <View onPress={this.GetItem.bind(this, item.name)} style={{flexDirection:'row',marginTop:'0%',marginLeft:'8%'}}>
                            <Text onPress={this.GetItem.bind(this, item.name)} style={{fontSize:width/25,fontWeight:'700',marginTop:'2%',color:'#000000'}}>{item.name}</Text>
                            <Icon  size={25} color='green' name='check-circle'style={{marginLeft:'3%',marginTop:'2%'}}/>
                        </View>
                        <Text onPress={this.GetItem.bind(this, item.city)} style={{fontSize:width/30,fontWeight:'700',marginTop:'0%',color:'#cccccc',marginLeft:'8%'}}>{item.city}</Text>
                            <View style={{height:15}}></View>
                    </Card>
                    /* <Card style={styles.rectangle105} onPress={() =>  this.props.navigation.navigate('Wwe')}>
                        <ImageBackground style={styles.smile1726471960720} source={require('./assets/bg.jpg')}>
                          <Image source={require('./assets/heart.png')} style={{width:30,height:30,marginLeft:'85%',marginTop:'5%'}}/>  
                        </ImageBackground>
                        <View style={{flexDirection:'row',marginTop:'5%',marginLeft:'8%'}}>
                            <Icon  size={25} name='briefcase'/>
                            <Text style={{fontSize:width/30,fontWeight:'700',marginLeft:'3%',marginTop:'1%',color:'#CCCCCC'}}>Art Entertainment & Leisures</Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:'2%',marginLeft:'8%'}}>
                            <Text style={{fontSize:width/25,fontWeight:'700',marginTop:'2%',color:'#000000'}}>WWE</Text>
                            <Icon  size={25} color='green' name='check-circle'style={{marginLeft:'3%',marginTop:'2%'}}/>
                        </View>
                        <Text style={{fontSize:width/30,fontWeight:'700',marginTop:'0%',color:'#cccccc',marginLeft:'8%'}}>Jaipur</Text>
                            <View style={{height:15}}></View>
                    </Card>
                    
                    <View style={{height:20}}>
                    </View> 
                    <View>
                    </View>   */
                
        }

                    keyExtractor={(item, index) => index.toString()}

                />
            </View> 
        </ScrollView> 
        ); 
    }  
}  
// NewpostScreen.navigationOptions={  
//     tabBarIcon:({tintColor, focused})=>(  
//     <Icon  
//         name={focused ? "clone" : "clone"}  
//         color={tintColor}  
//         size={25}  
//     />  
// )  
// }  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F6F6',
      width:'100%',
      
    },
      rectangle105 : {
          width:'80%',
        flex:1,
        marginTop:'5%',
        marginBottom:'5%',
        borderWidth: 1,
        alignSelf:'center',
    borderRadius: 1,
    backgroundColor:'#fff',
    borderColor: 'lightgray',
    borderBottomWidth: 0,
    shadowRadius: 12,
    shadowOpacity:2,
    shadowOffset:{
        width:10,
        height:5
    },
      }, 
      smile1726471960720 : {
        width: '100%',
        height: 300.7,
        alignSelf:'center',
        marginTop:0,
        borderWidth: 0.7,
        borderColor: "#707070"
      },
     input1:{
      marginTop:'2%',
      padding:'2%',
      height: '55%',
      width:'100%',
      borderRadius: 5,
      borderWidth: 0,
  backgroundColor:'#fff',
  borderColor: 'lightgray',
  shadowRadius: 16,
  elevation: 20,
     } ,
     input11:{
      marginTop:'2%',
      padding:'2%',
      height: '100%',
      width:'50%',
      borderRadius: 2,
      borderWidth: 0,
  backgroundColor:'#DC143C',
  
  shadowRadius: 0,
  elevation: 0,
     } ,
     input12:{
      height: '60%',
      width:'85%',
      alignSelf:'center',
      borderRadius: 5,
      borderWidth: 1,
  backgroundColor:'#fff',
  borderColor: 'lightgray',
  shadowRadius: 10,
  marginTop:'3%'
     }         
  });
