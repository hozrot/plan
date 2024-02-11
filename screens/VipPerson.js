import React from 'react';
import { View ,FlatList,StyleSheet} from 'react-native';
import MenuCard from '../component/MenuCard';





function VipPerson({navigation}) {
    return (

        <View style={styles.container}>

        <View style={styles.Row}>

        <MenuCard menuTitle={"মুক্তিযোদ্ধা"} iconName={"castle"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('VipList')} />

       
        </View>

        <View style={styles.Row}>

        <MenuCard menuTitle={"সাবেক মন্ত্রী "} iconName={"asterisk"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('VipList')} />

       
        </View>

        <View style={styles.Row}>

        <MenuCard menuTitle={" গুরুত্বপুর্ণ ব্যাক্তিবর্গ"} iconName={"assistant"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('VipList')} />

       
        </View>
        <View style={styles.Row}>

        <MenuCard menuTitle={"বিশিষ্ট ব্যাবসায়ী"} iconName={"biohazard"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('VipList')} />

        
        </View>

        </View>
        
       

       
    );
}
const styles = StyleSheet.create({
    container:{
        flex:.80,
         width:'100%',
         
         
         justifyContent:'center',
         alignContent:'center',
         
         
     
     },
     Row:{
         flex: 1,
        // backgroundColor: "#fc5c65",
         flexDirection:"row"
     },
})

export default VipPerson;