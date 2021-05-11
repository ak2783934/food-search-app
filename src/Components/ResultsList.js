import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View style={style.container}>
      <Text style={style.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={result => {
          return result.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ResultShow', { id: item.id });
              }}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 8,
  },
  container: {
    marginBottom: 15,
  },
});

export default withNavigation(ResultsList);
