const initialState = {
  todoList: [
    {text: 'Buy Cheese', id: 0.123, isFinished: false},
    {text: 'Finish code', id: 0.435, isFinished: true}
  ]
};


export default function reducer(state = initialState, action = {}) {
  const { index, text, newText } = action
  const currentTodo = state.todoList[index]

  switch (action.type) {
    case 'ADD_TODO':
      const addedList = [...state.todoList, {text, id: Math.random(), isFinished: false}]
      return Object.assign({}, state, {todoList: addedList})
    case 'DELETE_TODO':
      const removedList = [
        ...state.todoList.slice(0, index),
        ...state.todoList.slice(index + 1)
      ]
      return Object.assign({}, state, {todoList: removedList})
    case 'UPDATE_TODO':
      const updatedList = [
        ...state.todoList.slice(0, index),
        {text: newText, id: currentTodo.id, isFinished: currentTodo.isFinished},
        ...state.todoList.slice(index + 1)
      ]
      return Object.assign({}, state, {todoList: updatedList})
    case 'TOGGLE_FINISH_TODO':
      const newList = [
        ...state.todoList.slice(0, index),
        {text: currentTodo.text, id: currentTodo.id, isFinished: !currentTodo.isFinished},
        ...state.todoList.slice(index + 1)
      ]
    return Object.assign({}, state, {todoList: newList})
    default:
      return state;
  }
}
