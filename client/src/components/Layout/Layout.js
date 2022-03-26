import './Layout.css';
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar } from '@mui/material';
import { SubjectOutlined, CricleOutlineOutlined, AddCircleOutlineOutlined } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import {format} from 'date-fns';
import {useStyles} from './useStylesLayout';

export default function Layout({ children, theme }) {
    const navigate = useNavigate();
    const location = useLocation();
    const classes = useStyles(theme);
    console.log(classes)
    const menuItems = [
        {
            text: "My Notes",
            icon: <SubjectOutlined color='secondary' />,
            path: '/me'
        },
        {
            text: "Workout",
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/workouts'
        },
        {
            text: "Exercises",
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/exercises'
        },
        {
            text: "Categories",
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/categories'
        },
        {
            text: "Settings",
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/settings'
        },
    ]

    return (
        <div className={classes.root}>
            <AppBar 
            position='fixed'
            className={classes.appBar}
            eleveation={0}
            color='primary'
            >
                <Toolbar>
                    <Typography className={classes.date}>          
                    {format(new Date(), 'do MMMM Y')}                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer 
            className={classes.drawer} 
            variant='permanent' 
            classes={{paper: classes.drawerPaper}}
             anchor='left' 
             >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Menu
                    </Typography>
                </div>
                <List>
                    {menuItems.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => navigate(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                            >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}

                </List>
            </Drawer>
            <div className={classes.page}>
        <div className={classes.toolbar}></div>                {children}
            </div>
        </div>
    )
}