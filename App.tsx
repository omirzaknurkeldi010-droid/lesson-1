import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SelectCityScreen from './screens/SelectCityScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import OtpVerificationScreen from './screens/OtpVerificationScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import SuccessScreen from './screens/SuccessScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<
    'login' | 'register' | 'select_city' | 'forgot_password' | 'otp' | 'reset_password' | 'success' | 'home' | 'profile'
  >('login');

  if (currentScreen === 'register') {
    return (
      <RegisterScreen
        onBack={() => setCurrentScreen('login')}
        onLogin={() => setCurrentScreen('login')}
        onRegisterSuccess={() => setCurrentScreen('select_city')}
      />
    );
  }

  if (currentScreen === 'select_city') {
    return (
      <SelectCityScreen
        onBack={() => setCurrentScreen('register')}
        onContinue={() => setCurrentScreen('success')}
      />
    );
  }

  if (currentScreen === 'success') {
    return (
      <SuccessScreen
        onGoHome={() => setCurrentScreen('home')}
      />
    );
  }

  if (currentScreen === 'home') {
    return (
      <HomeScreen
        onOpenProfile={() => setCurrentScreen('profile')}
        onLogout={() => setCurrentScreen('login')}
      />
    );
  }

  if (currentScreen === 'profile') {
    return (
      <ProfileScreen
        onBack={() => setCurrentScreen('home')}
        onChangeCity={() => setCurrentScreen('select_city')}
        onLogout={() => setCurrentScreen('login')}
      />
    );
  }

  if (currentScreen === 'forgot_password') {
    return (
      <ForgotPasswordScreen
        onBack={() => setCurrentScreen('login')}
        onContinue={() => setCurrentScreen('otp')}
      />
    );
  }

  if (currentScreen === 'otp') {
    return (
      <OtpVerificationScreen
        phoneNumber="+7 (700) 555 77 55"
        onBack={() => setCurrentScreen('forgot_password')}
        onContinue={() => setCurrentScreen('reset_password')}
      />
    );
  }

  if (currentScreen === 'reset_password') {
    return (
      <ResetPasswordScreen
        onBack={() => setCurrentScreen('otp')}
        onSuccess={() => setCurrentScreen('success')}
      />
    );
  }

  return (
    <LoginScreen
      onForgotPassword={() => setCurrentScreen('forgot_password')}
      onRegister={() => setCurrentScreen('register')}
    />
  );
}