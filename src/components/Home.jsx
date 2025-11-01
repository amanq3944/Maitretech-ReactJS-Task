import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Navbar from './Navbar';

const Home = () => {

    const navigate = useNavigate()
    const [data, setData] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
        }
    }, [navigate])

    console.log(data)

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    const fname = localStorage.getItem("fname");

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='flex flex-col justify-center items-center space-y-10 min-h-screen'>
            <nav className='bg-blue-800 text-white px-10 py-2 w-full flex justify-between items-center gap-10 min-h-15 font-sans shadow-2xl fixed top-0'>
                <div className='flex justify-center items-center gap-3 fill-blue-500 shadow-2xl'>
                    <img className='size-8 brightness-0 invert' src="https://raw.githubusercontent.com/punitdiwan/codeing-challenge/171f2b65bed3537ed71314c597aa4e0c04262f56/assets/restaurant_48px.svg" alt="" />
                    <h1 className='text-2xl font-semibold'>Food's Restaurant</h1>
                </div>
                <div onClick={handleClick} className='cursor-pointer flex items-center justify-center gap-3'>
                    <img className='size-8 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQi2Mm5P8j09P4hPKa1B-t9eIOHzHmR7IBkw&s" alt="profileImg" />
                    <h1 className='text-2xl font-semibold'>{fname}</h1>
                </div>
                <div>
                    <Navbar className />
                </div>
            </nav>



            <div className='flex flex-col justify-center items-center space-y-5'>
                <h1 className='text-7xl font-light flex flex-col justify-center items-center'>Welcome to Food's <span>Kitchen</span></h1>
                <button onClick={() => navigate('/menu')} className='bg-blue-800 text-white cursor-pointer font-semibold px-4 py-1 shadow-2xl rounded font-sans'>GO TO MENU</button>
            </div>
            <React.Fragment>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={() => navigate('/userprofile')}>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </React.Fragment>
        </div>
    )
}

export default Home