import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface HomeScreenProps {
  onOpenProfile: () => void;
  onLogout: () => void;
}

const CATEGORIES = ['Все', 'Кофейни', 'Рестораны', 'Бургеры', 'Десерты'];

const PLACES = [
  { id: 1, title: 'Coffee Original', category: 'Кофейни', rating: '4.9', desc: 'Свежая выпечка и авторский кофе' },
  { id: 2, title: 'Burger Hub', category: 'Бургеры', rating: '4.7', desc: 'Сочные бургеры на открытом гриле' },
  { id: 3, title: 'Sweet Dreams Lab', category: 'Десерты', rating: '4.8', desc: 'Десерты ручной работы и чай' },
];

export default function HomeScreen({ onOpenProfile }: HomeScreenProps) {
  const [selectedCat, setSelectedCat] = useState('Все');
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        {/* Верхняя строка: город и кнопка профиля */}
        <View style={styles.topRow}>
          <View>
            <Text style={styles.cityLabel}>Ваш город</Text>
            <Text style={styles.cityName}>📍 Алматы</Text>
          </View>
          <Pressable style={styles.profileBadge} onPress={onOpenProfile}>
            <Text style={styles.profileBadgeText}>👤</Text>
          </Pressable>
        </View>

        {/* Поисковая строка */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Поиск заведений..."
            placeholderTextColor="#AAA9B2"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Горизонтальный скролл категорий */}
        <View style={styles.categoriesWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {CATEGORIES.map((cat) => {
              const isActive = selectedCat === cat;
              return (
                <Pressable
                  key={cat}
                  style={[styles.categoryChip, isActive && styles.categoryChipActive]}
                  onPress={() => setSelectedCat(cat)}
                >
                  <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>
                    {cat}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* Список карточек */}
        <ScrollView showsVerticalScrollIndicator={false} style={styles.placesList}>
          <Text style={styles.sectionTitle}>Популярное рядом</Text>
          {PLACES.map((item) => (
            <View key={item.id} style={styles.placeCard}>
              <View style={styles.placeCardHeader}>
                <Text style={styles.placeTitle}>{item.title}</Text>
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                </View>
              </View>
              <Text style={styles.placeDesc}>{item.desc}</Text>
              <View style={styles.cardBottomRow}>
                <Text style={styles.placeCategoryBadge}>{item.category}</Text>
                <Pressable style={styles.viewButton}>
                  <Text style={styles.viewButtonText}>Открыть →</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
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
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 20,
  },
  cityLabel: {
    fontSize: 12,
    color: '#AAA9B2',
  },
  cityName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1B1923',
    marginTop: 2,
  },
  profileBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F8F8FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBadgeText: {
    fontSize: 18,
  },
  searchContainer: {
    width: '100%',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    borderRadius: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchIcon: {
    fontSize: 15,
    marginRight: 10,
    opacity: 0.6,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1B1923',
  },
  categoriesWrapper: {
    marginBottom: 20,
  },
  categoryChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: '#F8F8FA',
    marginRight: 10,
  },
  categoryChipActive: {
    backgroundColor: '#9B0AE5',
  },
  categoryText: {
    fontSize: 13,
    color: '#AAA9B2',
    fontWeight: '600',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  placesList: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1B1923',
    marginBottom: 14,
  },
  placeCard: {
    backgroundColor: '#F8F8FA',
    borderRadius: 20,
    padding: 18,
    marginBottom: 14,
  },
  placeCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  placeTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1B1923',
  },
  ratingBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1B1923',
  },
  placeDesc: {
    fontSize: 13,
    color: '#AAA9B2',
    marginBottom: 14,
    lineHeight: 18,
  },
  cardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeCategoryBadge: {
    fontSize: 12,
    color: '#9B0AE5',
    fontWeight: '600',
    backgroundColor: '#FAF5FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  viewButton: {
    paddingVertical: 4,
  },
  viewButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#9B0AE5',
  },
});