import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Badge, Add, PersonOutlineIcon, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Grid, Container, Card, Paper, IconButton, Collapse } from '@mui/material';
import useFormWorkouts from './useFormWorkouts';

const Workouts = () => {
    const { workouts, deleteWorkout, error, isLoading } = useFormWorkouts();
    const [open, setOpen] = React.useState(false);
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>There was an error: {error}</div>
    }

    return (
        <React.Fragment>
            <Grid sx={{ mt: 6, m: 8 }} className='content'>
                <Card sx={{ width: 1000 }}>
                    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                        </IconButton>
                    </TableRow>
                </Card>
            </Grid>
        </React.Fragment>
    );
}


export default Workouts