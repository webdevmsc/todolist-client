import {useEffect, useState} from "react";
import {useFormik} from "formik";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@material-ui/core";
import * as yup from "yup";
import {makeStyles} from "@material-ui/core/styles";


//styles
const useStyles = makeStyles(() => ({
    registerForm: {
        display: 'flex',
        flexDirection: 'column'
    },
    success: {
        color: 'green',
        marginTop: '10px'
    },
    error: {
        color: 'red',
        marginTop: '10px'
    }

}))

//validation
const registerValidationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(6, 'Password should be of minimum 6 characters length')
        .required('Password is required'),
    passwordConfirm: yup
        .string('Enter password confirmation')
        .min(6, 'Password should be of minimum 6 characters length')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Password is required'),
});
//element
const RegisterForm = ({register, registerErrors, successMessage, removeRegisterErrors, removeRegisterSuccess}) => {
    //
    useEffect(() => {
        if (registerErrors != null || successMessage) {
            setRegisterState(true);
        }
        if (successMessage) {
            setRegisterState(true);
            setTimeout(() => handleCloseRegister(), 5000);
        }
    }, [registerErrors, successMessage])

    //Register
    const [registerState, setRegisterState] = useState(false);
    const handleOpenRegister = () => setRegisterState(true);
    const handleCloseRegister = () => {
        setRegisterState(false);
        if (registerErrors != null || successMessage) {
            setTimeout(() => {
                removeRegisterErrors()
                removeRegisterSuccess();
            }, 100);
        }
    }

    //form
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        validationSchema: registerValidationSchema,
        onSubmit: async (values) => {
            handleCloseRegister();
            setDisabled(true);
            await register(values.email, values.password, values.passwordConfirm);
            setDisabled(false);
            formik.resetForm();
        },
    });

    // button state
    let [disabled, setDisabled] = useState(false);

    //styles
    let styles = useStyles();
    return (
        <Box>
            <Button variant="contained" color="secondary" onClick={handleOpenRegister} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); }}}>Sign up</Button>
            <Dialog className={styles.registerForm} open={registerState} onClose={handleCloseRegister} maxWidth={'xs'}>
                <DialogTitle>Sign Up</DialogTitle>
                <form onSubmit={ formik.handleSubmit } onKeyDown={ (e) => { if (e.key === 'Enter') e.preventDefault(); }}  >
                    <DialogContent>
                        <DialogContentText>Sign up to work with todolist</DialogContentText>
                        <TextField fullWidth id="email" name="email" label="Email" value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && Boolean(formik.errors.email)} helperText={formik.touched.email && formik.errors.email}/>
                        <TextField fullWidth id="password" name="password" label="Password" type="password" value={formik.values.password} onChange={formik.handleChange} error={formik.touched.password && Boolean(formik.errors.password)} helperText={formik.touched.password && formik.errors.password}/>
                        <TextField fullWidth id="check" name="passwordConfirm" label="Password Confirmation" type="password" value={formik.values.passwordConfirm} onChange={formik.handleChange} error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)} helperText={formik.touched.passwordConfirm && formik.errors.passwordConfirm}/>
                        { registerErrors && registerErrors.map(x => <DialogContentText key={x} className={styles.error}>{x}<br/></DialogContentText>) }
                        { successMessage && <DialogContentText className={styles.success}>{successMessage}</DialogContentText>}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseRegister} color={"primary"}>Cancel</Button>
                        <Button type={'submit'} disabled={disabled} color={"primary"}>Register</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box>
    )
}


export default RegisterForm;