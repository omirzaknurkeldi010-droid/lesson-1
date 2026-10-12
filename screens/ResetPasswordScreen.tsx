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

interface ResetPasswordScreenProps {
  onBack: () => void;
  onSuccess: () => void;
}

export default function ResetPasswordScreen({
  onBack,
  onSuccess,
}: ResetPasswordScreenProps) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmHidden, setIsConfirmHidden] = useState(true);

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
          <Text style={styles.title}>Сбросить пароль</Text>
          <Text style={styles.subtitle}>
            Не менее 8 символов, с{'\n'}прописными и строчными буквами
          </Text>
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

        <View style={styles.inputContainer}>
          <Text style={styles.inputIcon}>🔒</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Повторить пароль"
            placeholderTextColor="#AAA9B2"
            secureTextEntry={isConfirmHidden}
          />
          <Pressable
            style={styles.eyeButton}
            onPress={() => setIsConfirmHidden(!isConfirmHidden)}
          >
            <Text style={styles.eyeSymbolText}>{isConfirmHidden ? '👁' : '🙈'}</Text>
          </Pressable>
        </View>

        <Pressable style={styles.primaryButton} onPress={onSuccess}>
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
  primaryButton: {
    width: '100%',
    height: 54,
    backgroundColor: '#9B0AE5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});