import { Link, } from "react-router-dom";
import useFormGetUserById from "./useFormGetUserById";
import { Button, Divider, Typography, Box, List, ListItem, Grid, ListItemAvatar, ListItemText, Avatar, Card, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle } from "@mui/material";
import { WorkOutlineOutlined, WorkIcon, Badge, Edit, Delete, Warning } from '@mui/icons-material';
import { useState } from 'react';
const GetUserById = () => {
    const { error, isLoading, user, handleClickOpen, handleClose, open, deleteUser } = useFormGetUserById()

    if (isLoading) {
        return (<Grid>Loading...</Grid>)
    }
    if (error) {
        return <Grid>There was an error: {error}</Grid>
    }

    return (
        <Grid container sx={{ m: 10, mt: 4 }} className='content'>
            <Card sx={{ width: 500, m: 8 }}>
                <List sx={{ left: '75px', maxWidth: 350, bgcolor: 'background.paper' }}>
                    <Typography variant='h4' align='center' sx={{ pb: 4, mt: 2 }}>User Info</Typography>
                    <ListItem>
                        <ListItemAvatar >
                            <Avatar><WorkOutlineOutlined /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Name" secondary={user.name} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemAvatar >
                            <Avatar><WorkOutlineOutlined /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Age" secondary={user.age} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemAvatar >
                            <Avatar><WorkOutlineOutlined /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Height" secondary={user.height} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemAvatar >
                            <Avatar><WorkOutlineOutlined /></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Weight" secondary={user.weight} />
                    </ListItem>
                    <Box sx={{ '& button': { m: 1, left: '225px' } }}>
                        <Button href={(`/users/edit/${user.id}`)}>
                            <Edit />
                        </Button>
                        <Button onClick={handleClickOpen}><Delete /></Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            style={{ borderColor: 'red' }}
                        >
                            <Box sx={{ borderTop: 3, color: 'red' }}>
                                <DialogTitle sx={{ color: 'black', backgroundColor: 'gainsboro', pl: 11 }}>
                                    Delete User
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText color='black'>
                                        <Warning fontSize='large' color='error' sx={{ mr: 4, pt: 1 }} />
                                        Are you sure you want to delete the user: {user.name} ?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant='contained' onClick={() => deleteUser(user.id)} autoFocus>
                                        Yes
                                    </Button>
                                    <Button variant='outlined' onClick={handleClose}>No</Button>
                                </DialogActions>
                            </Box>
                        </Dialog>
                    </Box>
                </List>
            </Card>
        </Grid>
    )
}

export default GetUserById