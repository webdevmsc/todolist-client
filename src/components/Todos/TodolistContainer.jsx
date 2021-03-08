import Todolist from "./Todolist";
import {connect} from "react-redux";
import {addTodo, deleteTodo, editTodo, getTodos, toggleDone, toggleDoneCheckBox} from "../../redux/todo-reducer";
import React from 'react';


const TodolistContainer = (props) => {
    return <Todolist {...props} />
}
let mapStateToProps = (state) => {
    return {
        todos: state.todo.todos
    }
}

export default connect(mapStateToProps, { getTodos, toggleDone, deleteTodo, addTodo, editTodo, toggleDoneCheckBox })(TodolistContainer);