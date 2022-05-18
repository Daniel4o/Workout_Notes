import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Grid, ListItem, Button, ListItemIcon, Card, Paper, LinearProgress } from '@mui/material';
import useFormUsers from './useFormUsers';
import { Add, Badge } from '@mui/icons-material';

const Users = () => {
    const { users, error, isLoading } = useFormUsers();

    if (isLoading) {
        return (<LinearProgress color="secondary" />)
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <Grid className='content'>
            <Card className='tableCard'>
                <TableContainer component={Paper}>
                    <h1>Users</h1>
                    <Button sx={{ left: '820px' }} href={('/users/add')}>
                        <Add />
                    </Button>
                    <Table >
                        <TableHead>
                            <TableRow >
                                <TableCell>User</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell >Height</TableCell>
                                <TableCell >Weight</TableCell>
                                <TableCell >View Profile</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow
                                    key={user.id}
                                >
                                    <TableCell>{user.name}.</TableCell>
                                    <TableCell scope="row">{user.age}</TableCell>
                                    <TableCell >{user.height}</TableCell>
                                    <TableCell >{user.weight} </TableCell>
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