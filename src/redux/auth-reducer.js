import {authAPI} from "../api/api";
import {getTodos, setLoading, setTodos} from "./todo-reducer";


const SET_USER_DATA = '/auth/SET_USER_DATA';
const SET_LOGIN_ERRORS = '/auth/SET_LOGIN_ERRORS';
const SET_REGISTER_ERRORS = '/auth/SET_REGISTER_ERRORS';
const SET_REGISTER_SUCCEEDED = '/auth/SET_REGISTER_SUCCEEDED';
const SET_SUBMITTING = '/auth/SET_SUBMITTING';

// initial state
let initialState = {
    login: null,
    isAuth: false,
    loginErrors: null,
    registerErrors: null,
    isSubmitting: false
}

// authReducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.payload };
        case SET_REGISTER_ERRORS:
            return { ...state, ...action.payload };
        case SET_LOGIN_ERRORS:
            return { ...state, ...action.payload };
        case SET_REGISTER_SUCCEEDED:
            return { ...state, ...action.payload };
        case SET_SUBMITTING: {
            return { ...state, ...action.payload };
        }
        default:
            return state;
    }
}


// action creator - adding errors
export const setLoginErrors = (loginErrors) => ({type: SET_LOGIN_ERRORS, payload: { loginErrors }})
export const setRegisterErrors = (registerErrors) => ({type: SET_REGISTER_ERRORS, payload: { registerErrors }})

// action creator - setting user data
export const setAuthUserData = (login, isAuth) => ({type: SET_USER_DATA, payload: {login, isAuth}});

// action creator - setting register success
export const setRegisterSuccess = (message) => ({type: SET_REGISTER_SUCCEEDED, payload: { successMessage: message }})

// action creator - submitting
export const setSubmitting = (isSubmitting) => ({type: SET_SUBMITTING, payload: { isSubmitting }})

// thunk - getting user data
export const getAuthUserData = () => async (dispatch) => {
    dispatch(setLoading(true));
    let response = await authAPI.me();
    if (response.data.status === 0 && response.data.data != null) {
        let login = response.data.data;
        dispatch(setAuthUserData(login, true));
        dispatch(getTodos());
    }
    else {
        dispatch(setAuthUserData(null, false));
    }
    dispatch(setLoading(false));
}

// thunk - login
export const login = (email, password) => async (dispatch) => {
    dispatch(setSubmitting(true));
    let response = await authAPI.login(email, password);
    if (response.data.status === 0) {
        localStorage.setItem('token', response.data.data);
        dispatch(getAuthUserData());
    }
    else {
        let message = response.data.Message;
        dispatch(setLoginErrors(message));
    }
    dispatch(setSubmitting(false));
}

export const removeLoginErrors = () => (dispatch) => {
    dispatch(setLoginErrors(null));
}

export const removeRegisterErrors = () => (dispatch) => {
    dispatch(setRegisterErrors(null));
}

export const removeRegisterSuccess = () => (dispatch) => {
    dispatch(setRegisterSuccess(null));
}

// thunk - logout
export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(setAuthUserData(null, false, null, false))
    dispatch(setTodos(null));
}

// thunk - register
export const register = (email, password, passwordConfirm) => async (dispatch) => {
    dispatch(setSubmitting(true));
    let response = await authAPI.register(email, password, passwordConfirm);
    dispatch(setSubmitting(false));
    if (response.data.Status === 1) {
        dispatch(setRegisterErrors(response.data.Errors.map(x => x.Description)));
    }
    if (response.data.status === 0) {
        dispatch(setRegisterSuccess(response.data.message));
    }
    else {
        console.log('Unhandled exception!')
    }
}

export default authReducer;