import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMsg] = useResults();

  const filterResultByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultByPrice('$')}
          title='Cost effective'
        />
        <ResultsList results={filterResultByPrice('$$')} title='Bit pricier' />
        <ResultsList results={filterResultByPrice('$$$')} title='Big spender' />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({});
