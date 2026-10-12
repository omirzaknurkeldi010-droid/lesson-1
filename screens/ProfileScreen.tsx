import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface ProfileScreenProps {
  onBack: () => void;
  onChangeCity: () => void;
  onLogout: () => void;
}

export default function ProfileScreen({
  onBack,
  onChangeCity,
  onLogout,
}: ProfileScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <View>
          {/* Кнопка назад */}
          <Pressable
            style={styles.backButton}
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            onPress={onBack}
          >
            <Text style={styles.backArrow}>←</Text>
          </Pressable>

          {/* Аватар и имя */}
          <View style={styles.avatarSection}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarInitials}>Р</Text>
            </View>
            <Text style={styles.userName}>Руслан</Text>
            <Text style={styles.userPhone}>+7 (700) 555 77 55</Text>
          </View>

          {/* Меню действий */}
          <View style={styles.menuContainer}>
            <Pressable style={styles.menuItem} onPress={onChangeCity}>
              <View style={styles.menuItemLeft}>
                <Text style={styles.menuIcon}>📍</Text>
                <Text style={styles.menuItemText}>Сменить город (Алматы)</Text>
              </View>
              <Text style={styles.menuItemArrow}>›</Text>
            </Pressable>

            <Pressable style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <Text style={styles.menuIcon}>⭐</Text>
                <Text style={styles.menuItemText}>Избранные заведения</Text>
              </View>
              <Text style={styles.menuItemArrow}>›</Text>
            </Pressable>

            <Pressable style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <Text style={styles.menuIcon}>🔔</Text>
                <Text style={styles.menuItemText}>Уведомления</Text>
              </View>
              <Text style={styles.menuItemArrow}>›</Text>
            </Pressable>
          </View>
        </View>

        {/* Кнопка выхода */}
        <Pressable style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutButtonText}>Выйти из аккаунта</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  backArrow: {
    fontSize: 24,
    color: '#1B1923',
    fontWeight: '600',
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#9B0AE5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarInitials: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  userName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1B1923',
    marginBottom: 4,
  },
  userPhone: {
    fontSize: 13,
    color: '#AAA9B2',
  },
  menuContainer: {
    backgroundColor: '#F8F8FA',
    borderRadius: 20,
    paddingVertical: 6,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 16,
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1B1923',
  },
  menuItemArrow: {
    fontSize: 20,
    color: '#AAA9B2',
  },
  logoutButton: {
    width: '100%',
    height: 54,
    backgroundColor: '#FFF0F0',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#E53935',
    fontSize: 15,
    fontWeight: '700',
  },
});