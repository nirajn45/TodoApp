import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => (
  <View style={styles.container}>
    {todos.map((todo, index) => (
      <TodoItem key={index} index={index} todo={todo} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
