import React from 'react';
import { FlatList,View,Text,StyleSheet } from 'react-native';
import ImageCard from '../component/ImageCard';
import MenuCard from '../component/MenuCard';
import { SafeAreaView } from 'react-native-safe-area-context';


function AdministrationList({navigation}) {
    return (
      <SafeAreaView style={styles.mainContainer}>
          <ImageCard
            image={require('../assets/RangpurDistrict.jpg')}
            cardTitle={'MD Hozrot Ali'}
            name={"Software Engineer"}
            designation={"Rangpur, Bangladesh"}
            office={"test"}

          />
          <MenuCard menuTitle={"Explore Rangpur"} iconName={"google-maps"} iconSize={80}
                    iconColor={"green"} onPress={() => navigation.navigate('Explore')} />   
                           

          {/* <ImageCard
            image={require('../assets/RangpurDistrict.jpg')}
            cardTitle={'ok'}
            name={"uuuuu"}
            designation={"item.headmastername"}
            office={"test"}

          />
            */}
      </SafeAreaView>
       
    );
}
const styles = StyleSheet.create({
    
  mainContainer:{
     
    //  backgroundColor: "#7fff00",
      flex: 1,
      // alignContent: "center"
  },
})

export default AdministrationList;