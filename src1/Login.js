import React, {Component} from 'react';  
import { Text, View ,Dimensions,StyleSheet,Image,Picker,ScrollView,TextInput,TouchableOpacity,ImageBackground,Button,Keyboard, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const {width,height} = Dimensions.get('window');


export default class Login extends Component{  
    constructor(props){
		super(props)
		this.state={
		    userEmail:'',
            userPassword:'',
           
		}
	}
	//   componentDidMount() {
    //       this._loadInitialState().done();
    //   }
    //   _loadInitialState= async () => {
    //       var value = await AsyncStorage.getItem('user')
    //   }
	// login = () =>{
        
	// 	const {userEmail,userPassword} = this.state;
	// 	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
	// 	if(userEmail==""){
	// 		//alert("Please enter Email address");
	// 	  this.setState({email:'Please enter Email address'})
			
	// 	}
		
	// 	else if(reg.test(userEmail) === false)
	// 	{
	// 	//alert("Email is Not Correct");
	// 	this.setState({email:'Email is Not Correct'})
	// 	return false;
	// 	  }

	// 	else if(userPassword==""){
	// 	this.setState({email:'Please enter password'})
	// 	}
	// 	else{
		
	// 	fetch('http://13.235.168.108:8080/login',{
	// 		method:'POST',
	// 		headers:{
	// 			'Accept': 'application/json',
	// 			'Content-type': 'application/json'
	// 		},
	// 		body:JSON.stringify({
	// 			// we will pass our input data to server
	// 			email: this.state.userEmail,
	// 			password: this.stateuserPassword
	// 		})
			
	// 	})
	// 	.then((response) => response.json())
	// 	 .then((responseJson)=>{
    //         this.props.navigation.navigate('Home');
    //         console.log(responseJson);
	// 	 })
	// 	 .catch((error)=>{
	// 	 console.error(error);
	// 	 });
	// 	}
	// 	Keyboard.dismiss();
    // }
   
	login = () =>{
         const {navigate} = this.props.navigation;
		const {userEmail,userPassword} = this.state;
		// let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(userEmail==""){
			//alert("Please enter Email address");
		  this.setState({email:'Please enter Email address'})
			
		}
		
		// else if(reg.test(userEmail) === false)
		// {
		// //alert("Email is Not Correct");
		// this.setState({email:'Email is Not Correct'})
		// return false;
		//   }

		else if(userPassword==""){
		this.setState({password:'Please enter password'})
		}
		else{
		fetch('https:/publiconline.in/User/login',{
			method:'POST',
			headers:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				user_id: this.state.userEmail,
				password: this.state.userPassword
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
                 if(responseJson.status=='1'){
                    navigate('dashboardHome')
                 }
            
			 
             console.log(responseJson)
		 })
		 .catch((error)=>{
         console.error(error);
         
         });
		}
		
		
		Keyboard.dismiss();
	}
    render() {  
        return(  
            <View style={styles.container}>
                <View style={{height:'25%',backgroundColor:'#FF9933'}}>
                   <View style={{height:'30%',marginLeft:'15%',marginTop:'12%',marginRight:'25%'}}>
                   <Image style={{width:280,height:70}} source={require('./assets/Group.png')} />
                   </View>
                    {/* <View style={{width:'60%',height:'40%',borderEndWidth:2,margin:'10%',borderStartWidth:2,borderTopWidth:2,borderBottomWidth:2,borderColor:'#4c4c4c'}}>
                        <Text style={{textAlign:'center',marginTop:'20.5%',fontWeight:'bold',color:'#4c4c4c'}}>Modern Classifields</Text>
                    </View> */}
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.wel}>Welcome Back</Text>
                    <View style={{flexDirection:'row',width:'80%',height:'8%',marginLeft:'10%',borderBottomWidth:1,marginTop:'6%',borderBottomColor:'#cccccc'}}>
                        <Icon name="envelope" color='#cccccc' size={20} />    
                        <TextInput 
                        style={styles.textInput}
                        placeholder='Your Email Address'
                        onChangeText={userEmail => this.setState({userEmail})}
                        />
                    </View>
                    <View style={{flexDirection:'row',width:'80%',height:'8%',marginLeft:'10%',borderBottomWidth:1,marginTop:'6%',borderBottomColor:'#cccccc'}}>
                        <Icon  name="lock" color='#cccccc' size={20} />  
                        <TextInput 
                        style={styles.textInput}
                        placeholder='Your Password'
                        onChangeText={userPassword => this.setState({userPassword})}
                        />
                    </View>
                    <View style={{flexDirection:'row-reverse'}}>
                        <Text style={{color:'#cccccc',marginRight:'10%',marginTop:'5%'}}>Forgot Password</Text>
                    </View>
                    {/*  */}
                    <View>
                        <TouchableOpacity style={styles.button} onPress={this.login}>
                            <Text style={{color:'#FF9933'}}>SUBMIT </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{textAlign:'center',marginTop:'2%'}}>
                        OR
                    </Text>
                    <View>
                        <TouchableOpacity style={{backgroundColor:'#3b5998',flexDirection:'row',height:'15%',width:'70%',alignSelf:'center',padding:'2%'}}
                        >
                            <Icon name="facebook-square" color='#FFFFFF' size={20} /> 
                            <Text style={{color:'#FFFFFF',marginLeft:'20%'}}>Continue with Facebook </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.google}>
                            <Icon name="google" color='#4285F4' size={20} /> 
                            <Text style={{color:'#000000',marginLeft:'20%'}}>Sign in with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{color:'#FF9933'}}>GUEST LOGIN </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomView} >
                    <TouchableOpacity  onPress={() =>  this.props.navigation.navigate('Register')}>
                    <Text >Not a Menber Yet? Register with us.</Text>
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
        padding:'1%',
        marginBottom:'2%'
        
    },
    wel:{
        fontSize:width/15,
        marginLeft:'8%',
        padding:'5%'
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