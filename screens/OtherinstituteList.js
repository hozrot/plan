import React from 'react';
import { View ,Text,StyleSheet,FlatList} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// npm install @react-navigation/bottom-tabs
import HomePage from './HomePage';
import Helpline from './Helpline';
import schoolList from './schoolList';

import{MaterialCommunityIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
function OtherinstituteList(props) {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage}  
             options={{
                tabBarLabel: 'School',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="school" color={'blue'} size={20} />
                ),
                }}/>
            <Tab.Screen name="Settings" component={Helpline}
             options={{
                tabBarLabel: 'College',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bank" color={'red'} size={20} />
                ),
                }} />
            <Tab.Screen
                name="null"
                component={schoolList}
                options={{
                tabBarLabel: 'University',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="pen" color={'green'} size={20} />
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