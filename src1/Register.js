import React, {Component} from 'react';  
import { Text, View ,Dimensions,StyleSheet,Image,Picker,ScrollView,TextInput,TouchableOpacity,ImageBackground,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CheckBox } from 'react-native-elements'


const {width,height} = Dimensions.get('window');


export default class Register extends Component{  
    constructor(props){
		super(props)
		this.state={
            Fname:'',
            Lname:'',
            email:'', 
            phNum:'',
            password:'',				
		}
	}
	
	userRegister = () =>{
		//alert('ok'); // version 0.48
		const {navigate} = this.props.navigation;
        const {Fname} = this.state;
        const {Lname} = this.state;
		const {Uemail} = this.state;
        const {PhoneNumber} = this.state;
        const {Password} = this.state;
		
		
		fetch('https:/publiconline.in/User/register', {
			method: 'post',
			headers:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
                first_name: this.state.Fname,
                last_name: this.state.Lname,
                email: this.state.Uemail,
                password: this.state.Password,
                phone: this.state.PhoneNumber,
				
			})
			
		})
		.then((response) => response.json())
			.then((responseJson) =>{
                if(responseJson.status=='1'){
                    navigate('Login')
                 }
                console.log(responseJson)
			})
			.catch((error)=>{
				console.error(error);
			});
		
	}
    render() {  
        return(  
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <Text style={styles.wel}>Register with us!</Text>
                    <View style={{flexDirection:'row',width:'80%',marginLeft:'10%',borderBottomWidth:1,borderBottomColor:'#cccccc',padding:'1%'}}>
                    <View style={{top:'2%'}}>
                        <Icon  name="user-alt" color='#cccccc' size={20} /> 
                        </View>    
                        <TextInput onChangeText= {Fname => this.setState({Fname})}
                        style={styles.textInput}
                        placeholder='First Name'
                        />
                    </View>
                    <View style={{flexDirection:'row',width:'80%',marginLeft:'10%',borderBottomWidth:1,borderBottomColor:'#cccccc',padding:'1%'}}>
                    <View style={{top:'2%'}}>
                        <Icon  name="user-alt" color='#cccccc' size={20} /> 
                        </View>    
                        <TextInput onChangeText= {Lname => this.setState({Lname})}
                        style={styles.textInput}
                        placeholder='Last Name'
                        />
                    </View>
                    <View style={{flexDirection:'row',width:'80%',marginLeft:'10%',borderBottomWidth:1,borderBottomColor:'#cccccc',padding:'1%'}}>
                    <View style={{top:'2%' }}>
                        <Icon  name="envelope-open-text" color='#cccccc' symbol="" size={20} /> 
                        </View>    
                        <TextInput onChangeText= {Uemail => this.setState({Uemail})}
                        style={styles.textInput}
                        placeholder='Email Address'
                        />
                    </View>
                    <View style={{flexDirection:'row',width:'80%',marginLeft:'10%',borderBottomWidth:1,borderBottomColor:'#cccccc',padding:'1%'}}>
                        <View style={{top:'2%'}}>
                        <Icon  name="mobile" color='#cccccc' size={20} /> 
                        </View>   
                        <TextInput onChangeText= {PhoneNumber => this.setState({PhoneNumber})}
                        style={styles.textInput}
                        placeholder='Phone Number'
                        />
                    </View>
                    <View style={{flexDirection:'row',width:'80%',marginLeft:'10%',borderBottomWidth:1,borderBottomColor:'#cccccc',padding:'1%'}}>
                        <View style={{top:'2%'}}>
                        <Icon  name="lock" color='#cccccc' size={20} /> 
                        </View> 
                        <TextInput onChangeText= {Password => this.setState({Password})}
                        style={styles.textInput}
                        placeholder='Your Password'
                        />
                    </View>
                    <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'4%'}}>
                    <CheckBox ></CheckBox>
                        <Text style={{color:'#000000',marginTop:'4%',fontWeight:'400',marginRight:'1%'}}>Term & Condition</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={this.userRegister}> 
                            <Text style={{color:'#FF9933'}}>REGISTER </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{textAlign:'center',marginTop:'2%'}}>
                        OR
                    </Text>
                    <View>
                        <TouchableOpacity style={{backgroundColor:'#3b5998',flexDirection:'row',height:'15%',width:'70%',alignSelf:'center',padding:'2%'}}>
                            <Icon name="facebook-square" color='#FFFFFF' size={20} /> 
                            <Text style={{color:'#FFFFFF',marginLeft:'20%'}}>Continue with Facebook </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.google}>
                            <Icon name="google" color='#4285F4' size={20} /> 
                            <Text style={{color:'#000000',marginLeft:'20%'}}>Sign in with Google</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Login')}>
                    <Text style={styles.textStyle}>Already Have Account?Login Here</Text>
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
    textInput: {
        
        marginLeft:'2%',
        fontSize:width/25 ,
        backgroundColor: '#F6F6F6',
        padding:'2%',
        marginBottom:'1%',
        top:'2%'
        
    },
    wel:{
        fontSize:width/13,
        padding:'5%',
        alignSelf:'center'
    }   ,
    button: {
        alignItems: 'center',
        width:'80%',
        marginLeft:'10%',
        marginTop:'5%',
        backgroundColor: '#FFFFFF',
        borderColor:'#FF9933',
        borderWidth:1,
        padding: 10
      }, 
      google:{
        backgroundColor:'#FFFFFF',flexDirection:'row',height:'15%',width:'70%',
        alignSelf:'center',
        padding:'2%',marginTop:'1%',
        shadowColor: 'rgba(46, 229, 157, 0.4)',
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20 ,
    shadowOffset : { width: 1, height: 13},
        
      } ,
      bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderWidth:1,
        borderColor:'#cccccc'
      },
      textStyle: {
        color: '#cccccc',
        fontSize: 13,
      },  
  });