import React from 'react';
import {Text} from 'react-native';
import Feed from '../../components/Feed';
// import Post from '../../components/Post';

// import Stories from '../../components/Stories';
import {SafeAreaView} from 'react-native';

const HomeScreen = () => (
  <SafeAreaView>
    {/* <Stories /> */}
    <Feed />
  </SafeAreaView>
);

export default HomeScreen;
