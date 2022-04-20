import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Badge, PersonOutlineIcon, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Grid, Container, Box, ListItem, Button, ListItemIcon, Card, Paper, Typography, IconButton, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import useFormUsers from './useFormUsers';

import { Delete, Edit, Add, ExpandMore, Warning } from '@mui/icons-material';

const Users = () => {
    const { users, error, isLoading } = useFormUsers();

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <Grid sx={{ mt: 6, m: 8 }} className='content'>
            <Card sx={{ width: 1000 }}>
                <TableContainer component={Paper}>
                    <Typography variant='h4' align='center' sx={{ mb: 4, mt: 4 }}>Workouts</Typography>
                    <Table sx={{ minWidth: 650 }} aria-label="customized table">
                        <TableHead sx={{ backgroundColor: "yellow", color: 'blue' }}>
                            <TableRow sx={{ color: 'white' }}>
                                <TableCell align='center'>User</TableCell>
                                <TableCell align='center'>Age</TableCell>
                                <TableCell align='center' >Height</TableCell>
                                <TableCell align='center' >Weight</TableCell>
                                <TableCell align='center' >View Profile</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow
                                    key={user.id}
                                >
                                    <TableCell align='center'>{user.name}.</TableCell>
                                    <TableCell align='center' scope="row">{user.age}</TableCell>
                                    <TableCell align='center' >{user.height}</TableCell>
                                    <TableCell align='center' >{user.weight} </TableCell>
                                    <TableCell align='center'>
                                        <ListItem
                                            key={user.id}
                                        >
                                            <Button href={`/users/${user.id}`}>
                                                <ListItemIcon>
                                                    <Badge />
                                                </ListItemIcon>
                                            </Button>
                                        </ListItem>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Grid>
    );
}


export default Users