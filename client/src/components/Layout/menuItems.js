import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';

export const menuItems = [
    {
        text: "My Notes",
        icon: <PersonOutlineOutlinedIcon color='secondary' />,
        path: '/my-info'
    },
    {
        text: "Workout",
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
    {
        text: "Settings",
        icon: <SettingsOutlinedIcon color='secondary' />,
        path: '/settings'
    },
]