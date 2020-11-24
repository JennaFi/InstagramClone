import React from 'react';
import {View, Text} from 'react-native';
import Feed from '../../components/Feed';

const ProfileScreen = () => (
  <View style={{backgroundColor: 'orange', height: 500}}>
    <Text
      style={{
        textAlign: 'center',
        marginTop: 300,
        fontSize: 50,
        color: 'green',
      }}>
      Profile
    </Text>
  </View>
);

export default ProfileScreen;
