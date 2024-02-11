import React ,{useState, useEffect} from 'react';
import { FlatList ,StyleSheet} from 'react-native';
import PersonList from '../component/PersonList';


import {showSchool} from '../controller/schoolController';




function EduList({navigation}) {


    const [schoolList, setSchoolList] =useState({})

    useEffect(()=>{
        getData()
    })

    function getData(){
        showSchool(schoolRetrived)
    }
    function schoolRetrived(schoolList){
        setSchoolList(schoolList)

    }

    return (
        <FlatList 
        data={schoolList}
        keyExtractor={item=>item.id}
        renderItem={({item})=>
        <PersonList
              name={item.schoolname}
              onPress={()=> navigation.navigate("instituteDetails",item)}
             />}
      
      />
    );
}

const styles = StyleSheet.create({
    
})
export default EduList;