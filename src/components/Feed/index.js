import React, {seEffect, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';

import Post from '../Post';
import Stories from '../UserStoriesPreview';
import {listPosts} from '../../../graphql/queries';

// const data = [
//   {
//     id: '1',
//     user: {
//       imageUri:
//         'https://lh3.googleusercontent.com/IAoSjrhWmWSGE5y83DhI7q8zCEMjRS-_D0EabeB2_5pe9M3oPLQSTupEmsz1Dm3SSsiFty2f0QLW3D4t4xxcvJ3O',
//       name: 'Bunny',
//     },
//     imageUri:
//       'https://lh3.googleusercontent.com/gOme4XPmM4fuMiX9avNY_l7WycOx0imd9KtaQKS_-B0iv1LjmLNFdhDMPujegDjY5A5vXaigimOgN198M30BAt83db8',
//     caption: 'Some beauty',
//     likesCount: 1234,
//     postedAt: '8 minutes ago',
//   },
//   {
//     id: '2',
//     user: {
//       imageUri:
//         'https://lh3.googleusercontent.com/H66wVS8DHkHzmQDe9gNiMVJVH3BIKOcPzceiOLB-AKhanm2mLthChfPrhkwCIJ7x0M0DJQhVia2nKqS2Qvb1IbzvUA',
//       name: 'Papillon',
//     },
//     imageUri:
//       'https://lh3.googleusercontent.com/ObOQ57RNYUdbeKX5E8K0g2RYQEUNsY9-1HENVO-un7SwAgJ7OcG3l5Fz3iiMVnMKZ8W7a_mdO7XRXQzzUWHlgg54',
//     caption: 'Sweet suit',
//     likesCount: 21234,
//     postedAt: '38 minutes ago',
//   },
//   {
//     id: '3',
//     user: {
//       imageUri:
//         'https://lh3.googleusercontent.com/jsdwCx-wjTjeVE1KTNsG34z5YHIShgwrmkiw7dcytONsqQYDUZS7QpBN1Ds6CCd9EiUmW5NaGUVRr8O_btkhz04a',
//       name: 'Puppy',
//     },
//     imageUri:
//       'https://lh3.googleusercontent.com/jLqzFkZP4jbUvdecIBN4DoCR2VJuB0URAGj92lPSrLBRsGfFDBu5ApsN8jcYNxXMbRbOCQWEgvZSp-51RsjJQung',
//     caption: 'Camel',
//     likesCount: 51234,
//     postedAt: '48 minutes ago',
//   },
// ];

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postsData.data.listPosts.items);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <Post post={item} />}
      keyExtractor={({id}) => id}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
