import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

export default function ResultsShowScreen({ navigation }) {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <View>
      <Text style={{ margin: 10 }}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={style.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}
const style = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    margin: 10,
  },
});
