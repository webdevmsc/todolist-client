import {login, logout, register} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import Header from "./Header";
import React from 'react';
import {getTodos} from "../../redux/todo-reducer";

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
        successMessage: state.auth.successMessage
    }
}

export default connect(mapStateToProps, { login, logout, register, getTodos } )(HeaderContainer);