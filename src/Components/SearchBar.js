import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchScreen({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={style.backgroundStyle}>
      <Feather name='search' style={style.iconStyle} />
      <TextInput
        style={style.inputStyle}
        placeholder='Search'
        value={term}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
}

const style = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#E0FFFF',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
