import { Link, Typography } from "@mui/material"
import { GitHub } from "@mui/icons-material";

export default function Footer() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link startIcon={<GitHub/>} color="inherit" href="https://github.com/Daniel4o">
                <GitHub/>Github
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}