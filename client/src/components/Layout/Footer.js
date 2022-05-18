import { Link, Typography } from "@mui/material"

export default function Footer() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/Daniel4o">
                Github
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}