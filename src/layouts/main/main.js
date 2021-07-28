import React from 'react'
import { Topbar, Fab } from "./components"
import { makeStyles } from "@material-ui/core"
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh"
    }
}))

export default function Main({ children }) {
    const classes = useStyles();
    return (
        <div style={{height: "100vh"}}>
        <PerfectScrollbar component="div">
            <div className={classes.root}>
                <Topbar />
                {children}

                <Fab />
            </div>
        </PerfectScrollbar>
        </div>
    )
}
