import React from 'react';
import { View,Text } from 'react-native';


function instituteDetails({route}) {
    const  schoolInfo = route.params;
    return (
        <View>
            <Text>  {schoolInfo.headmastername}  </Text>
            <Text>  {schoolInfo.schoolname}  </Text>
            <Text>  {schoolInfo.phoneno}  </Text>
        </View>
    
    );
}





export default instituteDetails;