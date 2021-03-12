import './App.css';
import {MuiThemeProvider, createMuiTheme, makeStyles,} from '@material-ui/core/styles';
import { deepPurple, red, green } from "@material-ui/core/colors";
import store from "./redux/redux-store";
import {connect, Provider} from "react-redux";
import React from 'react';
import { useEffect } from "react";
import {handleError, initializeApp} from "./redux/app-reducer";
import {Backdrop, CircularProgress} from "@material-ui/core";
import HeaderContainer from "./components/Header/HeaderContainer";
import TodolistContainer from "./components/Todos/TodolistContainer";
import Todolist from "./components/Todos/Todolist";


const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: red,
        success: green
    }
});

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 5,
        color: '#fff',
    }
}))

// function App({initializeApp, initialized}) {
//     let styles = useStyles();
//     useEffect(() => {
//         initializeApp();
//     })
//     if (!initialized) {
//         return (
//             <Backdrop className={styles.backdrop} open={!initialized}>
//                 <CircularProgress color="inherit" />
//             </Backdrop>
//         )
//     }
//     return (
//     <>
//             <MuiThemeProvider theme={theme}>
//                 <HeaderContainer />
//                 <TodolistContainer/>
//             </MuiThemeProvider>
//     </>
//   );
// }


const App = React.memo(({initializeApp, initialized}) => {
    let styles = useStyles();
    useEffect(() => {
        initializeApp();
    })
    if (!initialized) {
        return (
            <Backdrop className={styles.backdrop} open={!initialized}>
                <CircularProgress color="inherit" />
            </Backdrop>
        )
    }
    return (
        <>
            <MuiThemeProvider theme={theme}>
                <HeaderContainer />
                <TodolistContainer/>
            </MuiThemeProvider>
        </>
    )
});






const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        globalError: state.app.globalError
    }
}

let AppContainer = connect(mapStateToProps, {initializeApp, handleError})(App);

let Application = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    )
}

export default Application;

