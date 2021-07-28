import React from 'react'
import {
    Fab as FabButton,
    makeStyles
} from '@material-ui/core';

import {
    Add as AddIcon
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        position: "fixed",
        right: theme.spacing(2),
        bottom: theme.spacing(2)
    }
}));

export default function Fab() {
    const classes = useStyles()
    return (
        <FabButton color="primary" aria-label="add" className={classes.root}>
            <AddIcon />
        </FabButton>
    )
}
