import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface SuccessScreenProps {
  onGoHome: () => void;
}

export default function SuccessScreen({ onGoHome }: SuccessScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.iconCircle}>
            <Text style={styles.checkmark}>✓</Text>
          </View>

          <Text style={styles.title}>Все готово!</Text>
          <Text style={styles.subtitle}>
            Ваш аккаунт успешно подтвержден.{'\n'}Теперь вы можете просматривать лучшие заведения города.
          </Text>
        </View>

        <Pressable style={styles.primaryButton} onPress={onGoHome}>
          <Text style={styles.primaryButtonText}>Перейти на главную</Text>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FAF5FF',
    borderWidth: 2,
    borderColor: '#9B0AE5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
  },
  checkmark: {
    fontSize: 42,
    color: '#9B0AE5',
    fontWeight: '800',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1B1923',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#AAA9B2',
    lineHeight: 22,
    textAlign: 'center',
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