import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage';
import PractiseTest from './screens/PractiseTest';
import EduInstitute from './screens/EduInstitute';
import VipPerson from './screens/VipPerson';
import VipDetails from './screens/VipDetails';
import VipList from './screens/VipList';
//import EduList from './screens/EduList';
import Administration from './screens/Administration';
import AdministrationList from './screens/AdministrationList';
import Helpline from './screens/Helpline'
import HelplineList from './screens/HelplineList'
import Otherinstitute from './screens/Otherinstitute'
import OtherinstituteList from './screens/OtherinstituteList'
import instituteDetails from './screens/instituteDetails'
import schoolList from './screens/schoolList'
import FlipTest from './screens/FlipTest'
import PrayerTime from './screens/PrayerTime'

// navigation will be active by installing: 
//npm install react-navigation
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from './screens/explore';
import WelcomeScreen from './screens/WelcomeScreen';
import AppHome from './screens/AppHome';

import Calender from './screens/Calender';
import Qdirection from './screens/Qdirection';
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
     <Stack.Navigator>

            <Stack.Screen name="Welcome" component={HomePage} />

            <Stack.Screen name="Rangpur" component={PractiseTest}/>

            <Stack.Screen name="Education" component={EduInstitute}/>
            <Stack.Screen name="school" component={schoolList}/>

            <Stack.Screen name="Administration" component={Administration}/>
            <Stack.Screen name="AdministrationList" component={AdministrationList}/>
          
            <Stack.Screen name="Vip" component={VipPerson}/>
            <Stack.Screen name="VipList" component={VipList}/>
            <Stack.Screen name="VipDetails" component={VipDetails}/>
          
            {/* <Stack.Screen name="Menu" component={MenuCard}/> */}
          
            <Stack.Screen name="Helpline" component={Helpline}/>
            <Stack.Screen name="HelplineList" component={HelplineList}/>

            <Stack.Screen name="Otherinstitute" component={Otherinstitute}/>
            <Stack.Screen name="OtherinstituteList" component={OtherinstituteList}/>
            <Stack.Screen name="instituteDetails" component={instituteDetails}/>
            <Stack.Screen name="Explore" component={Explore}/>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
            <Stack.Screen name="FlipTest" component={FlipTest}/>
            <Stack.Screen name="AppHome" component={AppHome}/>
            <Stack.Screen name="Qdirection" component={Qdirection}/>
            <Stack.Screen name="Calender" component={Calender}/>
            <Stack.Screen name="PrayerTime" component={PrayerTime}/>

            {/* <Stack.Screen name="Explore" component={Explore}/>         */}
       
     </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: "#FF6C01",
    flex: 1,
    // alignContent: "center"
},
  Header:{
    flex: .45,
    //backgroundColor: "#4ecdc4",
    flexDirection: "column",
},
HeaderContainer:{
    flex:1,
    backgroundColor: "aliceblue",
    justifyContent: "center",
    alignItems:'center',
    borderRadius: 35,
    margin: 5,
    flexDirection: "row",    
},
Row:{
  flex: 1,
 // backgroundColor: "#fc5c65",
  flexDirection:"row"
},
});
