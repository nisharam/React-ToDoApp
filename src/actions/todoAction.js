import { ADD_TODO, GET_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO, UPDATE_TODO_STATUS, GET_TODO_LIST } from '../constants/todoConstants';
let todoId = 0;
export const addToDo = payload =>
    ({

        type: ADD_TODO,
        payload

    });

export function getTodo(todoList) {
    return { type: GET_TODO, todoList }
}

export const deleteTodo = (todoId) =>
    ({
        type: DELETE_TODO,
        payload: todoId
    })

export const editTodo = (editTodoData) => ({
    type: EDIT_TODO,
    payload: editTodoData
})

export const updateTodoList = (updateTodo) => ({
    type: UPDATE_TODO,
    payload: updateTodo
})

export const updateTodoStatus = (status) => ({
    type: UPDATE_TODO_STATUS,
    payload: status

})

export const getTodolist = (response) => ({
    type: GET_TODO_LIST,
    payload: response
})