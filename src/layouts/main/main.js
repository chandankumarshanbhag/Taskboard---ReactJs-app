import { makeStyles } from "@material-ui/core";
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Topbar, Breadcrumbs } from "./components";
import Bg1 from "./../../assets/images/bg1.jpg"
import Bg2 from "./../../assets/images/bg2.jpg"
import Bg3 from "./../../assets/images/bg3.jpg"
import Bg4 from "./../../assets/images/bg4.jpg"
import Bg5 from "./../../assets/images/bg5.jpg"

const useStyles = makeStyles(theme => ({
    bg: {
        background: `url(${Bg5})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    root: {
        // backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
        // ...theme.mixins.background2
    }
}))

export default function Main({ children }) {
    const classes = useStyles();
    return (
        <div style={{ height: "100vh" }} className={classes.bg}>
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
