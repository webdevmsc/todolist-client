import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HeaderContainer from "./components/Header/HeaderContainer";
import { deepPurple, red, green } from "@material-ui/core/colors";
import store from "./redux/redux-store";
import {connect, Provider} from "react-redux";
import { useEffect } from "react";
import {handleError, initializeApp} from "./redux/app-reducer";
import {CircularProgress} from "@material-ui/core";
import TodolistContainer from "./components/Todos/TodolistContainer";

const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: red,
        success: green
    }
});

function App({initializeApp, initialized}) {
    useEffect(() => {
        initializeApp();
    })
    if (!initialized) {
        return <CircularProgress/>
    }
    return (
    <>
            <MuiThemeProvider theme={theme}>
                <HeaderContainer />
                <TodolistContainer/>
            </MuiThemeProvider>
    </>
  );
}

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

