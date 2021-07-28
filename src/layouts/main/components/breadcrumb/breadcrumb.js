import { Chip, emphasize, withStyles, makeStyles, Breadcrumbs } from "@material-ui/core";
import { Domain as DomainIcon, Home as HomeIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip);

const useStyles = makeStyles(theme => ({
    breadcrumbs: {
        margin: theme.spacing(1, 3),
    }
}));


export default function Breadcrumb() {
    const history = useHistory();
    const classes = useStyles();
    return <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
        <StyledBreadcrumb
            label={"Home"}
            icon={<HomeIcon />}
            onClick={() => {
                history.push("/")
            }}
        />
        {history.location.pathname?.split("/")?.map(path => {
            if (path === "") return;
            let label = path == "" ? "Home" : path == "project" ? "Project" : path;
            let icon = path == "" ? <HomeIcon /> : path == "project" ? <DomainIcon fontSize="small" /> : null;

            return <StyledBreadcrumb
                label={label}
                icon={icon}
                onClick={() => {
                    history.push(path)
                }}
            />;

        })}

    </Breadcrumbs>;
}