export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const REMOVE_TODO = 'REMOVE_TODO';
export const RESET_TODOS = 'RESET_TODOS';
export const EDIT_TODO = 'EDIT_TODO';

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  index,
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  payload: index,
});

export const resetTodos = () => ({
  type: RESET_TODOS,
});

export const editTodo = (index, text) => ({
  type: EDIT_TODO,
  payload: { index, text },
});
