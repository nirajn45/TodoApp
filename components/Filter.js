import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../redux/actions';

const Filter = ({ currentFilter, dispatch }) => (
  <View style={styles.container}>
    <Button
      title="Show All"
      onPress={() => dispatch(setVisibilityFilter('SHOW_ALL'))}
      disabled={currentFilter === 'SHOW_ALL'}
    />
    <Button
      title="Show Completed"
      onPress={() => dispatch(setVisibilityFilter('SHOW_COMPLETED'))}
      disabled={currentFilter === 'SHOW_COMPLETED'}
    />
    <Button
      title="Show Active"
      onPress={() => dispatch(setVisibilityFilter('SHOW_ACTIVE'))}
      disabled={currentFilter === 'SHOW_ACTIVE'}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

const mapStateToProps = (state) => ({
  currentFilter: state.visibilityFilter,
});

export default connect(mapStateToProps)(Filter);
