import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh'
    },
    appbar: {
        background: 'none',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',

    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    container:{
        textAlign:'center'
    },
    title:{
        fontSize: '4.5rem',
    }

}));


function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Hoop<span className={classes.colorText}>Dream</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.container}>
                <h1 className={classes.title}>You got <br /> Next!</h1>
            </div>
        </div>
    );
}

export default Header
