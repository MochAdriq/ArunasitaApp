import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import { COLORS } from '../../constants/colors';

type CategoryCardProps = {
  label: string;
  imageSource: ImageSourcePropType;
  onPress?: () => void;
};

const CategoryCard = ({ label, imageSource, onPress }: CategoryCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.card}>
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
      </View>
      {/* Jika butuh label di bawahnya, uncomment kode di bawah */}
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
    alignItems: 'center',
  },
  card: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    color: COLORS.secondary,
    fontWeight: '500',
  },
});

export default CategoryCard;
