import { createStore } from 'redux'

const initialState = {
    number: 0,
    loading: false
}

const reducer = (state, action) => {
    if (action.type === 'INC') {
        state = { ...state, number: state.number + action.payload }
    } else if (action.type === 'DEC') {
        state = { ...state, number: state.number - action.payload }
    }
    return state
}

const store = createStore(reducer, initialState)

store.subscribe(() => {
    console.log('Store changed ')
    console.log(store.getState())
})

store.dispatch({ type: 'INC', payload: 10 })
store.dispatch({ type: 'DEC', payload: 7 })
store.dispatch({ type: 'INC', payload: 8 })
