import React from 'react';
import { View ,Text,StyleSheet,Image} from 'react-native';
import MenuCard from '../component/MenuCard';

function Helpline({navigation}) {
    return (
        <View style={styles.container}>

        <View style={styles.Row}>

        <MenuCard menuTitle={"পুলিশ স্টেশন ৮ টি "} iconName={"security"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('HelplineList')} />

       
        </View>

        <View style={styles.Row}>

        <MenuCard menuTitle={"ফায়ার সার্ভিস ৮ টি "} iconName={"fire"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('HelplineList')} />

       
        </View>
        <View style={styles.Row}>

        <MenuCard menuTitle={"হাসপাতাল ১৪ টি "} iconName={"hospital"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('HelplineList')} />

        
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
export default Helpline;