import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import SunCloudIcon from '../../assets/icons/SunCloudIcon';

type WeatherCardProps = {
  time: string;
  temperature: number;
  isNow?: boolean;
};

const WeatherCard = ({
  time,
  temperature,
  isNow = false,
}: WeatherCardProps) => {
  return (
    <View style={[styles.card, isNow ? styles.cardNow : styles.cardLater]}>
      <Text style={[styles.text, isNow && styles.textNow]}>{time}</Text>
      <View style={styles.iconContainer}>
        <SunCloudIcon color={isNow ? COLORS.white : COLORS.secondary} />
      </View>
      <Text style={[styles.temperature, isNow && styles.textNow]}>
        {temperature}°
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 80,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  cardNow: {
    backgroundColor: COLORS.primary,
  },
  cardLater: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  text: {
    fontSize: 14,
    color: COLORS.secondary,
  },
  textNow: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  iconContainer: {
    marginVertical: 8,
  },
  temperature: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
});

export default WeatherCard;
