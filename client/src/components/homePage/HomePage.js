import { Button, Container, Typography, Box, CssBaseline } from '@mui/material'
import Footer from './Footer';
import { Facebook, LinkedIn, GitHub } from '@mui/icons-material';
import './HomePage.css';

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
                <Typography variant="body1">You can find me here:.</Typography>
                <Button startIcon={<Facebook />} href='https://www.facebook.com/Daniel4oo'>Facebook</Button>
                <div></div>
                <Button startIcon={<LinkedIn />} href='https://www.linkedin.com/in/daniel-georgiev-1a2063223/'>LinkedIn</Button>

            </Container>
            <Box className="footer"
                component="footer"

            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        My GitHub profile can be found here.
                    </Typography>
                    <Footer />
                </Container>
            </Box>
        </Box>
    );
}

export default HomePage