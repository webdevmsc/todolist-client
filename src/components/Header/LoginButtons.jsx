import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const LoginButtons = ({removeRegisterErrors, removeRegisterSuccess, getTodos, login, register, loginErrors, registerErrors, successMessage, handleSucceeded, isSubmitting, removeLoginErrors}) => {
    return (
        <>
            <LoginForm handleSucceeded={handleSucceeded} login={login} loginErrors={loginErrors} getTodos={getTodos} isSubmitting={isSubmitting} removeLoginErrors={removeLoginErrors}/>
            <RegisterForm removeRegisterErrors={removeRegisterErrors} removeRegisterSuccess={removeRegisterSuccess} handleSucceeded={handleSucceeded} register={register} registerErrors={registerErrors} successMessage={successMessage} />
        </>
    )
}

export default LoginButtons;