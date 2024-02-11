import React from 'react';
import { View,Text } from 'react-native';
function VipDetails({route}) {

    const  members = route.params;
    return (
        <View>
            <Text>  {members.name}  </Text>
            <Text>  {members.schoolname}  </Text>
        </View>
    );
}

export default VipDetails;