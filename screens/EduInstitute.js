import React from 'react';
import { View ,Text,StyleSheet,Image} from 'react-native';
import MenuCard from '../component/MenuCard';
import{MaterialCommunityIcons} from '@expo/vector-icons';

function EduInstitute({navigation}) {
    return (
        <View style={styles.container}>

                {/* <View style={styles.Row}>
                <View style={styles.elementRow}>
                <View style={styles.rowContent}> 
                <MaterialCommunityIcons name="school" size={40} color={"green"} />  
                  <Text > স্কুল    </Text>
                  <Text > ১৭৬৯    </Text>
                </View>
                <View style={styles.rowContent}>
                <MaterialCommunityIcons name="bank" size={60} color={"green"} />  
                  <Text> কলেজ    </Text>
                  <Text> ৭৪ টি    </Text>
                </View>
                <View style={styles.rowContent}>
                <MaterialCommunityIcons name="book-education" size={60} color={"green"} />  
                  <Text> বিশ্ববিদ্যালয়    </Text>
                  <Text> ১ টি    </Text>
                </View>

                 </View>
                </View> */}
                

            <View style={styles.Row}>

            <MenuCard menuTitle={"স্কুল  ১৭৬৯ টি "} iconName={"school"} iconSize={80}
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

            <MenuCard menuTitle={"অন্যান্য "} iconName={"vanish"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('EduList')} />
            </View>

            </View>
                    

        //    {/* <View style={styles.rightcontainer}>
        //        <Text style={styles.textHead}>
        //         Bangladesh
        //         </Text>
        //         <Text style={styles.subtitle}>
        //         Gaibandha,Rangpur.
        //         </Text>

        //         <View style={styles.middle}>
        //             <Text style={{color:'#fff',fontWeight:'600',fontSize:18}}> A City of Joy</Text>

        //         </View>
        //         <View style={styles.iconpart}>
        //         <MaterialCommunityIcons name="alarm" size={30}  color={"#fff"}/> 
        //         <MaterialCommunityIcons name="home" size={30}  color={"#fff"}/> 
        //         <MaterialCommunityIcons name="school" size={30}  color={"#fff"}/> 
                
        //         </View>
        //    </View>
        //    <View style={styles.leftcontainer}>
        //    <Image 
        //         style={styles.Logo}
        //         source={require("../assets/logo.jpeg")}/>

        //    </View> */}
        
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

// middle:{
//     //backgroundColor:'#5E8CD4',
//     width:'100%',
//     height:50,
//     top: 25,
//     alignItems:'center',
//     justifyContent:'center',
//     color:'#fff'

// },
// iconpart:{
//     flexDirection:'row',
//     top: 50,
//     justifyContent:'space-evenly',
//     left:22,
    

// },
// rightcontainer:{
//     flex: 1.6,
//     backgroundColor:'#EE615E',
//     borderRadius:50,
//     left:100,
//     top:35,
//     shadowColor: '#171717',
//     shadowOffset: {width: 4, height: 10},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
    

// },
// Logo:{
//     width: "100%" ,
//     height: 200,
    
// },

// leftcontainer:{
//     flex: .85,
//     backgroundColor:'#5ED4B9',
//     borderRadius: 30,
//     right:220,
//     top:20,
//     height:200,
//     overflow:'hidden',
    
// },
// textHead:{
//     textAlign:'center',
//     fontWeight: '600',
//     fontSize:20,
//     color:'#fff',
//     top: 10
// },
// subtitle:{
//     paddingLeft: 70,
//     color:'#fff',
//     top:15
// },
// shadowProp: {
//     shadowColor: '#171717',
//     shadowOffset: {width: -2, height: 4},
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },

 })

export default EduInstitute;