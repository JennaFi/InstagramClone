import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import ProfilePicture from '../profilePicture';
import styles from '../profilePicture/styles';

const Story = (props) => {
  const {
    story: {
      user: {id, image, name},
    },
  } = props;
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Story', {userId: id});
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <ProfilePicture uri={image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
