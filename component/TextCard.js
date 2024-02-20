import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function TextCard({ iconName, iconSize, iconColor, cardTitle, refText, textDetails, onPressShare, onPressDetails }) {
    return (
        <View style={styles.card1}>
            <View style={styles.cardhead}>
                <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
                {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}> */}
                    <View style={{ flex:1}}>
                        <Text style={{ fontWeight: "bold" }}> {cardTitle}  </Text>
                      {refText && <Text style={{ margin:5 }}>{refText} </Text>} 
                    </View>
                    <TouchableOpacity onPress={onPressDetails}>
                    <MaterialCommunityIcons name={"heart"} size={30} color={iconColor} />
                    </TouchableOpacity>
                {/* </View> */}
            </View>
            <View style={styles.cardbody}>
                <Text> {textDetails}</Text>
            </View>
            <View style={styles.cardfooter}>
                <TouchableOpacity onPress={onPressShare}>
                    <MaterialCommunityIcons name={'share'} size={iconSize} color={iconColor} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressDetails}>
                    <MaterialCommunityIcons name={'page-next'} size={iconSize} color={iconColor} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card1: {
        flex: 1,
        backgroundColor: "#A6C5EB",
        padding: 5
    },
    cardhead: {
        flex: 1,
        flexDirection: "row",
    alignItems:'center'

    },
    cardbody: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',

    },
    cardfooter: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"

    },
})