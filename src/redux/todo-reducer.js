import {todoAPI} from "../api/api";


const SET_TODOS = '/todo/SET_TODOS';
const SET_EDIT_TODO = '/todo/SET_EDIT_TODO';
const TOGGLE_DONE = '/todo/TOGGLE_DONE';
const DELETE_TODO = '/todo/DELETE_TODO';
const ADD_TODO = '/todo/ADD_TODO';
const SET_LOADING = '/todo/SET_LOADING';

// initial state
let initialState = {
    todos: null,
    isLoading: false
}

// todoReducer
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return { ...state, ...action.payload };
        case TOGGLE_DONE:
            return { ...state, todos: state.todos.map(todo => {
                if (todo.id !== action.todo.todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    status: !todo.status,
                    updated: action.todo.updated
                };
            })
        };
        case ADD_TODO:
            return { ...state, todos: [action.todo, ...state.todos] }
        case DELETE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.todoId) }
        case SET_EDIT_TODO:
            return { ...state, todos: state.todos.map(s => s.id === action.todo.id ?
                Object.assign({}, s, action.todo) : s )};
        case SET_LOADING: {
            return { ...state, ...action.payload }
        }
        default:
            return state;
    }
}

export const setTodos = (todos) => ({type: SET_TODOS, payload: { todos: todos }});

export const setToggleDone = (todoId, updated) => ({type: TOGGLE_DONE, todo: { todoId, updated }});

export const setDeleteTodo = (todoId) => ({type: DELETE_TODO, todoId});

export const addNewTodo = (todo) => ({type: ADD_TODO, todo});

export const setEditTodo = (todo) => ({type: SET_EDIT_TODO, todo});

export const setLoading = (isLoading) => ({type: SET_LOADING, payload: { isLoading }});

// thunk - get todos
export const getTodos = () => async (dispatch) => {
    let response = await todoAPI.getAll();
    if (response.data.status === 0) {
        let todos = response.data.data;
        dispatch(setTodos(todos));
    }
}

export const toggleDone = (todoId) => async (dispatch) => {
    dispatch(setLoading(true));
    let response = await todoAPI.toggleDone(todoId);
    dispatch(setLoading(false));
    if (response.data.status === 0) {
        dispatch(setToggleDone(todoId, response.data.data));
    }
}

export const toggleDoneCheckBox = (todoId) => async (dispatch) => {
    let response = await todoAPI.toggleDone(todoId);
    if (response.data.status === 0) {
        dispatch(setToggleDone(todoId, response.data.data));
    }
}

export const deleteTodo = (todoId) => async (dispatch) => {
    let response = await todoAPI.deleteTodo(todoId);
    if (response.data.status === 0) {
        dispatch(setDeleteTodo(todoId));
    }
}

export const addTodo = (todo) => async (dispatch) => {
    let response = await todoAPI.addTodo(todo);
    if (response.data.status === 0) {
        dispatch(addNewTodo({...todo, id: response.data.data.id, added: response.data.data.added, updated: response.data.data.added}));
    }
}



export const editTodo = (todo) => async (dispatch) => {
    let response = await todoAPI.editTodo(todo);
    if (response.data.status === 0) {
        dispatch(setEditTodo(response.data.data));
    }
}

export default todoReducer;