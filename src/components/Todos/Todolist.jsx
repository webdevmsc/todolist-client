import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Backdrop,
    Checkbox,
    CircularProgress,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    TablePagination,
    Typography
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Chip from '@material-ui/core/Chip';
import EditTodo from "./EditTodo";
import AddNewTodo from "./AddTodo";
import {toggleDoneCheckBox} from "../../redux/todo-reducer";

//styles
const useStyles = makeStyles(theme => ({
    todos: {
        display: "flex",
        flexDirection: "column",
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        padding: 0
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    listItemText: {
        marginRight: '15px'
    },
    chip: {
        marginRight: '10px'
    },
    note: {
        transitionDuration: "0.3s",
        '&:hover': {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            cursor: "pointer"
        },
    },
    done: {
        color: "white"
    },
    doneNote: {
        transitionDuration: "0.3s",
        backgroundColor: "rgba(104, 62, 182, 0.30)",
        opacity: "50%",
        "&:hover": {
            cursor: "pointer"
        },
    },
    dates: {
        marginLeft: 'auto',
        marginRight: '30px'
    },
    date: {
        marginRight: '8px'
    },
    paper: {
        paddingBottom: theme.spacing(21),
        borderRadius: '20px',
        minHeight: theme.spacing(40),
        position: 'relative',
        marginBottom: theme.spacing(4)
    },
    todolist: {
        marginTop: theme.spacing(12)
    },
    todolistHeader: {
        display: 'flex',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        backgroundColor: "#673AB7",
        color: 'white',
        borderRadius: '20px 20px 0 0'
    },
    todolistHeaderDates: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: theme.spacing(8),
        alignItems: 'center'
    },
    todolistHeaderTitle: {
        marginLeft: theme.spacing(8.8),
        fontSize: '18px',
        fontWeight: 'bold'
    },
    todolistHeaderDatesItem: {
        fontSize: '18px',
        marginRight: theme.spacing(7.5),
        marginLeft: theme.spacing(3.5),
        fontWeight: 'bold'
    },
    secondary: {
        marginRight: theme.spacing(0.3),
        paddingTop: '3px',
    },
    secondaryIcon: {
        marginRight: theme.spacing(0.5),
        transition: 'all 0.3s ease-out',
        '&:hover': {
            cursor: 'pointer',
            color: 'purple'
        }
    },
    tablePagination: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    addTodo: {
        position: 'absolute',
        bottom: 60,
        right: 0
    },
    message: {
        padding: theme.spacing(6),
        fontSize: '26px'
    },
    unAuthorized: {
        marginTop: theme.spacing(12),
        fontSize: '28px'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 5,
        color: '#fff',
    },
    progress: {
        marginTop: theme.spacing(16),
        color: 'black',
        position: 'absolute',
        left: '50%'
    }
}))
//element
const Todolist = ({todos, toggleDone, deleteTodo, addTodo, editTodo, isAuth, isLoading, isSubmitting}) => {
    //styles
    const classes = useStyles();
    //button/checkbox handling
    const handleDelete = (todoId) => () => {
        deleteTodo(todoId);
    };
    const handleToggleDone = (todoId) => () => {
        toggleDone(todoId);
    }

    //pagination
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    if (isAuth === false && !isLoading && !isSubmitting) return <Container className={classes.unAuthorized}><Typography variant={'inherit'}><strong>Login:</strong> demo@mail.ru<br/><strong>Password:</strong> 123321dd</Typography></Container>

    if (!todos) {
        return (
           <div className={classes.progress}><CircularProgress/></div>

        )
    }

    let sliced;
    if (todos && rowsPerPage > 0) {
        sliced = todos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    } else {
        sliced = todos;
    }


    return (
        <>
            <Container className={classes.todolist}>
                <Paper className={classes.paper}>
                    <div className={classes.todolistHeader}>
                        <div className={classes.todolistHeaderTitle}>Task</div>
                        <div className={classes.todolistHeaderDates}>
                            <div className={classes.todolistHeaderDatesItem}>Added</div>
                            <div className={classes.todolistHeaderDatesItem}>Updated</div>
                        </div>
                    </div>
                    {
                            sliced.length === 0
                            ?
                            <div className={classes.message}>
                                <Typography variant={'inherit'}>Your todolist is empty. Please add some tasks</Typography>
                            </div>
                            :
                            <List className={classes.todos}>
                                {sliced.map(x =>
                                    <ListItem className={x.status ? classes.doneNote : classes.note } key={x.id} onClick={handleToggleDone(x.id)} >
                                        <ListItemIcon>
                                            <Checkbox checked={x.status == true}/>
                                        </ListItemIcon>
                                        <div className={classes.listItem}>
                                            <ListItemText className={classes.listItemText} primary={x.title} secondary={x.content}/>
                                            { x.tags && x.tags.map(x => x && <Chip key={x} variant={"outlined"} className={classes.chip} label={x}/>) }
                                        </div>
                                        <div className={classes.dates}>
                                            <Chip variant={"outlined"} key={Date.parse(x.added)} className={classes.date} label={new Date(Date.parse(x.added)).toLocaleString()}/>
                                            <Chip variant={"outlined"} key={x.updated} className={classes.date} label={new Date(Date.parse(x.updated)).toLocaleString()}/>
                                        </div>
                                        <ListItemSecondaryAction className={classes.secondary}>
                                            <EditTodo editingTodo={x} editTodo={editTodo}/>
                                            <DeleteIcon className={classes.secondaryIcon} onClick={handleDelete(x.id)}/>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )}
                            </List>
                    }
                    <div className={classes.addTodo} >
                        <AddNewTodo addTodo={addTodo}/>
                    </div>
                    <TablePagination className={classes.tablePagination} rowsPerPageOptions={[8, 16, 25]} component="div" count={todos.length} rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage}/>
                </Paper>
            </Container>
        </>
    )
}

export default Todolist;