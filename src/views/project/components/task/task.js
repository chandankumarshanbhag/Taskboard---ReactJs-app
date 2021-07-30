import React, { useState } from 'react'
import clsx from 'clsx';
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    makeStyles,
    Radio,
    Typography,
    TextField,
} from '@material-ui/core'

import {
    MoreVert as MoreVertIcon,
    Add as AddIcon,
    ExpandMore as ExpandMoreIcon
} from "@material-ui/icons"

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
        // backgroundColor: "transparent",
        color: theme.palette.text.primary,
        ...theme.palette.type == 'dark' ? theme.mixins.darkGlassBackground : theme.mixins.lightGlassBackground
    },
    cardContent: {
        padding: theme.spacing(0)
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
    },
    textField: {
        padding: "0px"
    }
}));



export default function Task({ title }) {
    const [titleEditMode, setTitleEditMode] = useState(false);
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Card elevation={1} className={classes.card}>
                <CardHeader title={titleEditMode ? <TextField
                    fullWidth
                    className={classes.textField}
                    placeholder="Task title"
                    InputProps={{ disableUnderline: true }}
                    onBlur={() => {
                        setTitleEditMode(!titleEditMode)
                    }}
                ></TextField> : <Typography onDoubleClick={() => {
                    setTitleEditMode(!titleEditMode)
                }}>Hello</Typography>} action={<IconButton size="small"><MoreVertIcon /></IconButton>} titleTypographyProps={{ variant: "body1", color: "gray" }}></CardHeader>
                <CardContent className={classes.cardContent}>
                    <List className={classes.list}>
                        <ListItem className={classes.listItem} button>
                            <ListItemAvatar><IconButton color="primary" size="small" className={classes.addTaskButton}><AddIcon /></IconButton></ListItemAvatar>
                            <ListItemText primary={"Add a task"}></ListItemText>
                        </ListItem>
                    </List>
                    <List className={classes.list}>
                        <ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem>
                        <ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem>
                        <ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem><ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem><ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem><ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem><ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem><ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem><ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem><ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem><ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem><ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem><ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem><ListItem className={clsx(classes.listItem, classes.task)}>
                            <ListItemAvatar><Radio size="small" /></ListItemAvatar>
                            <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Task 2"}></ListItemText>
                        </ListItem>
                    </List>
                    <div>
                        <List className={classes.list}>
                            <ListItem className={classes.listItem} button>
                                <ListItemText primaryTypographyProps={{ variant: "body2" }} primary={"Completed"}></ListItemText>
                                <ListItemSecondaryAction><IconButton size="small"><ExpandMoreIcon /></IconButton></ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
