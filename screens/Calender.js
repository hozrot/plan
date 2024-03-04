import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScroolView } from 'react-native'

import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TextCard from '../component/TextCard';

import axios from 'axios';

// const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';
const API_URL = 'https://api.aladhan.com/v1/asmaAlHusna/4';

export default function Calender({ navigation }) {
  const [data, setData] = useState([]);
  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);

      // const extractMydata = mydata.map((data)=>data[1]);
      // setMyData(response.extractMydata);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (


    <View style={styles.container}>
      
      <Text style={styles.title}>Making API Requests</Text>
    
     

      
   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
  },
})