import React from 'react';
import { View ,Text,StyleSheet,Image,ScrollView }from 'react-native';
import MenuCard from '../component/MenuCard';
import{MaterialCommunityIcons} from '@expo/vector-icons';

function EduInstitute({navigation}) {
    return (
        <View style={styles.container}>
                    
        <ScrollView>
            <View style={styles.Row}>

            <MenuCard menuTitle={"স্কুল  ১৭৬৯ টি "} iconName={"baby"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('school')} />

            <MenuCard menuTitle={"কলেজ ৭৪ টি "} iconName={"school-outline"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('EduList')} />
            </View>

            <View style={styles.Row}>

            <MenuCard menuTitle={"মেডিকেল কলেজ ১ টি "} iconName={"medical-bag"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('EduList')} />

            <MenuCard menuTitle={"মাদ্রাসা ৩৭০টি "} iconName={"abjad-arabic"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('EduList')} />
            </View>
            <View style={styles.Row}>

            <MenuCard menuTitle={"কারিগরি প্রতিষ্ঠান ২ টি "} iconName={"unity"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('EduList')} />

            <MenuCard menuTitle={"বিশ্ববিদ্যালয় ১ টি  "} iconName={"school"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('EduList')} />
            </View>
            <View style={styles.Row}>
                <MenuCard menuTitle={"বিশেষায়িত কলেজ ৭ টি "} iconName={"pen"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('EduList')} />
                <MenuCard menuTitle={"অন্যান্য "} iconName={"vanish"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('EduList')} />
                    </View>                  
        </ScrollView>
            </View>
            
        
    );
}

const styles = StyleSheet.create({
    
container:{
   flex:1,
    width:'100%',
    height: 200,
    
    justifyContent:'center',
    alignContent:'center',
},
elementRow:{
        flex: 1,
       //backgroundColor: "#FF6C01",
        flexDirection:"row",
        alignContent: "center"
    },
Row:{
    flex: 1,
   // backgroundColor: "#fc5c65",
    flexDirection:"row"
},
rowContent:{
        flex:1,
        backgroundColor: "oldlace",
        borderRadius: 35,
        justifyContent:"center",
        alignItems:'center',
        margin: 3
    },

 })

export default EduInstitute;