import {useEffect, useState} from "react";
import {useFormik} from "formik";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import * as yup from "yup";

//styles
const useStyles = makeStyles(() => ({
    loginForm: {
        display: 'flex',
        flexDirection: 'column'
    }
}))


//validation
const loginValidationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .max(30, 'Maximum length is 30 chars')
        .required('Password is required'),
});

const LoginForm = ({login, loginErrors}) => {
    //styles
    const styles = useStyles();

    //dialog state
    const [loginState, setLoginState] = useState(false);
    const handleOpenLogin = () => setLoginState(true);
    const handleCloseLogin = () => {
        setLoginState(false);
    };

    //form
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            setDisabled(true);
            login(values.email, values.password);
            setDisabled(false);
            formik.resetForm();
        }
    });

    //button state
    let [disabled, setDisabled] = useState(false);

    return (
        <Box mr={3}>
            <Button variant="outlined" color="inherit" onClick={ handleOpenLogin }>Login</Button>
            <Dialog className={styles.loginForm} open={loginState} onClose={handleCloseLogin} maxWidth={'xs'}>
                <DialogTitle>Login</DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                    <DialogContent >
                        <DialogContentText>Log in to see videos</DialogContentText>
                        <TextField fullWidth id="email" name="email" label="Email" value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email}/>
                        <TextField fullWidth id="password" name="password" label="Password" type="password" value={formik.values.password} onChange={formik.handleChange} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password}/>
                        { loginErrors && <DialogContentText>{loginErrors}</DialogContentText> }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseLogin} color={"primary"}>Cancel</Button>
                        <Button type={'submit'} disabled={disabled} color={"primary"}>Login</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box>
    )
}


export default LoginForm;