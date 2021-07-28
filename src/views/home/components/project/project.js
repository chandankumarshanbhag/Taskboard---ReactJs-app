import React from 'react'
import {
    Avatar,
    Card,
    CardContent,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    makeStyles
} from '@material-ui/core';

import {
    Folder as ProjectIcon,
    MoreVert as MoreVertIcon
} from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
    card: {
        borderRadius: theme.spacing(1),
        padding:"0px !important"
    },
    cardContent: {
        padding: "0px !important"
    }
}));

export default function Project() {
    const classes = useStyles();
    return (
        <div>
            <Card elevation={1} className={classes.card}>
                <CardContent className={classes.cardContent}>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <ProjectIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="ICICI - VRM"></ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton size="small">
                                    <MoreVertIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </div>
    )
}
