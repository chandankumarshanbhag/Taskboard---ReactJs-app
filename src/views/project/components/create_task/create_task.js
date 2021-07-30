import {
    ButtonBase, Card,
    CardContent, IconButton, makeStyles, Typography
} from '@material-ui/core';
import {
    Add as AddIcon
} from "@material-ui/icons";
import React from 'react';


const useStyles = makeStyles(theme => ({
    root: {
        minWidth: "320px",
        // flexGrow: 1,
        height: "100%",
        margin: theme.spacing(1),
    },
    card: {
        borderRadius: theme.spacing(1),
        margin: theme.spacing(1),
        // backgroundColor: theme.palette.background.paper,
        // color: theme.palette.text.primary,
        ...theme.palette.type == 'dark' ? theme.mixins.darkGlassBackground : theme.mixins.lightGlassBackground

    },
    cardContent: {
        padding: theme.spacing(2, 3),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    list: {
        margin: theme.spacing(0),
        padding: theme.spacing(0)
    },
    listItem: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingTop: theme.spacing(0.2),
        paddingBottom: theme.spacing(0.2)
    },
    addTaskButton: {
        padding: "5px",
        // backgroundColor: theme.palette.primary.main
    },
    task: {
        "&:hover": {
            boxShadow: theme.shadows[1]
        }
    }
}));


export default function CreateTask() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Card elevation={1} className={classes.card}>
                <ButtonBase style={{ width: "100%" }}>
                    <CardContent className={classes.cardContent}>
                        <IconButton color="primary" onClick={() => { }}>
                            <AddIcon />
                        </IconButton>
                        <Typography>Add task</Typography>
                    </CardContent>
                </ButtonBase>
            </Card>
        </div>
    )
}
