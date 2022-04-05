import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Badge, Add, PersonOutlineIcon } from '@mui/icons-material'
import { Grid, Container, Card, Paper, Button, List, ListItem, ListItemIcon } from '@mui/material';
import useFormUsers from './useFormUsers';

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
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={6}>
                                Users
                                <Button sx={{ left: '450px' }} href={('/users/add')}>
                                    <Add />
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Profile</TableCell>
                            <TableCell align='right'>Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Height</TableCell>
                            <TableCell align="right">Weight</TableCell>
                            <TableCell align="right">Workouts</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
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
                                <TableCell>{user.name}</TableCell>
                                <TableCell align="right">{user.age}</TableCell>
                                <TableCell align="right">{user.height}</TableCell>
                                <TableCell align="right">{user.weight}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Overall</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Workouts</TableCell>
                            <TableCell align="right">(number of total workouts)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell >Favorite Muscle Trained</TableCell>
                            <TableCell align="right">(favorite muscle trained)</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        </Grid>
    );
}


export default Users