import React, {useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Video, { VideoRef } from 'react-native-video';

const blogPosts = [
  {
    id: '1',
    title: 'How to Start Blogging',
    description: 'A comprehensive guide on starting your own blog.',
    imageUrl: 'https://via.placeholder.com/150',
    videoUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', // Replace with actual video URL
  },
//   {
//     id: '2',
//     title: 'Top 10 Blogging Platforms',
//     description: 'An overview of the top platforms for blogging in 2024.',
//     imageUrl: 'https://via.placeholder.com/150',
//     videoUrl: 'https://www.example.com/video2.mp4', // Replace with actual video URL
//   },
//   {
//     id: '3',
//     title: 'SEO Tips for Bloggers',
//     description: 'Essential SEO tips to help your blog get noticed.',
//     imageUrl: 'https://via.placeholder.com/150',
//     videoUrl: 'https://www.example.com/video3.mp4', // Replace with actual video URL
//   },
];

const BlogHome = () => {
  const videoRef = useRef<VideoRef>(null);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
            videoRef.current?.resume()
          /* Navigate to post details */
        }}>
        <Image source={{uri: item.imageUrl}} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Video
          allowsExternalPlayback
          playInBackground
            source={{uri: item.videoUrl}}
            ref={videoRef}
            onBuffer={() => console.log('Buffering...')}
            onError={e => console.log('Error:', e)}
            style={styles.videoPlayer}
            controls={true}
            resizeMode='contain'
            // style={styles.backgroundVideo}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={blogPosts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 100,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  videoPlayer: {
    // alignSelf: 'stretch',
    height: 200,
    width:200
  },
  backgroundVideo: {
    position: 'absolute',
    top: 200,
    left: 0,
    bottom: 0,
    right: 0,
    height:200, width:200
  },
});

export default BlogHome;
