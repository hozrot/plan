import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextCard from '../component/TextCard'

export default function AppHome({ navigation }) {
  return (
    <View style={styles.mainnContainer}>
      <ScrollView>
        {/* <View style={styles.timeBlock}>
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
            source={require("../assets/model-mosques.jpg")} />
        </View>

      </View>
      <View style={styles.currentTime}>
        <View style={{ flex: 2, justifyContent: 'center' }}>
          <Text>Today is Wednesday,</Text>
          <Text> 14 February,2024  </Text>
          <Text> 02 Falgun,1431   </Text>
          <Text> 06 Shaban,1446  </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text> Asar  </Text>
          <Text>5.10 PM</Text>
          <Text>15 Min left</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Sunny </Text>
          <Text>32` Cel. </Text>
        </View>

      </View> */}
        <View style={{ padding:20, }}>
          <TextCard iconName={"shield-moon"} iconColor={"blue"} refText={"jgjg:87,mtf:55"} iconSize={30}
            textDetails={"testtesttesttestvvtesttesttesttesttesttesttes ttesttesttesttesttesttesttesttesttesttesttesttesttesttest"} 
            cardTitle={"Dua"}
            onPressShare={() => navigation.navigate('Helpline')}
            onPressDetails={() => navigation.navigate('Rangpur')} />
        </View>

        <View style={{ padding:20, }}>
          <TextCard iconName={"shimmer"} iconColor={"blue"} refText={"jgjg:87,mtf:55"} iconSize={30}
            textDetails={"testtesttesttestvvtesttesttesttesttesttesttes ttesttesttesttesttesttesttesttesttesttesttesttesttesttest"}
             cardTitle={"Ayat"}
            onPressShare={() => navigation.navigate('Helpline')}
            onPressDetails={() => navigation.navigate('Rangpur')} />
        </View>

        <View style={{ padding:20, }}>
          <TextCard iconName={"shuriken"} iconColor={"blue"} iconSize={30}
            textDetails={"testtesttesttestvvtesttesttesttesttesttesttes ttesttesttesttesttesttesttesttesttesttesttesttesttesttest"}
             cardTitle={"Beautiful Name"}
            onPressShare={() => navigation.navigate('Helpline')}
            onPressDetails={() => navigation.navigate('Rangpur')} />
        </View>
        <View style={{ padding:20, }}>
          <TextCard iconName={"shape-circle-plus"} iconColor={"blue"} iconSize={30}
            textDetails={"testtesttesttestvvtesttesttesttesttesttesttes ttesttesttesttesttesttesttesttesttesttesttesttesttesttest"}
             cardTitle={"Tasbeeh"}
            onPressShare={() => navigation.navigate('Helpline')}
            onPressDetails={() => navigation.navigate('Rangpur')} />
        </View>
        <View style={{ padding:20, }}>
          <TextCard iconName={"text"} iconColor={"blue"} refText={"jgjg:87,mtf:55"} iconSize={30}
            textDetails={"testtesttesttestvvtesttesttesttesttesttesttes ttesttesttesttesttesttesttesttesttesttesttesttesttesttest"}
             cardTitle={"Daily Quote"}
            onPressShare={() => navigation.navigate('Helpline')}
            onPressDetails={() => navigation.navigate('Rangpur')} />
        </View>



      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainnContainer: {
    flex: 1,
    flexDirection: "column",
    //make object into center this two line
    alignItems: 'stretch',
    justifyContent: 'center'

  },


})