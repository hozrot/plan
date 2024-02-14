import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AppHome() {
  return (
    <View style={styles.mainnContainer}>
      <View style={styles.timeBlock}>
        <View>
      <Text style={styles.timeText}>Fazar : 05 : 17 </Text>
      <Text style={styles.timeText}>Juhar : 12 : 17 </Text>
      <Text style={styles.timeText}>Asar : 05 : 00 </Text>
      <Text style={styles.timeText}>Magrib : 06 : 37 </Text>
      <Text style={styles.timeText}>Isha  : 08 : 30 </Text>
        </View>
        <View>
            <Image 
                style={styles.pic}
                source={require("../assets/model-mosques.jpg")}/>
        </View>
     
      </View>
      <View style={styles.currentTime}>
        <View style={{ flex: 2, justifyContent:'center'}}>
            <Text>Today is Wednesday,</Text>
            <Text> 14 February,2024  </Text>
            <Text> 02 Falgun,1431   </Text>
            <Text> 06 Shaban,1446  </Text>
        </View>
        <View style={{ flex: 1 ,justifyContent:'center'}}>
            <Text> Asar  </Text>
            <Text>5.10 PM</Text>
            <Text>15 Min left</Text>
        </View>
        <View style={{ flex: 1, justifyContent:'center'}}>
            <Text>Sunny </Text>
            <Text>32` Cel. </Text>
        </View>
      
      </View>
      <View style={styles.quationBlock}>
      <View style={{ flex: .5, paddingTop: 5 }}>
      <Text> Quatation</Text></View>
      <View style={{ flex: 1,padding:10 }}>
      <Text> It was narrated from Jubair bin Nufair (RA) that a man asked Aishah (RA) about fasting and she said:
"The Messenger of Allah (SAW) used to fast all of Shaban, and he made sure to fast on Mondays and Thursdays."  </Text></View>
      <View style={{ flex: .5 }}>
      <Text> Sunan an-Nasa'i 2186, Book 22, Hadith 97</Text></View>
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    mainnContainer:{
        flex: 1,
        backgroundColor: "#FF6C01",
        flexDirection:"column",
        //make object into center this two line
        alignItems:'center',
        justifyContent:'center'        
    },
    timeBlock:{
        flex: 5,
        flexDirection:"row",
        backgroundColor:  'oldlace',
        justifyContent:'center',
        
        
    },
    currentTime:{
        flex: 3,
        flexDirection:'row',
        backgroundColor:  'oldlace',
        justifyContent:'center',
        
        
    },
    quationBlock:{
        flex: 5,
        alignItems:'flex-start',
        backgroundColor:  'oldlace',

        
    },
    pic:{
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    timeText:{
        fontSize:20,
        padding:5,
        fontWeight:'bold',
       
    }
})