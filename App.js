import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTodo from './components/AddTodo';
import RemoveTodo from './components/RemoveTodo';
import ResetButton from './components/ResetButton';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import { SafeAreaView, StyleSheet } from 'react-native';

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <AddTodo />
      <RemoveTodo />
      <Filter />
      <TodoList />
      <ResetButton />
    </SafeAreaView>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    
    
  },
});

export default App;
