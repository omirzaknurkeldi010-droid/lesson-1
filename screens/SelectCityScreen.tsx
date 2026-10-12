import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface SelectCityScreenProps {
  onBack: () => void;
  onContinue: (city: string) => void;
}

const CITIES = ['Алматы', 'Астана', 'Шымкент', 'Караганда', 'Актобе'];

export default function SelectCityScreen({
  onBack,
  onContinue,
}: SelectCityScreenProps) {
  const [selectedCity, setSelectedCity] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <View>
          <Pressable
            style={styles.backButton}
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            onPress={onBack}
          >
            <Text style={styles.backArrow}>←</Text>
          </Pressable>

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Выберите город</Text>
            <Text style={styles.subtitle}>
              Заведения которые будут показываться{'\n'}вам, будут зависеть от вашего города.
            </Text>
          </View>

          {/* Дропдаун как на макете */}
          <Pressable
            style={styles.dropdownButton}
            onPress={() => setIsOpen(!isOpen)}
          >
            <Text style={[styles.dropdownText, !!selectedCity && styles.dropdownSelectedText]}>
              {selectedCity || 'Выбрать город'}
            </Text>
            <Text style={styles.dropdownArrow}>{isOpen ? '▲' : '˅'}</Text>
          </Pressable>

          {isOpen && (
            <View style={styles.dropdownMenu}>
              {CITIES.map((city) => (
                <Pressable
                  key={city}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedCity(city);
                    setIsOpen(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{city}</Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>

        {/* Кнопка прижата к низу */}
        <Pressable
          style={styles.primaryButton}
          onPress={() => onContinue(selectedCity || 'Алматы')}
        >
          <Text style={styles.primaryButtonText}>Продолжить</Text>
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
    marginBottom: 16,
  },
  backArrow: {
    fontSize: 24,
    color: '#1B1923',
    fontWeight: '600',
  },
  headerContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1B1923',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#AAA9B2',
    lineHeight: 18,
  },
  dropdownButton: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 18,
  },
  dropdownText: {
    fontSize: 15,
    color: '#AAA9B2',
  },
  dropdownSelectedText: {
    color: '#1B1923',
    fontWeight: '600',
  },
  dropdownArrow: {
    fontSize: 14,
    color: '#9B0AE5',
    fontWeight: '700',
  },
  dropdownMenu: {
    backgroundColor: '#F8F8FA',
    borderRadius: 16,
    marginTop: 8,
    paddingVertical: 8,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  dropdownItemText: {
    fontSize: 15,
    color: '#1B1923',
  },
  primaryButton: {
    width: '100%',
    height: 54,
    backgroundColor: '#9B0AE5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});