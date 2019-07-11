import { statements } from "@babel/template";

// const INITIAL_STATE = { 
//     todo: [] 
// }

// const initialState = {
//     index_todo: '',
//     todo: []
// }
const initialState = {
    todo: [],
    todoId: '',
    getTodoId : {}
}

export default todoApp = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log('ADD_TODO')
            // state = { ...state, todo:  }
            let newTodo = {
                id: state.todo.length+1,
                completed: false,
                text: action.payload,
            }
            return {...state, todo: [
                newTodo,
                ...state.todo
            ]}
            // return {
            //     ...state,
            //     todo: [
            //         {
            //             id: state.todo.length+1,
            //             completed: false,
            //             text: action.payload,
            //         },
            //         ...state.todo
            //     ]
            // };
            // state = { ...state, todo: [...state.todo, action.payload] }
            break
        case 'DELETE_TODO':
            console.log('DELETE_TODO')
            
            return {
                ...state,
                todo: [
                    ...state.todo.filter(todo => {
                        return todo.id !== action.id
                    })
                ]
            }
            // copyList = state.todo.slice(action.id, i)
            // return {
            //     ...state,
            //     todo: [
            //         state.todo.filter(todo => {
            //             return todo !== action.id
            //         })
            //     ]
            // };
            // return state.todo.filter(todo =>
            //     todo !== action.id
            // );
            // return {todo: state.todo.filter(todo => todo !== action.id)}
            // state.todo.splice(action.id, 1);
            // return state.todo.filter(todo =>
            //     todo.id !== action.id
            // );
            // return state.filter(todo =>
            //     todo.id !== action.id
            // );
            // state = { ...state, todo:  }
            // return {todos: state.todo.filter((todo, id) => id !== action.id)}
            // state = state.todo.filter((todo, id) =>
            //     id !== action.id
            // )
            // return { hostnames: state.hostnames.filter(hostname =>
            //     hostname.id !== action.hostnameId
            //  )}
            // state.filter((todo, i) => i !== action.id);
            // state.filter((data, i) => i !== action.id);
            // state.filter((data, i) => i !== action.id);
            // state = { ...state, todo: [...state.todo, action.payload] }
            // break
        case 'SET_TODOID':
            console.log('UPDATE_TASK')
            const data = []
            for (let index = 0; index < state.todo.length; index++) {
                // const element = array[index];
                if(state.todo[index].id == action.id){
                    data.push({
                        id: state.todo[index].id,
                        completed: state.todo[index].completed,
                        text: action.newData,
                    })
                }else {
                    data.push({
                        id: state.todo[index].id,
                        completed: state.todo[index].completed,
                        text: state.todo[index].text,
                    })
                }     
            }
            return {...state, todo: data}
            // state.todo.forEach((item, index) => {
            //     if(item.id == action.id){
            //         data.push({
            //                 id: item.id,
            //                 completed: false,
            //                 text: {
            //                     todo: item.todo
            //                 }
            //             })
            //         // data = {
            //         //     id: item.id,
            //         //     completed: false,
            //         //     text: {
            //         //         todo: item.todo
            //         //     }
            //         // }
            //     }
            // }).then()
            // state = {...state, todoId: action.id}
            // return {
            //     ...state,
            //     todo: {
            //         ...state.todo[action.id]
            //     } 
            // }
            // state = { ...state, index_todo: action.id  }
            // state = { ...state, todo: [...state.todo, action.payload] }
            break
        case 'UPDATE_TODO':
            console.log('UPDATE_TODO')
            // state = { ...state, index_todo: action.id  }
            // state = { ...state, todo: [...state.todo, action.payload] }
            break
        case 'GET_TODOID':
            console.log('UPDATE_TODO')
            return {

            }
            // state = { ...state, index_todo: action.id  }
            // state = { ...state, todo: [...state.todo, action.payload] }
            break
    }
    return state
}