import React from 'react';
import {View, Text} from 'react-native';
import Feed from '../../components/Feed';

const NotificationsScreen = () => (
  <View style={{backgroundColor: 'green', height: 500}}>
    <Text
      style={{
        textAlign: 'center',
        marginTop: 300,
        fontSize: 50,
        color: 'pink',
      }}>
      Notifications
    </Text>
  </View>
);

export default NotificationsScreen;
