import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { removeTodo, editTodo, toggleTodo } from '../redux/actions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TodoItem = ({ index, todo, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  return (
    <View style={[styles.todoItem, todo.completed && styles.completed]}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          onSubmitEditing={() => {
            dispatch(editTodo(index, text));
            setIsEditing(false);
          }}
        />
      ) : (
        <TouchableOpacity onPress={() => dispatch(toggleTodo(index))}>
          <Text style={styles.text}>{todo.text}</Text>
        </TouchableOpacity>
      )}
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => setIsEditing(true)}>
          <FontAwesome name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(removeTodo(index))}>
          <FontAwesome name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  text: {
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
});

export default connect()(TodoItem);
