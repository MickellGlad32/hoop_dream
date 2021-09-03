import {makeStyles} from '@material-ui/core'
import Header from '../components/Header';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    root:{
        minHeight: '100vh',
        backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/pexels-courts.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover,'
    }
}));

function LandingPage() {
    const classes = useStyles();
    return (
        <div className= {classes.root}>
            <CssBaseline/>
            <Header/>
        
        </div>
    )
}

export default LandingPage
