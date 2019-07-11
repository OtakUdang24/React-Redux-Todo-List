import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import todoApp from './reducers/todoApp'

const middleware = applyMiddleware(logger)

const store = createStore(todoApp, middleware)

export {
    store
}




// import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'

// const initialState = {
//     todos: []
// }


// export default reducer = (state=initialState, action) => {
//     if (action.type === 'ADD') {
//         state = { ...state, todos: state.todos.push(action.payload) }
//     }
//     return state
// }

// const addTodo = () => {
//     return { type: 'ADD' }
// }

// const myMiddleware = (state) => (action) => (next) => {
//     console.log("ini adalah logger saya")
//     next(action)
// }
// const middleware = applyMiddleware(logger)

// const store = createStore(reducer, initialState, middleware)

// export {
//     store,
//     addTodo
// }