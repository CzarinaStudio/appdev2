import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Course & Section</Text>
        <Text style={styles.value}>BSIS — 3A</Text>

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Czarina Jane Fombuena</Text>

        <Text style={styles.label}>Age</Text>
        <Text style={styles.value}>22</Text>

        <Text style={styles.label}>Favorite hobby</Text>
        <Text style={styles.value}>Crying</Text>

        <Text style={styles.label}>Short bio</Text>
        <Text style={styles.value}>I like color pink & dogs.</Text>

        <Text style={[styles.label, { marginTop: 12 }]}>Pet peeves in class / classmates</Text>
        <View style={styles.petList}>
          <Text style={styles.petItem}>• The aircon is too cold or not cold enough</Text>
          <Text style={styles.petItem}>• So many hairs on the floor</Text>
          <Text style={styles.petItem}>• If there aren't enough chairs</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8c7ed',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    color: '#1f2937',
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: '#111827',
    marginTop: 4,
  },
  petList: {
    marginTop: 8,
  },
  petItem: {
    fontSize: 14,
    color: '#374151',
    marginTop: 6,
  },
});
