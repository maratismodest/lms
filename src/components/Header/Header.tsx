import SchoolIcon from '@mui/icons-material/School';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import {Link} from "react-router-dom";
import header from './Header.module.scss'

export const db = [
    {
        id: 1,
        name: 'HTML',
        link: '/html'
    },
    {
        id: 2,
        name: 'CSS',
        link: '/css'
    },
    {
        id: 3,
        name: 'JavaScript',
        link: '/javascript'
    },
]


const Header: React.FC = () => {
    return (
        <header>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            component={Link}
                            to={'/'}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <SchoolIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            LMS
                        </Typography>
                        <ul className={header.menu}>
                            {db.map(lesson =>
                                <li key={lesson.id}>
                                    <Button component={Link} to={lesson.link} color="inherit">
                                        {lesson.name}
                                    </Button>
                                </li>
                            )}
                        </ul>

                    </Toolbar>
                </AppBar>
            </Box>
        </header>

    );
};

export default Header;
