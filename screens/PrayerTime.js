import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function PrayerTime() {
    return (
        <View style={styles.mainnContainer}>

            <View style={styles.headBlock}>
                <Text  style={{fontWeight:'bold',fontSize:20 }}>Monday </Text>
                <Text>20 February 2024</Text>
                <Text>09 Shaban 1445</Text>
            </View>
            <View style={styles.timeBlock}>
                <View style={styles.timeElement}>
                    <Text style={styles.timeText}>Fazar  </Text>
                    
                    <Text style={styles.timeText}>5.30 Am  </Text>
                </View>
                <View style={styles.timeElement}>
                    <Text style={styles.timeText}>Sunrise  </Text>
                    <Text style={styles.timeText}>5.30 Am  </Text>
                </View>
                <View style={styles.timeElement}>
                    <Text style={styles.timeText}>Dhur  </Text>
                    <Text style={styles.timeText}>5.30 Am  </Text>
                </View>
                <View style={styles.timeElement}>
                    <Text style={styles.timeText}>Asar  </Text>
                    <Text style={styles.timeText}>5.30 Am  </Text>
                </View>
                <View style={styles.timeElement}>
                    <Text style={styles.timeText}>Magrib  </Text>
                    <Text style={styles.timeText}>5.30 Am  </Text>
                </View>
                <View style={styles.timeElement}>
                    <Text style={styles.timeText}>Esha  </Text>
                    <Text style={styles.timeText}>5.30 Am  </Text>
                </View>
            </View>
            <View style={styles.otherBlock}>
            <View style={styles.Iftar}>
            <MaterialCommunityIcons name={"shield-sun-outline"} size={30} color={"gray"} />
                <Text>Iftar  </Text>
                <Text>5:30 PM   </Text>
            </View>
            <View style={styles.Suhoor}>
            <MaterialCommunityIcons name={"shield-sun"} size={30} color={"gray"} />
                <Text>Suhoor  </Text>
                <Text>6.12 PAmM   </Text>
            </View>
            </View>
            <View style={styles.specialBlock}>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:20,}}> Special Events</Text>
                </View>
                <ScrollView>
                    <View style={{padding:20, alignItems:'center',justifyContent:'center'}} >
                <Text>Eid-Ul-fiter   </Text>
                <Text>12 April 2024 </Text>
                </View>
                 <View style={{padding:20, alignItems:'center',justifyContent:'center'}} >
                <Text>Eid-Ul-fiter   </Text>
                <Text>12 April 2024 </Text>
                </View>
                <View style={{padding:20, alignItems:'center',justifyContent:'center'}} >
                <Text>Eid-Ul-fiter   </Text>
                <Text>12 April 2024 </Text>
                </View>
                <View style={{padding:20, alignItems:'center',justifyContent:'center'}} >
                <Text>Eid-Ul-fiter   </Text>
                <Text>12 April 2024 </Text>
                </View>
                </ScrollView>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    mainnContainer: {
        flex: 1,
        flexDirection: "column",
    },
    headBlock: {
        flex: .30,
        flexDirection: "column",
        justifyContent:'space-between',
        alignItems:'center',
        padding:5
    },
    timeBlock: {
        flex: 1,
        
        flexDirection: "column",

    },
    timeElement:{
        flexDirection: "row",
        justifyContent:'space-between',
        padding:5
    },
    timeText:{
        fontWeight:'bold',
        fontSize:25,
    },
    otherBlock: {
        flex:.35,
        flexDirection: "row",
        padding:20

    },
    Iftar:{
        flex: 1,
        alignItems:'center'
    },
    Suhoor:{
        flex: 1,
        alignItems:'center'
    },
    specialBlock:{
        flex: .55,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        
        
       
       
    }
})