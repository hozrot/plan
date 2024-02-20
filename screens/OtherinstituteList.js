import React from 'react';
import { View ,Text,StyleSheet,FlatList} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// npm install @react-navigation/bottom-tabs
import HomePage from './HomePage';
import Helpline from './Helpline';
import schoolList from './schoolList';

import{MaterialCommunityIcons} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import AppHome from './AppHome';
import Qdirection from './Qdirection';
import Calender from './Calender';
import PrayerTime from './PrayerTime';


const Tab = createBottomTabNavigator();
function OtherinstituteList(props) {
    return (

        <Tab.Navigator>
           
            <Tab.Screen name="Home" component={AppHome}  
             options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="mosque" color={'blue'} size={35} />
                ),
                }}/>
            <Tab.Screen name="Prayer Time" component={PrayerTime}
             options={{
                tabBarLabel: 'Prayer Time',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="av-timer" color={'blue'} size={35} />
                ),
                }} />
            <Tab.Screen
                name="Calender"
                component={Calender}
                options={{
                tabBarLabel: 'Calender',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="clipboard-list" color={'blue'} size={35} />
                ),
                }}
            />
        </Tab.Navigator>
    //     <View>
    //     <Text>অন্যান্য প্রতিষ্ঠানসমূহ  </Text>
    //       <FlatList/>
    // </View>
    );
}

export default OtherinstituteList;