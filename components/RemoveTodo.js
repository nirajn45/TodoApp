import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const RemoveTodo = ({ todos }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TodoItem index={index} todo={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(RemoveTodo);
