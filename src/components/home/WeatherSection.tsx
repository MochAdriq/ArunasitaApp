import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { COLORS } from '../../constants/colors';
import WeatherCard from './WeatherCard';

// Data dummy untuk cuaca
const DUMMY_WEATHER_DATA = [
  { id: '1', time: 'Sekarang', temp: 25, isNow: true },
  { id: '2', time: '10:00', temp: 26 },
  { id: '3', time: '11:00', temp: 26 },
  { id: '4', time: '12:00', temp: 26 },
  { id: '5', time: '13:00', temp: 25 },
  { id: '6', time: '14:00', temp: 25 },
];

const WeatherSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cuaca Hari Ini</Text>
      <FlatList
        data={DUMMY_WEATHER_DATA}
        renderItem={({ item }) => (
          <WeatherCard
            time={item.time}
            temperature={item.temp}
            isNow={item.isNow}
          />
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 12,
  },
  listContainer: {
    paddingRight: 20, // Memberi sedikit ruang di akhir list
  },
});

export default WeatherSection;
