import axios from "axios";

const instance = axios.create({
    baseURL: 'https://todolist-msc.azurewebsites.net/',
    headers: {
        'Authorization': `Bearer ${localStorage.token}`
    }
});
const checkTokenInterceptor = (config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};
instance.interceptors.request.use(checkTokenInterceptor);

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password) {
        return instance.post(`https://todolist-msc.azurewebsites.net/auth/login`, { email, password });
    },
    register(email, password, passwordConfirm) {
        return instance.post(`https://todolist-msc.azurewebsites.net/auth/register`, { email, password, passwordConfirm } );
    }
}


export const todoAPI = {
    getAll() {
        return instance.get(`todo`);
    },
    toggleDone(todoId) {
        return instance.patch(`todo?Id=${todoId}`)
    },
    deleteTodo(todoId) {
        return instance.delete(`todo?Id=${todoId}`)
    },
    addTodo(todo) {
        return instance.post(`todo`, todo);
    },
    editTodo(todo) {
        return instance.put(`todo`, todo);
    }
}