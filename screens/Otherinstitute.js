import React from 'react';
import { View ,Text,StyleSheet,Image} from 'react-native';
import MenuCard from '../component/MenuCard';


function Otherinstitute({navigation}) {
    return (
        <View style={styles.container}>

        <View style={styles.Row}>

        <MenuCard menuTitle={"কৃষি"} iconName={"island"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('OtherinstituteList')} />

        <MenuCard menuTitle={"মৎস"} iconName={"fish"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('OtherinstituteList')} />
        </View>

        <View style={styles.Row}>

        <MenuCard menuTitle={"ভুমি"} iconName={"crop-landscape"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('OtherinstituteList')} />

        <MenuCard menuTitle={"তথ্য"} iconName={"folder-edit"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('OtherinstituteList')} />
        </View>
        <View style={styles.Row}>

        <MenuCard menuTitle={"বিদ্যুৎ"} iconName={"electron-framework"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('OtherinstituteList')} />

        <MenuCard menuTitle={"অন্যান্য "} iconName={"vanish"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('OtherinstituteList')} />
        </View>

        </View>
                
    );
}
const styles = StyleSheet.create({
    container:{
        flex:.60,
         width:'100%',
         height: 200,
         
         justifyContent:'center',
         alignContent:'center',
         
         
     
     },
     Row:{
         flex: 1,
        // backgroundColor: "#fc5c65",
         flexDirection:"row"
     },
    
})

export default Otherinstitute;