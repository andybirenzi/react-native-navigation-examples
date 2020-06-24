import React from 'react';
import {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './components/HomeScreen';
import Products from './components/Products';
import Categories from './components/Categories';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles/Styles'
import Forward from './components/Forward';
import Backward from './components/Backward'


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export default class App extends Component {
  state = {
    spinner: true
  };
  render() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
    
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Products') {
            iconName = focused ? 'cart-plus' : 'shopping-cart';
          }
          else if (route.name === 'Categories') {
            iconName = focused ? 'list' : 'clipboard-list';
          }
          else if (route.name === 'Backward') {
            iconName = focused ? 'mail-reply' : 'step-backward';
          }
          else if (route.name === 'Forward') {
            iconName = focused ? 'mail-forward' : 'step-forward';
          }
          
    
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#d33',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Backward" component={Backward} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Forward" component={Forward} />
      
    </Tab.Navigator>
     
    </NavigationContainer>

   
  );
  }
}
