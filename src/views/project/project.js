import {
    makeStyles
} from "@material-ui/core";
import { Domain as DomainIcon, Home as HomeIcon } from "@material-ui/icons";
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useHistory } from "react-router-dom";
import {
    CreateTask, Task
} from "./components";


const useStyles = makeStyles(theme => ({
    root: {
        display: "block"
    },
    breadcrumbs: {
        margin: theme.spacing(1, 3),
    },
    tasksContainer: {
        padding: theme.spacing(0, 2),
        position: "relative", display: "flex", overflowX: "scroll"
    }
}));

export default function Home() {
    const history = useHistory();
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <PerfectScrollbar component="div" className={classes.tasksContainer}>
                <CreateTask />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </PerfectScrollbar>
        </div>
    )
}
