import { Link, } from "react-router-dom";
import useFormUsers from "./useFormUsers";
import { Button, Divider, Box, List, ListItem, Grid, ListItemAvatar, ListItemText, Avatar } from "@mui/material";
import { WorkOutlineOutlined, WorkIcon } from '@mui/icons-material';

const Users = () => {
    const { error, isLoading, name, age, weight, height } = useFormUsers()

    if (isLoading) {
        return (<Grid>Loading...</Grid>)
    }
    if (error) {
        return <Grid>There was an error: {error}</Grid>
    }

    return (
        <Grid item xs={8}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <h2>About Me:</h2>
            <ListItem>
                <ListItemAvatar >
                    <Avatar><WorkOutlineOutlined /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="User" secondary={name} />
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemAvatar >
                    <Avatar><WorkOutlineOutlined /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Age" secondary={age} />
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemAvatar >
                    <Avatar><WorkOutlineOutlined /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Height" secondary={height} />
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemAvatar >
                    <Avatar><WorkOutlineOutlined /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Weight" secondary={weight} />
            </ListItem>
        </List>
        </Grid>
    )
}

export default Users