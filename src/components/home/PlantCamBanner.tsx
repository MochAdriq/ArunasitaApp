import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants/colors';

// Aset untuk latar belakang dan gradasi
const mainBg = require('../../assets/images/banner_main_bg.png');
const gradientLeft = require('../../assets/images/banner_gradient_left.png');
// 1. TAMBAHKAN KEMBALI IMPORT GAMBAR HP
const phoneHand = require('../../assets/images/banner_phone_hand.png');

const PlantCamBanner = () => {
  return (
    // Container utama sekarang menjadi "panggung"
    <View style={styles.container}>
      {/* View baru ini yang akan membungkus background dan teks */}
      <View style={styles.backgroundContent}>
        <Image
          source={mainBg}
          style={styles.backgroundImage}
          resizeMode="contain"
        />
        <Image
          source={gradientLeft}
          style={styles.gradientOverlay}
          resizeMode="stretch"
        />
        <View style={styles.textSection}>
          <Text style={styles.title}>Mau tahu kondisi tanamanmu?</Text>
          <Text style={styles.subtitle}>
            Ambil foto tanamanmu dan dapatkan analisis otomatis menggunakan
            teknologi PlantCam.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Coba PlantCam</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 2. GAMBAR HP KITA TARUH DI SINI, SEBAGAI SIBLING DARI BACKGROUND */}
      <Image
        source={phoneHand}
        style={styles.phoneImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // 3. UBAH CONTAINER UTAMA
  container: {
    marginTop: 45, // Beri jarak lebih agar HP tidak menabrak section cuaca
    marginHorizontal: 20,
    height: 136,
    // overflow: 'hidden' DIHAPUS DARI SINI
  },
  // 4. TAMBAHKAN STYLE BARU UNTUK BACKGROUND
  backgroundContent: {
    height: '100%',
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden', // Overflow hidden pindah ke sini
    backgroundColor: '#166534',
  },
  backgroundImage: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  textSection: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    zIndex: 3,
  },
  // 5. TAMBAHKAN STYLE BARU UNTUK GAMBAR HP
  phoneImage: {
    position: 'absolute',
    top: -35, // Nilai negatif untuk menonjol ke atas
    right: 12,
    width: 210,
    height: 180,
    zIndex: 99, // zIndex tertinggi
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    lineHeight: 26,
    width: '70%',
  },
  subtitle: {
    fontSize: 10,
    color: COLORS.white,
    marginTop: 6,
    lineHeight: 18,
    opacity: 0.9,
    width: '60%',
  },
  button: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: COLORS.secondary,
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default PlantCamBanner;
