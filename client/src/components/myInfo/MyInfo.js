import { Link, } from "react-router-dom";
import useFormMyInfo from "./useFormMyInfo";
import { Button, Box, List, ListItem, Grid, ListItemAvatar, ListItemText, Avatar } from "@mui/material";
import { WorkOutlineOutlined, WorkIcon } from '@mui/icons-material';

const MyInfo = () => {
    const { error, isLoading, name, age, weight, height } = useFormMyInfo()

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
            <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                <ListItemAvatar >
                    <Avatar><WorkOutlineOutlined /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="User" secondary={name} />
            </Box>
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <Avatar><WorkOutlineOutlined /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Age" secondary={age} />
            </ListItem>
            <ListItem>
                <ListItemAvatar >
                    <Avatar><WorkOutlineOutlined /></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Height" secondary={height} />
            </ListItem>
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

export default MyInfo