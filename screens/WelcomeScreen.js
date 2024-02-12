import React from 'react';
import { ImageBackground, StyleSheet,View,Text} from 'react-native';
import { Image ,Button} from 'react-native';
import { color, textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//import { View } from 'react-native-web';
//import React, {useState,Component} from 'react';
function WelcomeScreen({ navigation }) {
    return (
       <ImageBackground 
            style={styles.background}
            source={require("../assets/rangpur.jpg")}>
              <View style={styles.LogoContainer}>
                <Image 
                style={styles.Logo}
                source={require("../assets/icon.png")}/>
                <Text style={styles.TextContainer}> Our Choise Your Desire </Text>
                <Button
                        title="Go to Details... again"
                        onPress={() => navigation.navigate('Home')}
                    />

              </View>
              
        <View style={styles.StartButton}>
            <Text style={styles.ButtonText}> Start your Shopping now..</Text>
        </View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:"center"
        
    },
    LogoContainer:{
        position: 'absolute',
        top: 300,
        alignItems: "center"
        
    },
    TextContainer:{
        fontSize: 30,
        color: "#000"
        
    },
    Logo:{
        width: 200,
        height: 100,
        
    },
    StartButton:{
        width:"65%",
        height: 30,
        backgroundColor: "#4ecdc4",
        bottom: 200
        
    },
    ButtonText:{
        textAlign: 'center',
        fontSize: 20
    },
})
export default WelcomeScreen;