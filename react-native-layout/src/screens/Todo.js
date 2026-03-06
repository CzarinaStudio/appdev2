import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TodoScreen() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleAddTodo = () => {
    if (inputText.trim() === '') return;
    const newTodo = {
      id: Date.now().toString(),
      text: inputText.trim(),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setInputText('');
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const completedCount = todos.filter(t => t.completed).length;

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity
        style={[styles.checkbox, item.completed && styles.checkboxDone]}
        onPress={() => handleToggleTodo(item.id)}
      >
        {item.completed && (
          <Ionicons name="checkmark" size={14} color="#fff" />
        )}
      </TouchableOpacity>

      <Text style={[styles.todoText, item.completed && styles.todoTextDone]}>
        {item.text}
      </Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteTodo(item.id)}
      >
        <Ionicons name="trash-outline" size={18} color="#ff6b6b" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>My To-Do List</Text>
          <Text style={styles.subtitle}>
            {completedCount}/{todos.length} completed
          </Text>
        </View>

        {/* Search input */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={18} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search todos..."
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <Ionicons name="close-circle" size={18} color="gray" />
            </TouchableOpacity>
          )}
        </View>

        {/* Todo list */}
        <FlatList
          data={filteredTodos}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="clipboard-outline" size={44} color="#ccc" />
              <Text style={styles.emptyText}>
                {searchText ? 'No todos match your search.' : 'No todos yet. Add one below!'}
              </Text>
            </View>
          }
        />

        {/* Add todo input */}
        <View style={styles.addContainer}>
          <TextInput
            style={styles.addInput}
            placeholder="Add a new task..."
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={handleAddTodo}
            returnKeyType="done"
          />
          <TouchableOpacity
            style={[styles.addButton, inputText.trim() === '' && styles.addButtonDisabled]}
            onPress={handleAddTodo}
            disabled={inputText.trim() === ''}
          >
            <Ionicons name="add" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    height: 42,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    height: 42,
    fontSize: 14,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 8,
    flexGrow: 1,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#4e8cff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxDone: {
    backgroundColor: '#4e8cff',
    borderColor: '#4e8cff',
  },
  todoText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
  todoTextDone: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  deleteButton: {
    paddingLeft: 8,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  emptyText: {
    marginTop: 10,
    color: '#bbb',
    fontSize: 14,
    textAlign: 'center',
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    gap: 10,
  },
  addInput: {
    flex: 1,
    height: 46,
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14,
  },
  addButton: {
    width: 46,
    height: 46,
    backgroundColor: '#4e8cff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#b0c9ff',
  },
});
