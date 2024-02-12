// to create basic template press rsf and tab  

import { StyleSheet, Text, View , TextInput,ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MenuCard from '../component/MenuCard';
import MapView from 'react-native-maps';
//npx expo install react-native-maps
import ImagedCardView from "react-native-imaged-card-view";
// npm i react-native-imaged-card-view
import ImagedCard from "react-native-imaged-card";

export default function Explore({navigation}) {
  return (
    <View style={styles.mainContainer}>
        <View >
            <View style={styles.SearchContainer}>
                <TextInput
                style={styles.input}
                // onChangeText={onChangeText}
                placeholder="Search here......"
                keyboardType="default"
                />
            </View>
            <View style={styles.slider}>
            <ScrollView horizontal={true} >
            <View style={styles.Row}>
            <MenuCard menuTitle={"এক নজরে  "} iconName={"bullseye-arrow"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('FlipTest')} />
                    </View>

                    <View style={styles.Row}>
            <MenuCard menuTitle={"এক নজরে  "} iconName={"bullseye-arrow"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('WelcomeScreen')} />
                    </View>
                    <View style={styles.Row}>
            <MenuCard menuTitle={"এক নজরে  "} iconName={"bullseye-arrow"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('Rangpur')} />
                    </View>
                    <View style={styles.Row}>
            <MenuCard menuTitle={"এক নজরে  "} iconName={"bullseye-arrow"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('Rangpur')} />
                    </View>
                    <View style={styles.Row}>
            <MenuCard menuTitle={"এক নজরে  "} iconName={"bullseye-arrow"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('Rangpur')} />
                    </View>
                    <View style={styles.Row}>
            <MenuCard menuTitle={"এক নজরে  "} iconName={"bullseye-arrow"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('Rangpur')} />
                    </View>
                   </ScrollView>
            </View>
           
            <View style={styles.map}>
            
            <MapView style={styles.map}  initialRegion={{
                    latitude: 25.7466437,
                    longitude: 89.2467958,     
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,              
  }}/>
            </View>
           
            <View style={styles.card}>
                <ScrollView >
            <ImagedCard stars={5} title="Nuts "/>
            <ImagedCard stars={5} title="Nuts "/>
            <ImagedCard stars={5} title="Nuts "/>
            </ScrollView>
            </View>
           
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'stretch'
      
    },
    SearchContainer:{
        flex: 1,
        backgroundColor: "aliceblue",
        
    },  
    slider:{
        flex:2,
        alignContent: "flex-start",
        flexDirection:"row",
        alignSelf:'stretch'
       
       
      
    },
    map:{
        flex:5,
        backgroundColor: 'red',
       
      
    },
    card:{
        flex:4,
        backgroundColor: 'aliceblue',
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'column'
       
      
    },
    
})
