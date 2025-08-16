import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SectionHeader from '../common/SectionHeader';
import CategoryCard from './CategoryCard';

const CATEGORY_DATA = [
  {
    id: '1',
    label: 'Cabai',
    image: require('../../assets/images/cabai.png'),
  },
  {
    id: '2',
    label: 'Tomat',
    image: require('../../assets/images/tomat.png'),
  },
  {
    id: '3',
    label: 'Jagung',
    image: require('../../assets/images/jagung.png'),
  },
  {
    id: '4',
    label: 'Mangga',
    image: require('../../assets/images/mangga.png'),
  },
];

const PlantCategorySection = () => {
  return (
    <View style={styles.container}>
      <SectionHeader
        title="Tanaman"
        onSeeAll={() => console.log('See All Pressed')}
      />
      <FlatList
        data={CATEGORY_DATA}
        renderItem={({ item }) => (
          <CategoryCard label={item.label} imageSource={item.image} />
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  list: {
    marginTop: 16,
  },
  listContainer: {
    paddingHorizontal: '8%',
  },
});

export default PlantCategorySection;
