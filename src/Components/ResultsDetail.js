import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ResultsDetail({ result }) {
  return (
    <View style={style.container}>
      <Image style={style.imageStyle} source={{ uri: result.image_url }} />
      <Text style={style.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 140,
    borderRadius: 10,
    marginBottom: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
