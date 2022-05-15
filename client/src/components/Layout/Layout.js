import './Layout.css';
import { Drawer, Typography, Box, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Card, Grid } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { menuItems } from './menuItems';

export default function Layout({ children }) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className='root'>
            <AppBar
                position='fixed'
                eleveation={0}
                color='primary'
            >
                <Toolbar className='appBar'>
                    <Typography >
                        Workout Notes
                    </Typography>
                    <div className='date'></div>
                    <Typography>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className='drawer' variant='permanent' anchor='left'
                sx={{
                    width: 240, flexShrink: 0, '& .MuiDrawer-paper':
                        { width: 240, boxSizing: 'border-box', },
                }}
            >
                <div>
                    <Typography variant='h5'>
                        Menu
                    </Typography>
                </div>
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => navigate(item.path)}
                            style={{ background: location.pathname == item.path ? "#f4f4f4" : null }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box sx={{ width: '80vw' }}>
                {children}
            </Box>
        </div>
    )
}