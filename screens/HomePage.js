import React from 'react';
import { Text ,View, StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import{MaterialCommunityIcons} from '@expo/vector-icons';
// need to import MenuCard Template like bellow 
import MenuCard from '../component/MenuCard';
import GestureFlipView from 'react-native-gesture-flip-card';
// npm install --save react-native-gesture-flip-card

// const renderFront = () => {
//     return (
//         <View style={styles.Header}>
//             <View style={styles.HeaderContainer}>  
//             <MaterialCommunityIcons name="home-city" size={30}  color={"green"}/> 
//             <Text> রংপুর  </Text>
//             </View>
//         </View>
//     );
//   };

// const renderBack = () => {
//   return (
//     <View style={styles.Header}>
//             <View style={styles.HeaderContainer}>  
//             <MaterialCommunityIcons name="home-city" size={50}  color={"green"}/> 
//             <Text style={{left: 10}}> OK test  </Text>
//             </View>
//         </View>  
//   );
// };

function HomePage({navigation}) {
    return (
       <SafeAreaView style={styles.mainContainer}>
         <View style={styles.Header}>
             <View style={styles.HeaderContainer}>  
             <MaterialCommunityIcons name="home-city" size={50}  color={"green"}/> 
             <Text style={{left: 10}}> রংপুর  </Text>
             </View>
         </View>
         {/* <View style={styles.Header}>
             <View style={styles.HeaderContainer}> 
                <GestureFlipView width={1200} height={500}>
                    {renderFront()}
                    {renderBack()}
                </GestureFlipView>
             </View>
        </View> */}
         <View style={styles.Row}>

            <MenuCard menuTitle={"এক নজরে রংপুর "} iconName={"bullseye-arrow"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('Rangpur')} />

            <MenuCard menuTitle={"শিক্ষা প্রতিষ্ঠান"} iconName={"school"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('Education')} />
        </View>

        <View style={styles.Row}>
            <MenuCard menuTitle={"প্রশাসন"} iconName={"podium"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('Administration')} />

            <MenuCard menuTitle={"সেবা"} iconName={"power-sleep"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('Helpline')} />
          
        </View>
         <View style={styles.Row}>
            <MenuCard menuTitle={"অন্যান্য প্রতিষ্ঠান"} iconName={"arrow-all"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('Otherinstitute')} />

            <MenuCard menuTitle={"বিশিষ্ট ব্যাক্তিবর্গ"} iconName={"panda"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('Vip')} />
         </View>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
    
    mainContainer:{
        backgroundColor: "#FF6C01",
        flex: 1,
        // alignContent: "center"
    },
    Header:{
        flex: .50,
        //backgroundColor: "#4ecdc4",
        flexDirection: "column",
    },
    HeaderContainer:{
        flex:1,
        backgroundColor: "aliceblue",
        justifyContent: "center",
        alignItems:'center',
        borderRadius: 35 ,
        margin: 5,
        flexDirection: "row",
    },  
    Row:{
        flex: 1,
       // backgroundColor: "#fc5c65",
        flexDirection:"row"
    },  
})

export default HomePage;