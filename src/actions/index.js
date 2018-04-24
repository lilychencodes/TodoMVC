export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export const updateTodo = (newText, index) => {
  return {
    type: 'UPDATE_TODO',
    newText,
    index
  }
}

export const deleteTodo = (index) => {
  return {
    type: 'DELETE_TODO',
    index
  }
}

export const toggleFinishTodo = (index) => {
  return {
    type: 'TOGGLE_FINISH_TODO',
    index
  }
}
