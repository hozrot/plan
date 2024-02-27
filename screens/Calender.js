import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'

import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TextCard from '../component/TextCard';

import axios from 'axios';

const API_URL = 'https://api.aladhan.com/v1/asmaAlHusna';
export default function Calender({ navigation }) {
  const [data, setData] = useState([]);

  const  myJsonString = JSON.stringify(data);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Making API Requests</Text>
      <View style={styles.item}>
            <Text>test {data.number.tostring()}</Text>
            <Text>test2 </Text>
          </View> */}
 <Text style={styles.title}>Making API Requests</Text>
 <Text>test {myJsonString.name}</Text>
 <Text>test {data.code}</Text>
 <Text>test {data.number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:70,
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
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