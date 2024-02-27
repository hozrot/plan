import { StyleSheet, Text, View, Image, ScrollView, Share,Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextCard from '../component/TextCard'
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function AppHome({ navigation }) {
  return (
    <View style={styles.mainnContainer}>
      <View style={styles.HeadBlock}>
        <View style={styles.Iftar}>
          <MaterialCommunityIcons name={"sun-wireless"} size={30} color={"orange"} />
          <Text>Iftar  </Text>
          <Text>5:30 PM   </Text>
        </View>
        <ScrollView style={styles.Current}>
          <View style={styles.Iftar}>
            <MaterialCommunityIcons name={"weather-sunset-up"} size={30} color={"gray"} />
            <Text>Fazr   </Text>
            <Text>5:30 AM   </Text>
          </View>
          <View style={styles.Iftar}>
            <MaterialCommunityIcons name={"white-balance-sunny"} size={30} color={"gray"} />
            <Text>Duhr   </Text>
            <Text>1:30 PM   </Text>
          </View>
          <View style={styles.Iftar}>
            <MaterialCommunityIcons name={"weather-sunset"} size={30} color={"gray"} />
            <Text>Asar  </Text>
            <Text>4:30 PM   </Text>
          </View>
          <View style={styles.Iftar}>
            <MaterialCommunityIcons name={"weather-sunset-down"} size={30} color={"gray"} />
            <Text>Magrib  </Text>
            <Text>6:30 PM   </Text>
          </View>
          <View style={styles.Iftar}>
            <MaterialCommunityIcons name={"weather-night"} size={30} color={"gray"} />
            <Text>Esha  </Text>
            <Text>8:30 PM   </Text>
          </View>

        </ScrollView>
        <View style={styles.Suhoor}>
          <MaterialCommunityIcons name={"weather-night-partly-cloudy"} size={30} color={"black"} />
          <Text>Suhoor  </Text>
          <Text>4:30 AM </Text>
        </View>
      </View>
      <ScrollView style={styles.contectView}>
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
        <View style={{ padding: 10}}>
          <TextCard iconName={"shield-moon"} iconColor={"blue"} refText={"aaa:87,zzz:55"} iconSize={30}
            textDetails={"Alhamdulillah"}
            cardTitle={"Dua"} 
          />
        </View>

        <View style={{ padding: 10, }}>
          <TextCard iconName={"shimmer"} iconColor={"blue"} refText={"bbbb:87,cccc:55"} iconSize={30}
            textDetails={"testtesttesttestvvtesttesttesttesttesttesttes ttesttesttesttesttesttesttesttesttesttesttesttesttesttest"}
            cardTitle={"Ayat"}/>
            {/* // onPressShare={() => navigation.navigate('Helpline')}
            // onPressDetails={() => navigation.navigate('Rangpur')}  */}
        </View>

        <View style={{ padding: 10, }}>
          <TextCard iconName={"shuriken"} iconColor={"blue"} iconSize={30}
            textDetails={"testtesttesttestvvtesttesttesttesttesttesttes ttesttesttesttesttesttesttesttesttesttesttesttesttesttest"}
            cardTitle={"Beautiful Name"}
          />
        </View>
        <View style={{ padding: 10, }}>
          <TextCard iconName={"shape-circle-plus"} iconColor={"blue"} iconSize={30}
            textDetails={"testtesttesttestvvtesttesttesttesttesttesttes ttesttesttesttesttesttesttesttesttesttesttesttesttesttest"}
            cardTitle={"Tasbeeh"}
             />
        </View>
        <View style={{ padding: 10, }}>
          <TextCard iconName={"text"} iconColor={"blue"} refText={"jgjg:87,mtf:55"} iconSize={30}
            textDetails={"testtesttesttestvvtesttesttesttesttesttesttes ttesttesttesttesttesttesttesttesttesttesttesttesttesttest"}
            cardTitle={"Daily Quote"}
            />
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
  HeadBlock: {
    flex: .15,
    flexDirection: "row",
    alignItems: 'space-around',
    padding: 5

  },
  contectView:{
    flex: 1,
  },
  Iftar: {
    flex: 1,
    alignItems: 'center'
  },
  Suhoor: {
    flex: 1,
    alignItems: 'center'
  },


})