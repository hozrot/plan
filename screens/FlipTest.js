import React from 'react';
import GestureFlipView from 'react-native-gesture-flip-card';

import{MaterialCommunityIcons} from '@expo/vector-icons';

import { View ,Text,StyleSheet,Image} from 'react-native';

function FlipTest(props) {
   

const renderFront = () => {
  return (
    <View style={{backgroundColor:'#5E8CD4',height:200,width:200}}>
      <Text style={{fontSize: 25}}>{'Front'}</Text>
    </View>
  );
};

const renderBack = () => {
  return (
    
    <View style={{backgroundColor:'#5ED5B9',height:200,width:200}}>
    <Text style={{fontSize: 25}}>{'Back'}</Text>
  </View>

           
  );
};
    return (
        <View >
        <GestureFlipView width={300} height={500}>
        {renderFront()}
          {renderBack()}
          
          </GestureFlipView>
      </View>
    );
}



export default FlipTest;