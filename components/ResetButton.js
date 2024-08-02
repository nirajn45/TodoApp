import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { resetTodos } from '../redux/actions';

const ResetButton = ({ dispatch }) => {
  return (
    <View style={styles.container}>
      <Button title="Reset Todos" onPress={() => dispatch(resetTodos())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default connect()(ResetButton);
