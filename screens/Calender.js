import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TextCard from '../component/TextCard';
export default function Calender({ navigation }) {
  return (
    <View style={styles.mainnContainer}>
     
        <TextCard iconName={"pac-man"} iconColor={"green"} refText={"jgjg:87,mtf:55"} iconSize={30}
          textDetails={"jkhgjfygfytfgvhgvgjhvjhgv"} cardTitle={"Another"} 
          onPressShare={() => navigation.navigate('Helpline')} 
          onPressDetails={() => navigation.navigate('Rangpur')} />
      </View>
     
  
  )
}

const styles = StyleSheet.create({
  mainnContainer: {
    flex: 1,
    backgroundColor: "#FF6C01",
    flexDirection: "column",
    //make object into center this two line
    // alignItems:'center',
    // justifyContent:'center'        
  },
  card1: {
    flex: 1.5,
    backgroundColor: "#A6C5EB",
    padding: 5
  },
  cardhead: {
    flex: 1,
    flexDirection: "row",
  },
  cardbody: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardfooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"

  },
  card2: {
    flex: 2,
    backgroundColor: "#FFC5C7",
  },
  card3: {
    flex: 3,
    backgroundColor: "#FF6C01",
  }
})