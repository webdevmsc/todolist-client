import {useState} from "react";
import {useFormik} from "formik";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {makeStyles} from "@material-ui/core/styles";
import * as yup from "yup";
let nounsArray = ["Idea", "Infancy", "Infatuation", "Inflation", "Insanity", "Intelligence", "Irritation", "Joy", "Justice", "Kindness", "Laughter", "Law", "Liberty", "Lie", "Life", "Loneliness", "Loss", "Love", "Luck", "Luxury", "Marriage", "Mercy", "Movement", "Nap", "Pain", "Patience", "Peace", "Peculiarity", "Perseverance", "Philosophy", "Pleasure", "Poverty", "Power", "Pride", "Principle", "Reality", "Relaxation", "Relief", "Religion", "Restoration", "Rhythm", "Riches", "Right", "Rumour", "Sacrifice", "Sanity", "Satisfaction", "Self-control", "Sensitivity", "Service", "Shock", "Silliness", "Skill", "Slavery", "Sleep", "Solitude", "Sorrow", "Speed", "Strength", "Strictness", "Stupidity", "Success", "Surprise", "Talent", "Thought", "Thrill", "Timing", "Tiredness", "Tolerance", "Trend", "Trust", "Truth"];

//styles
const useStyles = makeStyles(theme => ({
    addNew: {
        marginLeft: 'auto',
        marginRight: theme.spacing(2.5),
        marginTop: '10px'
    },
    tags: {
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'space-around'
    },
    dialog: {
        display: 'flex',
        flexDirection: 'column'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
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
const AddNewTodo = ({addTodo}) => {
    //styles
    const classes = useStyles();

    //dialog state
    const [newTodoState, setNewTodoState] = useState(false);
    const handleOpenNewTodo = () => setNewTodoState(true);
    const handleCloseNewTodo = () => {
        formik.resetForm();
        setFirstTag('');
        setSecondTag('');
        setThirdTag('');
        setNewTodoState(false);
    };

    //tags state
    const [firstTag, setFirstTag] = useState('');
    const [secondTag, setSecondTag] = useState('');
    const [thirdTag, setThirdTag] = useState('');
    const handleFirstTagChange = (event) => {
        setFirstTag(event.target.value);
    };
    const handleSecondTagChange = (event) => {
        setSecondTag(event.target.value);
    };
    const handleThirdTagChange = (event) => {
        setThirdTag(event.target.value);
    };

    //form
    const formik = useFormik({
        initialValues: {
            title: '',
            content: '',
            tags: []
        },
        validationSchema: todoValidationSchema,
        onSubmit: (values) => {
            setDisabled(true);
            addTodo({...values, tags: [firstTag, secondTag, thirdTag]});
            setDisabled(false);
            setFirstTag('');
            setSecondTag('');
            setThirdTag('');
            formik.resetForm();
            handleCloseNewTodo();
        }
    });

    //button status
    let [disabled, setDisabled] = useState(false);

    return (
        <>
            <Fab color="secondary" className={classes.addNew} onClick={handleOpenNewTodo}>
                <AddIcon />
            </Fab>
            <Dialog open={newTodoState} onClose={handleCloseNewTodo} maxWidth={'sm'}>
                <DialogTitle>New Task</DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                    <DialogContent className={classes.dialog}>
                        <DialogContentText>Fill in the gaps</DialogContentText>
                        <TextField fullWidth id="title" name="title" label="Title" value={formik.values.title} onChange={formik.handleChange} error={formik.touched.title && Boolean(formik.errors.title)} helperText={formik.touched.title && formik.errors.title}/>
                        <TextField fullWidth id="content" name="content" label="Content" value={formik.values.content} onChange={formik.handleChange} error={formik.touched.content && Boolean(formik.errors.content)} helperText={formik.touched.content && formik.errors.content}/>
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
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseNewTodo} color={"primary"}>Cancel</Button>
                        <Button type={'submit'} disabled={disabled} color={"primary"}>Add</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}


export default AddNewTodo;