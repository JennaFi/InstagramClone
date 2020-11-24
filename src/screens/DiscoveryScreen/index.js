import React from 'react';
import {View, Text} from 'react-native';
import Feed from '../../components/Feed';

const DiscoverScreen = () => (
  <View style={{backgroundColor: 'blue', height: 500}}>
    <Text
      style={{
        textAlign: 'center',
        marginTop: 300,
        fontSize: 50,
        color: 'yellow',
      }}>
      Discovery
    </Text>
  </View>
);

export default DiscoverScreen;
