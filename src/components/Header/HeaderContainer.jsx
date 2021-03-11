import {
    login,
    logout,
    register,
    removeLoginErrors,
    removeRegisterErrors,
    removeRegisterSuccess
} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import Header from "./Header";
import React from 'react';
import {getTodos} from "../../redux/todo-reducer";
import {makeStyles} from "@material-ui/core/styles";




const HeaderContainer = React.memo((props) => {
    return (
        <Header { ...props } />
    )
});

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userName: state.auth.login,
        loginErrors: state.auth.loginErrors,
        registerErrors: state.auth.registerErrors,
        successMessage: state.auth.successMessage,
        isSubmitting: state.auth.isSubmitting
    }
}

export default connect(mapStateToProps, { login, logout, register, getTodos, removeLoginErrors, removeRegisterErrors, removeRegisterSuccess } )(HeaderContainer);