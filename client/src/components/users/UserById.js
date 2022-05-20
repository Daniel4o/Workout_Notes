import useFormUserById from "./useFormUserById";
import { Button, Divider, Box, List, ListItem, Grid, ListItemAvatar, ListItemText, Avatar, Card, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle, LinearProgress } from "@mui/material";
import { WorkOutlineOutlined, Edit, Delete, Warning } from '@mui/icons-material';

const GetUserById = () => {
    const { error, isLoading, user, handleClickOpen, handleClose, open, deleteUser } = useFormUserById()

    if (isLoading) {
        return (<LinearProgress color="secondary" />)
    }
    if (error) {
        return <h2>There was an error: {error}</h2>
    }

    return (
        <Grid className='createPage'>
            <Card className='userCard'>
                <List sx={{ width: '300px' }}>
                    <h1>User Info</h1>
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
                    <Box sx={{ '& button': { m: 1, }, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                        <Button variant='contained' href={(`/users/edit/${user.id}`)} startIcon={<Edit />}>
                            Edit
                        </Button>
                        <Button onClick={handleClickOpen} endIcon={<Delete />}>Delete</Button>
                        <Dialog
                            className='dialog'
                            open={open}
                            onClose={handleClose}
                        >
                            <Box className='dialogBox'>
                                <DialogTitle className='dialogTitle'>
                                    Delete User
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText color='black'>
                                        <Warning fontSize='large' color='error' id='warning' />
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