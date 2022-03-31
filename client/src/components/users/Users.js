import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import  ListItemIcon  from '@mui/material/ListItemIcon';
import  ListItem  from '@mui/material/ListItem';
import useFormUsers from './useFormUsers';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const Users = () => {
    const { users, error, deleteUser, isLoading } = useFormUsers();
    const navigate = useNavigate();

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <Grid container sx={{m:8}}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={3}>
                            Users
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
                            button
                            key={user.id}
                            onClick={() => navigate(`/users/${user.id}`)}
                        >
                                <ListItemIcon>
                                <PersonOutlineIcon />
                                </ListItemIcon>
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
                        <TableCell colSpan={2}>Favorite Muscle Trained</TableCell>
                        <TableCell align="right">(favorite muscle trained)</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </Grid>
    );
}


export default Users