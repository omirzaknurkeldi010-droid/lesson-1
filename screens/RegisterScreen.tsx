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

interface RegisterScreenProps {
  onBack: () => void;
  onLogin: () => void;
  onRegisterSuccess: () => void;
}

export default function RegisterScreen({
  onBack,
  onLogin,
  onRegisterSuccess,
}: RegisterScreenProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isAgreed, setIsAgreed] = useState(false);

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
          <Text style={styles.title}>Регистрация</Text>
          <Text style={styles.subtitle}>
            Создайте учетную запись,{'\n'}чтобы продолжить!
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputIcon}>👤</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Ваше имя"
            placeholderTextColor="#AAA9B2"
          />
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
            <Text style={styles.eyeSymbolText}>{isPasswordHidden ? '👁' : '🙈'}</Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.checkboxRow}
          onPress={() => setIsAgreed(!isAgreed)}
        >
          <View style={[styles.checkbox, isAgreed && styles.checkboxActive]}>
            {isAgreed && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.checkboxText}>
            Создавая учетную запись, вы соглашаетесь с нашими{' '}
            <Text style={styles.termsText}>Условиями использования</Text>.
          </Text>
        </Pressable>

        <Pressable style={styles.primaryButton} onPress={onRegisterSuccess}>
          <Text style={styles.primaryButtonText}>Зарегистрироваться</Text>
        </Pressable>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Уже есть аккаунт? </Text>
          <Pressable onPress={onLogin}>
            <Text style={styles.footerLink}>Войти</Text>
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
    marginBottom: 28,
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
    lineHeight: 20,
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
  eyeSymbolText: {
    fontSize: 16,
    color: '#AAA9B2',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
    marginBottom: 24,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#D2D1D7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  checkboxActive: {
    backgroundColor: '#9B0AE5',
    borderColor: '#9B0AE5',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  checkboxText: {
    flex: 1,
    fontSize: 12,
    color: '#AAA9B2',
    lineHeight: 18,
  },
  termsText: {
    color: '#9B0AE5',
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