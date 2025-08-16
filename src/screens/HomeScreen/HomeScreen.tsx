import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import HomeHeader from '../../components/home/HomeHeader';
import WeatherSection from '../../components/home/WeatherSection';
import PlantCamBanner from '../../components/home/PlantCamBanner';
import PlantCategorySection from '../../components/home/PlantCategorySection';
import ProductionDataSection from '../../components/home/ProductionDataSection';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <WeatherSection />
        <PlantCamBanner />
        <PlantCategorySection />
        <ProductionDataSection />

        <View style={{ height: 200 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default HomeScreen;
