import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';

export const menuItems = [
    {
        text: "Home",
        icon: <HomeOutlinedIcon color='secondary' />,
        path: '/'
    },
    {
        text: "Users",
        icon: <PersonOutlineOutlinedIcon color='secondary' />,
        path: '/users'
    },
    {
        text: "Workouts",
        icon: <FactCheckOutlinedIcon color='secondary' />,
        path: '/workouts'
    },
    {
        text: "Exercises",
        icon: <FitnessCenterOutlinedIcon color='secondary' />,
        path: '/exercises'
    },
    {
        text: "Categories",
        icon: <AccessibilityNewOutlinedIcon color='secondary' />,
        path: '/categories'
    },
]