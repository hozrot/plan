import React from 'react';
import { View ,Text,StyleSheet,Image} from 'react-native';
import MenuCard from '../component/MenuCard';

function Administration({navigation}) {
    return (
        <View style={styles.container}>
             <View style={styles.Row}>
                <MenuCard menuTitle={"সিটি কর্পোরেশন ১ টি "} iconName={"webpack"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('AdministrationList')} />


</View>


        <View style={styles.Row}>

        <MenuCard menuTitle={"ইউনিয়ন পরিষদ ৮৩ টি "} iconName={"webpack"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('AdministrationList')} />

       
        </View>

        <View style={styles.Row}>

        <MenuCard menuTitle={"উপজেলা প্রশাসন ৮ টি "} iconName={"webhook"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('AdministrationList')} />

       
        </View>
        <View style={styles.Row}>

        <MenuCard menuTitle={"পৌরসভা ৩ টি "} iconName={"vote"} iconSize={80}
                iconColor={"green"} onPress={() => navigation.navigate('AdministrationList')} />

        
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

export default Administration;