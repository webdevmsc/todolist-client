import Todolist from "./Todolist";
import {connect} from "react-redux";
import {addTodo, deleteTodo, editTodo, getTodos, toggleDone} from "../../redux/todo-reducer";
import React from 'react';
import {Backdrop, CircularProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 5,
        color: '#fff',
    }
}))



const TodolistContainer = React.memo(({isSubmitting, ...props}) => {
    let styles = useStyles();
    if (isSubmitting) {
        return (
            <Backdrop className={styles.backdrop} open={isSubmitting}>
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }
    return <Todolist {...props} />
});

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        todos: state.todo.todos,
        isSubmitting: state.auth.isSubmitting,
        isLoading: state.todo.isLoading
    }
}

export default connect(mapStateToProps, { getTodos, toggleDone, deleteTodo, addTodo, editTodo })(TodolistContainer);