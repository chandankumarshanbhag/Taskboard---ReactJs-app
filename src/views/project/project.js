import React from 'react'
import {
    Grid,
    makeStyles
} from "@material-ui/core";

import {
    Task
} from "./components";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width: "inherit"
    }
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2} direction="row">
                <Grid item md={3}>
                    <Task />
                </Grid>
                <Grid item md={3}>
                    <Task />
                </Grid>
                <Grid item md={3}>
                    <Task />
                </Grid>
                <Grid item md={3}>
                    <Task />
                </Grid>
                <Grid item md={3}>
                    <Task />
                </Grid>
                <Grid item md={3}>
                    <Task />
                </Grid>
                <Grid item md={3}>
                    <Task />
                </Grid>
                <Grid item md={3}>
                    <Task />
                </Grid>
                <Grid item md={3}>
                    <Task />
                </Grid>
                <Grid item md={3}>
                    <Task />
                </Grid>
                <Grid item md={3}>
                    <Task />
                </Grid>
            </Grid>
        </div>
    )
}
