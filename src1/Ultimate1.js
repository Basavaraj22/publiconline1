import React, {Component} from 'react';  
import { Text, View ,Dimensions,StyleSheet,Image,Picker,ScrollView,TextInput,TouchableOpacity,TouchableHighlight,ImageBackground,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Searchbar,Card } from 'react-native-paper';
import { Header,CheckBox} from 'react-native-elements'
import ImagePicker from 'react-native-image-picker';

const {width,height} = Dimensions.get('window');
const options={
    title:'select a photo',
    takePhotoButtonTitle:'Take a Photo',
    chooseFrmoLibraryButtonTitle:'Choose from Gallery',
    quality:1
};
export default class Basic extends Component{  
  // static navigationOptions = {
  //   title: 'Sign Up',
  //   headerStyle: {
  //     backgroundColor: '#FF9933',
  //   },
  //   headerTintColor: '#FF9933',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //     color:'#FFFFFF'
  //   },
  // };   
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };  
    render() {  
        return(  
          <ScrollView >
            <View style={styles.container}>
              
                <View style={styles.rectangle105}>
                      <Text style={{fontSize:width/23,fontWeight:'bold',textAlign:'center',marginTop:'4%'}}>Create an Account</Text>
                      <View style={{flex:1,marginTop:'0%',alignSelf:'center'}}>
                          <View style={{flexDirection:'row',marginTop:'1%'}}>
                              <Text style={{textAlign:'center',color:'#cccccc'}}>___________________</Text>
                              <Text style={{textAlign:'center',marginLeft:'10%',color:'#cccccc'}}>___________________</Text>
                          </View>
                          <View style={{flex:1}}>
                              <TextInput style={styles.input} placeholder="POL"/> 
                          </View>
                          <View style={{flex:1}}>
                              <TextInput style={styles.input} placeholder="Business Title"/> 
                          </View>
                          <View style={{flex:1}}>
                              <TextInput style={styles.input} placeholder="First Name"/> 
                          </View>
                          <View style={{flex:1}}>
                              <TextInput style={styles.input} placeholder="Last Name"/> 
                          </View>
                          <View style={{flex:1}}>
                              <TextInput style={styles.input} placeholder="email addres"/> 
                          </View>
                          <View style={{flex:1}}>
                              <TextInput style={styles.input} placeholder="Phone Number"/>
                          </View>
                          <View style={{flex:1}}>
                              <TextInput style={styles.input} placeholder="Cost"/> 
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>Type:</Text>
                              <TextInput style={styles.input1}>
                              {/* <Picker
  
>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker> */}
                                </TextInput> 
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>Address:</Text>
                              <TextInput style={styles.input1} /> 
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>Iframe Address:</Text>
                              <TextInput style={styles.input1} /> 
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>City:</Text>
                              <TextInput style={styles.input1} /> 
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>State:</Text>
                              <TextInput style={styles.input1} /> 
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>Country:</Text>
                              <View style={{flexDirection:'row',width:'100%',marginTop:'3%'}}>
                                <Image style={{flex:1,width:'25%',height:'100%'}} source={require('./assets/BB.png')} />
                                <TextInput style={{flex:3,borderWidth:1,borderColor:'#000000',width:'60%',height:'100%',marginLeft:'2%',borderRadius: 5,borderWidth: 1,backgroundColor:'#fff',borderColor: 'lightgray',shadowRadius: 16,elevation: 20,}} /> 
                              </View>
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>Website:</Text>
                                  <TextInput style={styles.input1} /> 
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>Tag's:</Text>
                              <TextInput style={styles.input1} placeholder="Tag's"/> 
                          </View>
                          <View style={{flex:1,height:'10%'}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>Text:</Text>
                              <TextInput 
                              multiline={true}
                              numberOfLines={10}
                              style={styles.input1} /> 
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>Profile Image:</Text>
                              <View style={{backgroundColor:'red',borderWidth:1,borderColor:'#000000',height:'30%',borderRadius: 5,borderWidth: 0,backgroundColor:'#fff',borderColor: 'lightgray',shadowRadius: 3,elevation: 2}}>
                              <TouchableOpacity style={{width:'35%',height:'40%',backgroundColor:'#CCCCCC',marginLeft:'8%',marginTop:'6%'}}
                              onPress={this.chooseFile.bind(this)} >
                                <Text style={{textAlign:'center'}}>Choose file</Text>
                                </TouchableOpacity>
                              </View> 
                              <View>
                                <Image
                                   source={{ uri: this.state.filePath.uri }}
                                      style={{ width: 100, height: 100 }}
                                      />
                                </View>
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>Image1</Text>
                              <TouchableOpacity style={{width:'30%',height:'15%',backgroundColor:'#CCCCCC',marginLeft:'0%',marginTop:'2%'}}
                              onPress={this.chooseFile.bind(this)} >
                                <Text style={{textAlign:'center'}}>Choose file</Text>
                                </TouchableOpacity>
                              <View>
                                <Image
                                   source={{ uri: this.state.filePath.uri }}
                                      style={{ width: 100, height: 100 }}
                                      />
                                </View>
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>Image2</Text>
                              <TouchableOpacity style={{width:'30%',height:'15%',backgroundColor:'#CCCCCC',marginLeft:'0%',marginTop:'2%'}}
                              onPress={this.chooseFile.bind(this)} >
                                <Text style={{textAlign:'center'}}>Choose file</Text>
                                </TouchableOpacity>
                              <View>
                                <Image
                                   source={{ uri: this.state.filePath.uri }}
                                      style={{ width: 100, height: 100 }}
                                      />
                                </View>
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>Image3</Text>
                              <TouchableOpacity style={{width:'30%',height:'15%',backgroundColor:'#CCCCCC',marginLeft:'0%',marginTop:'2%'}}
                              onPress={this.chooseFile.bind(this)} >
                                <Text style={{textAlign:'center'}}>Choose file</Text>
                                </TouchableOpacity>
                              <View>
                                <Image
                                   source={{ uri: this.state.filePath.uri }}
                                      style={{ width: 100, height: 100 }}
                                      />
                                </View>
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>Image4</Text>
                              <TouchableOpacity style={{width:'30%',height:'15%',backgroundColor:'#CCCCCC',marginLeft:'0%',marginTop:'2%'}}
                              onPress={this.chooseFile.bind(this)} >
                                <Text style={{textAlign:'center'}}>Choose file</Text>
                                </TouchableOpacity>
                              <View>
                                <Image
                                   source={{ uri: this.state.filePath.uri }}
                                      style={{ width: 100, height: 100 }}
                                      />
                                </View>
                          </View>
                          <View style={{flex:1}}>
                              <Text style={{fontWeight:'700',fontSize:width/30,marginTop:'8%'}}>Image5</Text>
                              <TouchableOpacity style={{width:'30%',height:'15%',backgroundColor:'#CCCCCC',marginLeft:'0%',marginTop:'2%'}}
                              onPress={this.chooseFile.bind(this)} >
                                <Text style={{textAlign:'center'}}>Choose file</Text>
                                </TouchableOpacity>
                              <View>
                                <Image
                                   source={{ uri: this.state.filePath.uri }}
                                      style={{ width: 100, height: 100 }}
                                      />
                                </View>
                          </View>
                          <View style={{flexDirection:'row',bottom:'0%'}}>
                                <CheckBox style={{marginLeft:'5%'}}></CheckBox>
                                <Text style={{marginTop:'1%',fontSize:width/25,fontWeight:'bold',color:'grey',marginTop:'4%'}}>I agree to</Text>
                                <Text style={{marginTop:'1%',fontSize:width/25,fontWeight:'bold',marginLeft:'2%',color:'red',marginTop:'4%'}}>Privacy Policy</Text>
                          </View>
                          <View style={{flexDirection:'row',bottom:'4%'}}>
                                <CheckBox style={{marginLeft:'5%'}}></CheckBox>
                                <Text style={{marginTop:'1%',fontSize:width/25,fontWeight:'bold',color:'grey',marginTop:'4%'}}>I agree to</Text>
                                <Text style={{marginTop:'1%',fontSize:width/25,fontWeight:'bold',marginLeft:'2%',color:'red',marginTop:'4%'}}>Term of Services</Text>
                          </View>
                          <View style={{flex:1,}}>
                              <TouchableOpacity style={{marginTop:'2%',padding:'2%',height: '100%',width:'50%',backgroundColor:'#DC143C'}}>
                                <Text style={{textAlign:'center',fontWeight:'bold',fontSize:width/25,color:'#FFFFFF'}}>Register Account</Text>
                              </TouchableOpacity> 
                          </View>
                          <View style={{flex:1,top:20}}> 
                          <View style={{flexDirection:'row'}}>
                                <Text style={{marginTop:'1%',fontSize:width/25,fontWeight:'bold',color:'grey'}}>Already have an account?</Text>
                                <Text style={{marginTop:'1%',fontSize:width/25,fontWeight:'700',marginLeft:'2%',color:'red'}}>Log in</Text>
                          </View>
                          </View>
                          <View style={{height:60}}></View>
                           {/* <TextInput style={styles.input} placeholder="Business Title"/>
                              <TextInput style={styles.input} placeholder="First Name"/>
                              <TextInput style={styles.input} placeholder="Last Name"/>
                              <TextInput style={styles.input} placeholder="email address"/>
                              <TextInput style={styles.input} placeholder="Phone Number"/>
                              <View style={styles.input1}>
                                <Text>Type:</Text>
                                <TextInput style={styles.input12} placeholder="POL"/>
                          </View> */}
                      </View>
                      
                </View>
              
            </View> 
            {/* <View style={{height:50}}></View> */}
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
        flex:1,
        width: '90%',
        height:'80%',
        marginTop:'5%',
        borderWidth: 1,
        alignSelf:'center',
    borderRadius: 5,
    backgroundColor:'#fff',
    borderColor: 'lightgray',
    borderBottomWidth: 0,
    shadowRadius: 10
      }, 
      input: {
        marginTop:'10%',
        padding:'2%',
        height: '70%',
        width:'100%',
        borderRadius: 5,
        borderWidth: 0,
    backgroundColor:'#fff',
    borderColor: 'lightgray',
    shadowRadius: 16,
    elevation: 20,
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
