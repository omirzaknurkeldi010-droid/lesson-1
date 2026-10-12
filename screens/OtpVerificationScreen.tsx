import React, { useRef, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface OtpVerificationScreenProps {
  phoneNumber?: string;
  onBack: () => void;
  onContinue: (code: string) => void;
}

export default function OtpVerificationScreen({
  phoneNumber = '+7 (700) 555 77 55',
  onBack,
  onContinue,
}: OtpVerificationScreenProps) {
  const [code, setCode] = useState(['7', '8', '5', '4']);

  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);
  const input3Ref = useRef<TextInput>(null);
  const input4Ref = useRef<TextInput>(null);

  const inputs = [input1Ref, input2Ref, input3Ref, input4Ref];

  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs[index - 1].current?.focus();
    }
  };

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
          <Text style={styles.title}>Подтвердить номер</Text>
          <Text style={styles.subtitle}>
            Мы только что отправили код на{'\n'}
            <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
          </Text>
        </View>

        <View style={styles.otpRow}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputs[index]}
              style={styles.otpBox}
              value={digit}
              onChangeText={(text) => handleChangeText(text.slice(-1), index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
              selectTextOnFocus
            />
          ))}
        </View>

        <Pressable
          style={styles.primaryButton}
          onPress={() => onContinue(code.join(''))}
        >
          <Text style={styles.primaryButtonText}>Продолжить</Text>
        </Pressable>

        <Pressable style={styles.resendButton}>
          <Text style={styles.resendText}>Отправить код еще раз</Text>
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
  phoneNumberText: {
    color: '#1B1923',
    fontWeight: '700',
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 28,
  },
  otpBox: {
    width: 68,
    height: 68,
    backgroundColor: '#F8F8FA',
    borderRadius: 16,
    fontSize: 22,
    fontWeight: '700',
    color: '#1B1923',
  },
  primaryButton: {
    width: '100%',
    height: 54,
    backgroundColor: '#9B0AE5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  resendButton: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  resendText: {
    color: '#AAA9B2',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
});