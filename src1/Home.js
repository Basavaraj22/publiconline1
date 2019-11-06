import React, {Component} from 'react';  
import { Text, View ,Dimensions,StyleSheet,Image,Picker,ScrollView,TextInput,TouchableOpacity,TouchableHighlight,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Searchbar,Card } from 'react-native-paper';
import { Header} from 'react-native-elements'
  
export default class HomeScreen extends Component{  
  static navigationOptions = {
    title: 'Public Online',
    headerStyle: {
      backgroundColor: '#FF9933',
    },
    headerTintColor: '#FF9933',
    headerTitleStyle: {
      fontWeight: 'bold',
      color:'#F6EFEF'
    },
  };     
    render() {  
        return(  
            <View style={styles.container}>
                <View style={{width:400,height:60,flexDirection:"row",marginLeft:30}}>
                            <TouchableOpacity style={styles.rectangle103}>   
                            <View style={{alignItems:'center',flexDirection:'row'}} >
                            
                            <Icon style={{marginLeft:20,marginBottom:30,color:'#F6EFEF',marginTop:10}} size={15} name="map-marker-alt"/>
                            <Text style={{color:'#F6EFEF',marginBottom:30,marginLeft:20,marginTop:10}}>Dhaka</Text>
                            </View>    
                            </TouchableOpacity>
                            <Searchbar style={styles.rectangle104} placeholder="Search" />
                </View>
                {/* <View style={{height:10}}></View> */}
                <View style={styles.card1}>
                            <Card  style={styles.rectangle105} onPress={() =>  this.props.navigation.navigate('Community')}>   
                            <View style={{alignItems:'center'}} >
                            <View style={{flexDirection:'row'}}>
                            <Icon size={25} name="paper-plane"/>
                            
                            </View>
                            <Text style={{fontSize:18,fontWeight:'500'}} >Basic Listing</Text>
                            <Text style={{fontSize:13}}>2326 Items</Text>
                            </View>    
                            </Card>
                            <Card  style={styles.rectangle105} onPress={() =>  this.props.navigation.navigate('Ultimate')}>   
                            <View style={{alignItems:'center'}} >
                            <View style={{flexDirection:'row'}}>
                            <Icon  size={25} name="user"/>
                            
                            </View>
                            <Text style={{fontSize:18,fontWeight:'500'}} >Ultimate Plan</Text>
                            <Text style={{fontSize:13}}>2326 Items</Text>
                            </View>    
                            </Card>
                </View>
                <View style={styles.card1} >
                            <Card  style={styles.rectangle105} onPress={() =>  this.props.navigation.navigate('Community1')}>   
                            <View style={{alignItems:'center'}} >
                            <View style={{flexDirection:'row'}}>
                            <Icon  size={25} name="user"/>
                            
                            </View>
                            <Text style={{fontSize:18,fontWeight:'500'}} >Prime Plan</Text>
                            <Text style={{fontSize:13}}>2326 Items</Text>
                            </View>    
                            </Card>
                            <Card  style={styles.rectangle105}>   
                            <View style={{alignItems:'center'}} >
                            <View style={{flexDirection:'row'}}>
                            <Icon  size={25} name="user"/>
                            
                            </View>
                            <Text style={{fontSize:18,fontWeight:'500'}} >Jobs</Text>
                            <Text style={{fontSize:13}}>2326 Items</Text>
                            </View>    
                            </Card>
                </View>
                <View>
                    <View style={styles.card1}>
                            <Card  style={styles.rectangle105}>   
                            <View style={{alignItems:'center'}} >
                            <View style={{flexDirection:'row'}}>
                            <Icon  size={25} name="home"/>
                            </View>
                            <Text style={{fontSize:18,fontWeight:'500'}}>Housing</Text>
                            <Text style={{fontSize:13}}>2326 Items</Text>
                            </View>    
                            </Card>
                            <Card  style={styles.rectangle105}>   
                            <View style={{alignItems:'center'}} >
                            <View style={{flexDirection:'row'}}>
                            <Icon  size={25} name="user"/>
                            </View>
                            <Text style={{fontSize:18,fontWeight:'500'}} >Personals</Text>
                            <Text style={{fontSize:13}}>2326 Items</Text>
                            </View>    
                            </Card>
                </View>
                <View style={styles.card1}>
                            <Card  style={styles.rectangle105}>   
                            <View style={{alignItems:'center'}} >
                            <View style={{flexDirection:'row'}}>
                            <Icon  size={25} name="layer-group"/>
                            </View>
                            <Text style={{fontSize:18,fontWeight:'500'}}>Forums</Text>
                            <Text style={{fontSize:13}}>2326 Items</Text>
                            </View>    
                            </Card>
                            <Card  style={styles.rectangle105}>   
                            <View style={{alignItems:'center'}} >
                            <View style={{flexDirection:'row'}}>
                            
                            </View>
                            <Text ></Text>
                            <Text> </Text>
                            </View>    
                            </Card>
                    </View>
                </View>
            </View>  
        ); 
    }  
}  
HomeScreen.navigationOptions={  
    tabBarIcon:({tintColor, focused})=>(  
    <Icon  
        name={focused ? "home" : "home"}  
        color={tintColor}  
        size={25}  
    />  
)  
}  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    card1:{
        width:400,height:80,flexDirection:"row",marginLeft:15,marginTop:70,marginRight:15
    },
    rectangle103 : {
        width: 120,
        height: 50,
        borderRadius: 5.3,
        backgroundColor: "#623192",
        borderStyle: "solid",
        borderWidth: 0.7,
        borderColor: "#707070",
        alignSelf:'center',  
      },
      rectangle104 : {
        width: 230,
        height: 50,
        borderRadius: 5.3,
        backgroundColor: "#FFFFFF",
        borderStyle: "solid",
        alignSelf:'center',  
      },
      profile : {
        width: 50.7,
        height: 19.3,
        fontFamily: "Roboto",
        fontSize: 14.7,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 19.3,
        letterSpacing: 0,
        textAlign: "left",
        color: "#FFFFFF"
      },
      rectangle105 : {
        width: '45%',
        height: '160%',
        backgroundColor:'#fff',
        alignSelf:'center',  
        marginBottom:10,
        marginLeft:'2%',
        paddingTop:25,
        shadowColor:'#FFFFFF',
        shadowOpacity:0,
        shadowRadius:5,
        shadowOffset:{
            width:10,
            height:5
        },
        
      },           
  });