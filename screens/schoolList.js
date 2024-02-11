import React from 'react';
import { View,Text,FlatList, StyleSheet,Linking,Platform,Alert} from 'react-native';
import PersonList from '../component/PersonList';
import * as OpenAnything from 'react-native-openanything';
// need to install :  npm install react-native-openanything 

const schools=[
    {
        schoolname: "জহুরুল হাট হাজী এলাহী উচ্চ বিদ্যালয় ",
        eiinno: 121615,
        headmastername: "মোঃ জহুরুল ইসলাম ",
        mobileno: '01718607405',
        photo: require('../assets/RangpurDistrict.jpg'),
        location: "সুন্দরগঞ্জ , গাইবান্ধা "


       },
       {
        schoolname: "হরিপুর বি.এস.এম বালিকা উচ্চ বিদ্যালয় ",
        eiinno: 121616,
        headmastername: "মোঃ জহির মিয়া ",
        mobileno: '01719617980',
        photo: require('../assets/RangpurDistrict.jpg'),
        location: "null"
       },
       {
        schoolname: "বেলকা এম সি উচ্চ বিদ্যালয় ",
        eiinno: 121617,
        headmastername: "মোঃ আহসান হাবিব ",
        mobileno: "01712149516",
        photo: require('../assets/RangpurDistrict.jpg'),
        location: "null"
       },
       {
        schoolname: "কাটগড়া বি এল উচ্চ বিদ্যালয় ",
        eiinno: 121618,
        headmastername: "মোঃ আব্দুল হামিদ (ভারঃ) ",
        mobileno: "01721669915",
        photo:require('../assets/RangpurDistrict.jpg'),
        location: "null"
       },
       {
        schoolname: "সুন্দরগঞ্জ আঃ মজিদ সরকারি বালক উ\/বিঃ ",
        eiinno: 121619,
        headmastername: "মোঃ শফিকুল ইসলাম (ভারঃ) ",
        mobileno: "null",
        photo: require('../assets/RangpurDistrict.jpg'),
        location: "null"
       },
      
       {
        schoolname: "বেলকা মনিকা বাইকা উচ্চ বিদ্যালয় ",
        eiinno: "null",
        headmastername: "মোঃ নুরুল ইসলাম সরকার ",
        mobileno: "01713748979",
        photo: require('../assets/RangpurDistrict.jpg'),
        location: "null"
       },
       
       {
        schoolname: "বাজার পাড়া উচ্চ বিদ্যালয় ",
        eiinno: "null",
        headmastername: "শেখ মোঃ আলতাফ হোসেন ",
        mobileno: "01714605745",
        photo: require('../assets/RangpurDistrict.jpg'),
        location: "null"
       },
       
       {
        schoolname: "নাজিমাবাদ বি এল উচ্চ বিদ্যালয় ",
        eiinno: "null",
        headmastername: "মো রফিকুল ইসলাম (ভারঃ) ",
        mobileno: "01776389278",
        photo: require('../assets/RangpurDistrict.jpg'),
        location: "null"
       }
      

]

function schoolList({navigation}) {
    return (
        <FlatList 
          data={schools}
          keyExtractor={schools=>schools.eiinno.toString()}
          renderItem={({item})=>
          <PersonList
                name={item.schoolname}
                designation={item.headmastername}
                office={item.mobileno}
                image={item.photo}
                onPress={() => OpenAnything.Call(item.mobileno)}
                />}
        
        />
    );
}

export default schoolList;