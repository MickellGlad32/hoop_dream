import { AppBar, Button, MenuItem, Toolbar, Menu } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '185vh'
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
        fontSize: '1rem',
    },
    container: {
        textAlign: 'center'
    },
    title: {
        fontSize: '4.5rem',
    }

}));


function Header() {
    const classes = useStyles();
    const [openMenu, setOpenMenu] = useState(null)
    const HandleMenu = () => {
        setOpenMenu(true)
    }
    const closeMenu = () => {
        setOpenMenu(false)
    }
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Hoop<span className={classes.colorText}>Dream</span></h1>
                    <Button className={classes.icon} onClick={HandleMenu}>Play</Button>
                    <Menu open={openMenu}>

                        <MenuItem onClick={closeMenu}
                            component={Link}
                            to='/search'>
                            Search</MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                },
                transition: {
                    delay: .3
                }
            }}>
            <div className={classes.container}>
                <h1 className={classes.title}>Get In <br />The Game!</h1>
            </div>

            </motion.div>
        </div>
    );
}

export default Header
