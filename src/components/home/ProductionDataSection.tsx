import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../constants/colors';
import ArrowUpIcon from '../../assets/icons/ArrowUpIcon';
import ArrowDownIcon from '../../assets/icons/ArrowDownIcon';

// Tipe data untuk setiap item produksi
type ProductionItem = {
  id: string;
  label: string;
  percentage: number;
  trend: 'up' | 'down';
  value: string;
  barColor: string;
  image: ReturnType<typeof require>;
};

// Data dummy yang lebih detail sesuai desain baru
const PRODUCTION_DATA: ProductionItem[] = [
  {
    id: '1',
    label: 'Tomat',
    percentage: 76.5,
    trend: 'up',
    value: '7,65%',
    barColor: '#2E7D32',
    image: require('../../assets/images/icon_tomat.png'),
  },
  {
    id: '2',
    label: 'Kol',
    percentage: 35.5,
    trend: 'up',
    value: '3,55%',
    barColor: '#2E7D32',
    image: require('../../assets/images/icon_kol.png'),
  },
  {
    id: '3',
    label: 'Jagung',
    percentage: 63.2,
    trend: 'down',
    value: '6,32%',
    barColor: '#C62828',
    image: require('../../assets/images/icon_jagung.png'),
  },
  {
    id: '4',
    label: 'Wortel',
    percentage: 81.1,
    trend: 'down',
    value: '8,11%',
    barColor: '#C62828',
    image: require('../../assets/images/icon_wortel.png'),
  },
  {
    id: '5',
    label: 'Mangga',
    percentage: 41.3,
    trend: 'up',
    value: '4,13%',
    barColor: '#2E7D32',
    image: require('../../assets/images/icon_mangga.png'),
  },
];

const filters = ['1 HR', '1 MGG', '1 BLN', '1 THN'];

const ProductionDataSection = () => {
  const [activeFilter, setActiveFilter] = useState('1 BLN');

  return (
    <View style={styles.outerContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Data Produksi</Text>
        <View style={styles.filterContainer}>
          {filters.map(filter => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                activeFilter === filter && styles.activeFilterButton,
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilter === filter && styles.activeFilterText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.chartContainer}>
        {/* Render setiap bar dari data */}
        {PRODUCTION_DATA.map(item => (
          <View key={item.id} style={styles.barItem}>
            {/* Persentase dan panah */}
            <View style={styles.trendContainer}>
              {item.trend === 'up' ? <ArrowUpIcon /> : <ArrowDownIcon />}
              <Text
                style={[
                  styles.percentageText,
                  { color: item.trend === 'up' ? COLORS.green : COLORS.red },
                ]}
              >
                {item.value}
              </Text>
            </View>
            {/* Bar utama */}
            <View style={styles.barWrapper}>
              <View
                style={[
                  styles.bar,
                  {
                    height: `${item.percentage}%`,
                    backgroundColor: item.barColor,
                  },
                ]}
              />
            </View>
            {/* Ikon tanaman */}
            <View style={styles.iconWrapper}>
              <Image source={item.image} style={styles.iconImage} />
            </View>
            {/* Label tanaman */}
            <Text style={styles.labelText}>{item.label}</Text>
          </View>
        ))}
        {/* Tombol Tambah */}
        <TouchableOpacity style={styles.addItemButton}>
          <View style={styles.plusCircle}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Tombol Lihat Semua */}
      <TouchableOpacity style={styles.seeAllButton}>
        <Text style={styles.seeAllText}>Lihat Semua</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles yang sudah dirombak total
const styles = StyleSheet.create({
  outerContainer: {
    marginHorizontal: 20,
    marginTop: 24,
    backgroundColor: '#005249', // Warna hijau tua dari background
    borderRadius: 20,
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  filterContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  activeFilterButton: {
    backgroundColor: '#00C2A7',
  },
  filterText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.white,
    opacity: 0.8,
  },
  activeFilterText: {
    opacity: 1,
  },
  chartContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end', // Penting agar bar mulai dari bawah
    height: 250, // Tinggi area grafik
  },
  barItem: {
    flex: 1,
    alignItems: 'center',
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  percentageText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: 'bold',
  },
  barWrapper: {
    flex: 1,
    width: 20, // Lebar bar
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    marginTop: 25,
    marginBottom: 15,
  },
  bar: {
    width: '100%',
    borderRadius: 10,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  labelText: {
    position: 'absolute',
    bottom: 0,
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.secondary,
  },
  addItemButton: {
    height: '80%',
    width: 40,
    borderWidth: 2,
    borderColor: COLORS.lightGray,
    borderRadius: 20,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 10,
  },
  plusCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    fontSize: 18,
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  seeAllButton: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderStyle: 'dashed',
    paddingVertical: 12,
    marginTop: 12,
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
});

export default ProductionDataSection;
