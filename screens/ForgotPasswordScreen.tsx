import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface ForgotPasswordScreenProps {
  onBack: () => void;
  onContinue: (phone: string) => void;
}

export default function ForgotPasswordScreen({
  onBack,
  onContinue,
}: ForgotPasswordScreenProps) {
  const [phone, setPhone] = useState('+7 (700) 555 77 55');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <Pressable
          style={styles.backButton}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
          onPress={onBack}
        >
          <Text style={styles.backArrow}>←</Text>
        </Pressable>

        <View style={styles.headerContainer}>
          <Text style={styles.title}>Восстановление пароля</Text>
          <Text style={styles.subtitle}>
            Введите свой номер телефона, чтобы{'\n'}восстановить пароль
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputIcon}>📞</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Номер телефона"
            placeholderTextColor="#AAA9B2"
            keyboardType="phone-pad"
          />
        </View>

        <Pressable
          style={styles.primaryButton}
          onPress={() => onContinue(phone)}
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
    alignItems: 'center',
    marginTop: 36,
    marginBottom: 36,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1B1923',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#AAA9B2',
    lineHeight: 18,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  inputIcon: {
    fontSize: 16,
    color: '#9B0AE5',
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: '#1B1923',
    fontWeight: '600',
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