import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import { Text, View ,StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator } from 'react-navigation-tabs';  
import Icon from 'react-native-vector-icons/FontAwesome5';

// import HomeScreen from "./src/Components/Home";  
// import MatchsScreen from "./src/Components/Matchs";  
// import SearchScreen from "./src/Components/Search";
// import MenuScreen from "./src/Components/Menu"; 
// import ProfileScreen from "./src/Example/Profile"; 
// import ShortlistScreen from "./src/Example/Shortlist";
// import DeleteScreen from "./src/Example/Delete"; 
// import MessageScreen from "./src/Example/Message"; 

import HomeScreen from "./src1/Home";
import CoorderScreen from "./src1/Coorder";
import NewpostScreen from "./src1/Newpost";
import ProfileScreen from "./src1/Profile";
import AddButton from "./src1/AddButton"
import Login from './src1/Login'
import Register from './src1/Register'
import Add from './src1/Add'
 import Basic from './src1/Basic' 
 import Community from './src1/Community' 
 import Rks from './src1/Rks'
 import San from './src1/San'  
 import Wwe from './src1/Wwe'
 import Community1 from './src1/Community1'
 import Ultimate from './src1/Ultimate'
 import Ultimate1 from './src1/Ultimate1'
 import Prime from './src1/Prime'



const TabsHome = createStackNavigator({
    HomeScreen: { screen: HomeScreen,
    navigationOptions:{
      title: 'Public Online',
        headerLeft: (
          <Icon
            
            size={25}
            name='bars'
          />
        ),
        headerRight: (
          <Icon
            // style={{marginRight:'2%'}}
            size={25}
            name='bell'
          />
        ),
        headerLeftContainerStyle:{
          marginLeft:'8%'
        },
        headerRightContainerStyle:{
          marginRight:'4%'
        },
    headerStyle: {
      backgroundColor: '#FFFFFF',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
      color:'#623192',
      textAlign:'center',marginLeft:'30%'
    },

    } 
    },
    Community: { screen: Community,
    //   navigationOptions:{
    //   headerTitle: 'Profile',
    // } 
    // Rks : { screen: Rks},
     },
     Community1: { screen: Community1 ,},
     Ultimate : { screen: Ultimate ,}
     
  })
  const Tabscoorder = createStackNavigator({
    CoorderScreen: { screen: CoorderScreen,
    navigationOptions:{
      headerTitle: 'Co Order',
    } 
    },
    // profile: { screen: Profile,
    // //   navigationOptions:{
    // //   headerTitle: 'Profile',
    // // } 
    //  }
  })

const TabsNewpost = createStackNavigator({
    NewpostScreen: { screen: NewpostScreen,
    navigationOptions:{
      headerTitle: 'Add Your Business',
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: 'bold',
        color:'#623192',
        textAlign:'center',marginLeft:'30%'
      },
    } 
    },
    Basic: { screen: Basic},
    Ultimate1: { screen: Ultimate1},
    Prime: { screen: Prime},
    // profile: { screen: Profile,
    // //   navigationOptions:{
    // //   headerTitle: 'Profile',
    // // } 
    //  }
    
  })
  
  const TabsProfile = createStackNavigator({
    ProfileScreen: { screen: ProfileScreen },
    // delete: { screen: Delete },
    // message: { screen: Message },
    // shortList: { screen: Shortlist },
  })
  
  const Tab = createBottomTabNavigator({
    HomeScreen: { screen: TabsHome,
        navigationOptions:{ 
            tabBarLabel:'Home',
             tabBarIcon: ({ tintColor }) => (  
                        
                        <View>  
                            <Icon style={[{color: tintColor}]} size={25} name="home"/>  
                        </View>
                        ),
                
            } 
     },
     Coorder: { screen: Tabscoorder,
        navigationOptions:{ 
            tabBarLabel:'Co Order',
             tabBarIcon: ({ tintColor }) => (  
                        
                        <View>  
                            <Icon style={[{color: tintColor}]} size={25} name="calendar"/>  
                        </View>
                        ),
                
            }
     },
     Add: {
        screen: AddButton, // Empty screen
        navigationOptions:{
        
           tabBarIcon: <AddButton /> // Plus button component
       }
 },
    NewPost: { screen: TabsNewpost,
    navigationOptions:{ 
      tabBarLabel:'New Post',
       tabBarIcon: ({ tintColor }) => (  
                  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name="clone"/>  
                  </View>
                  ),
          
      }
     },
      
    Profile: { screen: TabsProfile,
      navigationOptions:{ 
      tabBarLabel:'Profile',
      tabBarIcon: ({ tintColor }) => (  
          <View>  
          <Icon style={[{color: tintColor}]} size={25} name="user"/>  
         </View>),
      }
    }
  
    
  },
  { 
       tabBarOptions: {
         activeTintColor: '#623192',
         activeBackgroundColor: '#cdcccc',
         inactiveTintColor: '#696969',
         labelStyle: {
                  fontSize: 12,
                  fontWeight: "bold",
                  padding:5,
                  fontStyle: "normal",
                  lineHeight: 13.3,
                  letterSpacing: 0,
                },
        style: {
          //  width: 375,
          height: 70,
          backgroundColor: "#FFFFFF",
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "#707070",
        },
       },
    
  },
  
  );
  
  Tab.navigationOptions = {
    header: null,
  };
  
  Login.navigationOptions = {
    header: null,
  };
  Register.navigationOptions = {
    header: null,
  };
  
  
  const AppNavigator = createStackNavigator({
      
    
    Login: { screen: Login },
    Register: { screen: Register },
    dashboardHome: { screen: Tab },
    Basic: { screen: Basic },
    Community: { screen:Community},
    Rks: { screen:Rks },
    San: { screen:San },
    Wwe: { screen:Wwe },
    Community1: { screen:Community1},
    Ultimate : { screen: Ultimate },
    Ultimate1: { screen: Ultimate1},
    Prime: { screen: Prime}
  });
  
export default createAppContainer(AppNavigator);
