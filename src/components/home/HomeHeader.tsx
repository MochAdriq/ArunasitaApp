import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/colors';
import LocationPinIcon from '../../assets/icons/LocationPinIcon';
import ShoppingCartIcon from '../../assets/icons/ShoppingCartIcon';
import BellIcon from '../../assets/icons/BellIcon';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      {/* Bagian Kiri: Avatar & Info Pengguna */}
      <View style={styles.userInfoContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/40' }} // Placeholder avatar
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.userName}>Obal Obul</Text>
          <View style={styles.locationContainer}>
            <LocationPinIcon width={14} height={14} color={COLORS.green} />
            <Text style={styles.locationText}>Cicantayan, Jawa Barat</Text>
          </View>
        </View>
      </View>

      {/* Bagian Kanan: Ikon Aksi */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <ShoppingCartIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <BellIcon />
          {/* Notifikasi dot */}
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.background, // Sama dengan background utama
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  textContainer: {
    marginLeft: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.green,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  locationText: {
    fontSize: 14,
    color: COLORS.green,
    marginLeft: 4,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: 16,
    padding: 4,
  },
  notificationDot: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.red,
    borderWidth: 1,
    borderColor: COLORS.background,
  },
});

export default HomeHeader;
