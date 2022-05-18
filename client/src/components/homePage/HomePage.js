import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Footer from '../Layout/Footer'

function HomePage() {
    return (
        <Box className='homePage' >
            <CssBaseline />
            <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    Workout Notes
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'This is a project based on REST API to track workouts.'}
                    {'The project consists of users, categories for each exercise, exercises, workouts and workout volume'}.
                    {'You have the option to view, edit, add and delete for each component'}
                </Typography>
                <Typography variant="body1">Sticky footer placeholder.</Typography>
            </Container>
            <Box
                component="footer"
                sx={{
                    py: 3, px: 2, mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        My sticky footer can be found here.
                    </Typography>
                    <Footer />
                </Container>
            </Box>
        </Box>
    );
}

export default HomePage