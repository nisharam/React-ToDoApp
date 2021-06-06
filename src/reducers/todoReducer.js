import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    GET_TODO,
    GET_TODO_LIST,
    GET_TODO_LIST_LOADING,
    UPDATE_TODO,
    UPDATE_TODO_STATUS,
    GET_TODO_LIST_LOAD_ERROR
} from '../constants/todoConstants';

const initialState = {
    // todoList: [{
    //     id: 1,
    //     paylod: 'create',
    //     complete: false
    // }],
    todos: [{
        id: 10,
        todo: 'create the react app',
        editing: false,
        completed: true
    }],
    todoList: '',
    istodoListLoading: false,
    todoListLoadError: ''

}

const todoReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_TODO:
                {
                    return {
                        ...state,
                        todos: [...state.todos, action.payload]
                    }
                };
            case GET_TODO:
                {
                    return {
                        ...state,
                        todos: action.todoList
                    }
                }
            case DELETE_TODO:
                {
                    return {
                        ...state,
                        todos: state.todos.filter(todo => todo.id !== action.payload)
                    }
                }
            case EDIT_TODO:
                {

                    return {
                        ...state,
                        todos: state.todos.map(todo => todo.id === action.payload ? {...todo, editing: !todo.editing } : todo)
                    }

                }
            case UPDATE_TODO:
                {
                    return {
                        ...state,
                        todos: state.todos.map(todo => {
                            if (todo.id === action.payload.id) {
                                return {
                                    ...todo,
                                    todo: action.payload.todo,
                                    editing: !todo.editing,
                                    completed: action.payload.completed
                                }
                            } else return todo;
                        })
                    }
                }

            case UPDATE_TODO_STATUS:
                {
                    return {
                        ...state,
                        todos: state.todos.map(todo => {
                            if (todo.id === action.payload.id) {
                                return {
                                    ...todo,
                                    completed: action.payload.completed
                                }
                            } else return todo
                        })
                    }
                }

            case GET_TODO_LIST_LOADING:
                {
                    return {
                        ...state,
                        istodoListLoading: true

                    }
                }

            case GET_TODO_LIST:
                {
                    return {
                        ...state,
                        todoList: action.response.data,
                        todoListLoadError: null,
                        istodoListLoading: false
                    }
                }
            case GET_TODO_LIST_LOAD_ERROR:
                {
                    return {
                        ...state,
                        todoListLoadError: 'Error loading data',
                        istodoListLoading: false

                    }
                }

            default:
                return state;
        }

    }
    // export const { saveToDo } = todoReducer.actions
export default todoReducer;