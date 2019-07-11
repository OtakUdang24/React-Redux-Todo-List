export const addTodo = (todo) => {
  return {
      type: 'ADD_TODO',
      payload: todo
  }
}

export const deleteTodo = (todoId) => {
  return {
      type: 'DELETE_TODO',
      id: todoId
  }
}

export const setTodoId = (todoId, newData) => {
  return {
    type: 'SET_TODOID',
    id: todoId,
    newData
  }
}

// export const deleteTodo = (todoId) => {
//   return {
//       type: 'DELETE_TODO',
//       id: todoId
//   }
// }
