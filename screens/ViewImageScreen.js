import React from 'react';
import { Image, View ,StyleSheet,Text} from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
 function ViewImageScreen(props) {
    return (
        <View style={styles.Container}>
            {/* <View style={styles.CloseImage}>
                <MaterialCommunityIcons name='close' color="#fff" size={40}></MaterialCommunityIcons>
            </View>
            <View style={styles.BackImage}>
            <MaterialCommunityIcons name='trash-can-outline' color="#fff" size={40}></MaterialCommunityIcons>
            </View> */}
            
            <Image 
                    resizeMode='contain'
                    style={styles.Image}
                    source={require("../assets/product1.jpeg")}
            />
            <View>
                <Text style={styles.ImageText}> 
                 "Cool Bike to sell" </Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor: "#000",
        flex: 1,
    

    },
    ImageText:{
                fontWeight: "600",
                color: colors.secondary,
                fontStyle: "italic",
                position: "relative",
                bottom: 150,
                left: 100,
                fontSize: 20
    },

    CloseImage:{
        
        position: "absolute",
        top: 50,
        left: 30,
        borderRadius: 15
    },
    BackImage:{
        
        position: "absolute",
        top: 50,
        right: 30,
        borderRadius: 15
    },
    Image:{
        width: "100%",
        height: "100%",

    },
})

export default ViewImageScreen;