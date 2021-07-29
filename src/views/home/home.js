import React from 'react'
import {
    Button,
    Divider,
    Grid,
    IconButton,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";

import {
    Menu as MenuIcon,
    GridOn as GridViewIcon,
    List as ListViewIcon
} from "@material-ui/icons";
import {Link} from "react-router-dom";
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { Project } from './components';
import NothingFound from "../../assets/images/undraw_task_list_6x9d.svg"

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width: "inherit"
    },
    toolbarRoot: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    divider: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    link: {
        textDecoration: "none"
    },
    imgContainer: {
        margin: theme.spacing(5),
        display: "flex",
        justifyContent: "center",
        textAlign: "center"
    },
    img: {
        width: theme.spacing(24)
    }
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify="center">
                <Grid item md={8} sm={12}>
                    <div className={classes.toolbarRoot}>
                        <Typography variant="h4" color="textPrimary">
                            Projects
                        </Typography>
                        <ToggleButtonGroup
                            value="grid"
                            exclusive
                            size="small"
                        >
                            <ToggleButton value="grid">
                                <GridViewIcon />
                            </ToggleButton>
                            <ToggleButton>
                                <ListViewIcon />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <Link to="/project/my-awesome-project" className={classes.link}>
                            <Project />
                            </Link>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <div className={classes.toolbarRoot}>
                        <Typography variant="h4" color="textPrimary">
                            Recent Tasks
                        </Typography>
                        <ToggleButtonGroup
                            value="grid"
                            exclusive
                            size="small"
                        >
                            <ToggleButton value="grid">
                                <GridViewIcon />
                            </ToggleButton>
                            <ToggleButton>
                                <ListViewIcon />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <div className={classes.imgContainer}>
                        <div>
                            <img src={NothingFound} className={classes.img} />
                            <br />
                            <br />
                            <Typography variant="h5">No recent tasks</Typography>
                        </div>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
