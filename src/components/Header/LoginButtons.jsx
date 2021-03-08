import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginButtons = ({getTodos, login, register, loginErrors, registerErrors, successMessage, handleSucceeded}) => {
    return (
        <>
            <LoginForm handleSucceeded={handleSucceeded} login={login} loginErrors={loginErrors} getTodos={getTodos}/>
            <RegisterForm handleSucceeded={handleSucceeded} register={register} registerErrors={registerErrors} successMessage={successMessage} />
        </>
    )
}

export default LoginButtons;