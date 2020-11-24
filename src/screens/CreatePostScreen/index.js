import React from 'react';
import {View, Text} from 'react-native';
import Feed from '../../components/Feed';

const CreatePostScreen = () => (
  <View style={{backgroundColor: 'red', height: 500}}>
    <Text
      style={{
        textAlign: 'center',
        marginTop: 300,
        fontSize: 50,
        color: 'blue',
      }}>
      Create a Post
    </Text>
  </View>
);

export default CreatePostScreen;
