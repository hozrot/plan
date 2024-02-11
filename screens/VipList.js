import React from 'react';
import { View,Text,FlatList, StyleSheet} from 'react-native';
import PersonList from '../component/PersonList';

const members =[
    {
        id: 1,
        name: 'Ali',
        designation:'AME',
        office:'SKIT',
        image:require('../assets/RangpurDistrict.jpg'),
    },
    {
        id: 2,
        name: 'Javed',
        designation:'AP',
        office:'BHTPA',
        image:require('../assets/RangpurDistrict.jpg')
    },
    {
        id: 3,
        name: 'Mizan',
        designation:'AP',
        office:'SKIT',
        image:require('../assets/RangpurDistrict.jpg')
    },
    {
        id: 4,
        name: 'Kamrul',
        designation:'AP',
        office:'BHTPA',
        image:require('../assets/RangpurDistrict.jpg')
    }
]
function VipList({navigation}) {
    return (
        <FlatList 
          data={members}
          keyExtractor={members=>members.id.toString()}
          renderItem={({item})=>
          <PersonList
                name={item.name}
                designation={item.designation}
                office={item.office}
                image={item.image}
                onPress={()=> navigation.navigate("VipDetails",item)}/>}
        
        />
    );
}

const styles = StyleSheet.create({
    
})

export default VipList;