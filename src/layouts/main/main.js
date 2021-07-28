import { makeStyles } from "@material-ui/core";
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Topbar,Breadcrumbs } from "./components";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh"
    }
}))

export default function Main({ children }) {
    const classes = useStyles();
    return (
        <div style={{ height: "100vh" }}>
            <PerfectScrollbar component="div">
                <div className={classes.root}>
                    <Topbar />
                    <Breadcrumbs />
                    {children}

                    {/* <Fab /> */}
                </div>
            </PerfectScrollbar>
        </div>
    )
}
