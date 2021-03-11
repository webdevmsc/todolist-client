import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar, Box, Button, Container, LinearProgress, Toolbar, Typography
} from "@material-ui/core";

import LoginButtons from "./LoginButtons";


//styles
const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    },
    logout: {
        marginLeft: theme.spacing(2)
    },
    progress: {
        marginTop: '64px'
    }
}))

//element
const Header = ({isAuth, userName, logout, ...props}) => {
    const styles = useStyles();
    let handleLogout = () => {
        logout();
    }


    return (
        <>
            <AppBar position={"fixed"}>
                <Container fixed>
                    <Toolbar>
                        <Typography variant={"h6"} className={styles.title}>Todo list web app</Typography>
                        { isAuth ?
                            <>
                                <Box>
                                    <Typography variant={'h6'}>{userName}</Typography>
                                </Box>
                                <Button className={styles.logout} variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
                            </>
                            :
                            <LoginButtons { ...props }/>}
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header;
