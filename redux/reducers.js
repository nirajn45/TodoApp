import { combineReducers } from 'redux';
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  REMOVE_TODO,
  RESET_TODOS,
  EDIT_TODO,
} from './actions';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, completed: false }];
    case TOGGLE_TODO:
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    case REMOVE_TODO:
      return state.filter((_, index) => index !== action.payload);
    case RESET_TODOS:
      return [];
    case EDIT_TODO:
      return state.map((todo, index) =>
        index === action.payload.index ? { ...todo, text: action.payload.text } : todo
      );
    default:
      return state;
  }
};

const visibilityFilterReducer = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer,
});

export default rootReducer;
