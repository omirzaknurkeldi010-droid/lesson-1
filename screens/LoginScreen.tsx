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

interface LoginScreenProps {
  onForgotPassword: () => void;
  onRegister: () => void;
}

export default function LoginScreen({
  onForgotPassword,
  onRegister,
}: LoginScreenProps) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <Pressable
          style={styles.backButton}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        >
          <Text style={styles.backArrow}>←</Text>
        </Pressable>

        <View style={styles.headerContainer}>
          <Text style={styles.title}>Привет, с возвращением!</Text>
          <Text style={styles.subtitle}>Войдите в свой аккаунт.</Text>
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

        <View style={styles.inputContainer}>
          <Text style={styles.inputIcon}>🔒</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Пароль"
            placeholderTextColor="#AAA9B2"
            secureTextEntry={isPasswordHidden}
          />
          <Pressable
            style={styles.eyeButton}
            onPress={() => setIsPasswordHidden(!isPasswordHidden)}
          >
            <View style={styles.purpleEyeBadge}>
              <Text style={styles.eyeSymbol}>{isPasswordHidden ? '⊘' : '👁'}</Text>
            </View>
          </Pressable>
        </View>

        <Pressable style={styles.forgotPasswordButton} onPress={onForgotPassword}>
          <Text style={styles.forgotPasswordText}>Забыли пароль?</Text>
        </Pressable>

        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Войти</Text>
        </Pressable>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>У вас нет аккаунта? </Text>
          <Pressable onPress={onRegister}>
            <Text style={styles.footerLink}>Зарегистрироваться</Text>
          </Pressable>
        </View>
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
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1B1923',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#AAA9B2',
  },
  inputContainer: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  inputIcon: {
    fontSize: 16,
    color: '#AAA9B2',
    opacity: 0.5,
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: '#1B1923',
  },
  eyeButton: {
    padding: 4,
  },
  purpleEyeBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#9B0AE5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeSymbol: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 28,
  },
  forgotPasswordText: {
    color: '#9B0AE5',
    fontSize: 13,
    fontWeight: '600',
  },
  primaryButton: {
    width: '100%',
    height: 54,
    backgroundColor: '#9B0AE5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#AAA9B2',
    fontSize: 13,
  },
  footerLink: {
    color: '#9B0AE5',
    fontSize: 13,
    fontWeight: '700',
  },
});