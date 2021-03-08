import {useEffect, useState} from "react";
import {useFormik} from "formik";
import {Box, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import {createMuiTheme, makeStyles, MuiThemeProvider} from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import {green, red} from "@material-ui/core/colors";
import * as yup from "yup";
let nounsArray = ["Idea", "Infancy", "Infatuation", "Inflation", "Insanity", "Intelligence", "Irritation", "Joy", "Justice", "Kindness", "Laughter", "Law", "Liberty", "Lie", "Life", "Loneliness", "Loss", "Love", "Luck", "Luxury", "Marriage", "Mercy", "Movement", "Nap", "Pain", "Patience", "Peace", "Peculiarity", "Perseverance", "Philosophy", "Pleasure", "Poverty", "Power", "Pride", "Principle", "Reality", "Relaxation", "Relief", "Religion", "Restoration", "Rhythm", "Riches", "Right", "Rumour", "Sacrifice", "Sanity", "Satisfaction", "Self-control", "Sensitivity", "Service", "Shock", "Silliness", "Skill", "Slavery", "Sleep", "Solitude", "Sorrow", "Speed", "Strength", "Strictness", "Stupidity", "Success", "Surprise", "Talent", "Thought", "Thrill", "Timing", "Tiredness", "Tolerance", "Trend", "Trust", "Truth"];

//button themes
const addButton = createMuiTheme({
    palette: {
        primary: green,
        secondary: red,
    }
});
//styles
const useStyles = makeStyles(theme => ({
    dialog: {
        display: 'flex',
        flexDirection: 'column'
    },
    secondaryIcon: {
        marginRight: theme.spacing(0.5),
        transition: 'all 0.3s ease-out',
        '&:hover': {
            cursor: 'pointer',
            color: 'purple'
        }
    },
    tags: {
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'space-around'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    addButtons: {
        display: 'flex',
        justifyContent: 'center',
        margin: '15px auto',
        minWidth: '400px'
    },
    addButton: {
        flexGrow: 1
    },
    done: {
        color: "white"
    }
}));
//validation
const todoValidationSchema = yup.object({
    title: yup
        .string(`Enter tasks' title`)
        .required('Title is required'),
    content: yup
        .string(`Enter tasks' content`)
        .min(3, 'Description should be of minimum 3 characters length')
        .required('Task description is required')
})
//element
const EditTodo = ({editTodo, editingTodo}) => {
    useEffect(() => {
        setStatus(editingTodo.status)
    }, [editingTodo]);


    //styles
    const classes = useStyles();

    //dialog state
    let [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true); }
    const handleClose = () => { setOpen(false); }

    //button state
    let [disabled, setDisabled] = useState(false);

    //tags
    const [firstTag, setFirstTag] = useState(editingTodo.tags[0]);
    const [secondTag, setSecondTag] = useState(editingTodo.tags[1]);
    const [thirdTag, setThirdTag] = useState(editingTodo.tags[2]);
    const handleFirstTagChange = (event) => {
        setFirstTag(event.target.value);
    };
    const handleSecondTagChange = (event) => {
        setSecondTag(event.target.value);
    };
    const handleThirdTagChange = (event) => {
        setThirdTag(event.target.value);
    };

    //status buttons
    const handleCompleted = () => setStatus(true);
    const handleInProgress = () => setStatus(false);

    //status hook
    let [status, setStatus] = useState(editingTodo.status == true);

    //formik
    const formik = useFormik({
        initialValues: {
            title: editingTodo.title,
            content: editingTodo.content,
            status: editingTodo.status == true,
            tags: [firstTag, secondTag, thirdTag],
            id: editingTodo.id,
            added: editingTodo.added
        },
        validationSchema: todoValidationSchema,
        onSubmit: (values) => {
            setDisabled(true);
            editTodo({...values, tags: [firstTag, secondTag, thirdTag], status});
            setDisabled(false);
            formik.resetForm();
            handleClose();
        }
    });

    return (
        <>
            <EditIcon className={classes.secondaryIcon} onClick={handleOpen}/>
            <Dialog open={open} onClose={handleClose} maxWidth={'sm'}>
                <DialogTitle>Edit Task</DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                    <DialogContent className={classes.dialog}>
                        <DialogContentText>Edit todo</DialogContentText>
                        <TextField fullWidth id="title" name="title" label="Title" value={formik.values.title}
                                   onChange={formik.handleChange}
                                   error={formik.touched.title && Boolean(formik.errors.title)}
                                   helperText={formik.touched.title && formik.errors.title}/>
                        <TextField fullWidth id="content" name="content" label="Content" value={formik.values.content}
                                   onChange={formik.handleChange}
                                   error={formik.touched.content && Boolean(formik.errors.content)}
                                   helperText={formik.touched.content && formik.errors.content}/>
                        <Box className={classes.tags}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel>Tag</InputLabel>
                                <Select value={firstTag} onChange={handleFirstTagChange} label="Tag">
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {nounsArray.map(x => <MenuItem value={x} key={x}>{x}</MenuItem>)}
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel>Tag</InputLabel>
                                <Select value={secondTag} onChange={handleSecondTagChange} label="Tag">
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {nounsArray.map(x => <MenuItem value={x} key={x}>{x}</MenuItem>)}
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel>Tag</InputLabel>
                                <Select value={thirdTag} onChange={handleThirdTagChange} label="Tag">
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {nounsArray.map(x => <MenuItem value={x} key={x}>{x}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </Box>
                        <MuiThemeProvider theme={addButton}>
                            <ButtonGroup className={classes.addButtons} size="large" color="primary">
                                <Button className={`${classes.addButton} ${status && classes.done}`} color={'primary'}
                                        variant={status ? 'contained' : 'outlined'}
                                        onClick={handleCompleted}>Completed</Button>
                                <Button className={classes.addButton} color={'secondary'}
                                        variant={status ? 'outlined' : 'contained'} onClick={handleInProgress}>In
                                    progress</Button>
                            </ButtonGroup>
                        </MuiThemeProvider>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color={"primary"}>Cancel</Button>
                        <Button type={'submit'} disabled={disabled} color={"primary"}>Edit</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default EditTodo;