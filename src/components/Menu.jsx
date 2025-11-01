import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaShoppingCart } from "react-icons/fa";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { VscListSelection } from "react-icons/vsc";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Menus = () => {

    const navigate = useNavigate()
    const [cart, setCart] = useState({});
    const [opens, setOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            navigate('/login')
        }
    }, [navigate])

    const items = [
        { id: 1, name: "Hamburger", price: 200, img: "https://raw.githubusercontent.com/punitdiwan/codeing-challenge/refs/heads/main/assets/burger.jpeg" },
        { id: 2, name: "Fries", price: 100, img: "https://raw.githubusercontent.com/punitdiwan/codeing-challenge/refs/heads/main/assets/fries.jpeg" },
        { id: 3, name: "Coke", price: 50, img: "https://raw.githubusercontent.com/punitdiwan/codeing-challenge/refs/heads/main/assets/coke.jpeg" },
        { id: 4, name: "Hamburger", price: 50, img: "https://raw.githubusercontent.com/punitdiwan/codeing-challenge/refs/heads/main/assets/pepsi.jpeg" }
    ];

    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-badge": {
            right: -3,
            top: 13,
            border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
            padding: "0 4px",
        },
    }));

    const handleAdd = (item) => {
        setCart((prev) => ({
            ...prev,
            [item.id]: {
                ...item,
                quantity: (prev[item.id]?.quantity || 0) + 1,
            },
        }));
    };

    const handleRemove = (item) => {
        setCart((prev) => {
            if (!prev[item.id]) return prev;
            const updatedQty = prev[item.id].quantity - 1;
            if (updatedQty <= 0) {
                const { [item.id]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [item.id]: { ...item, quantity: updatedQty } };
        });
    };

    const totalItems = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <div className="font-sans">
            <nav className="bg-blue-800 text-white w-full flex justify-between items-center px-10 py-4 fixed top-0 shadow-xl z-10">
                <div className="flex items-center gap-3">
                    <img
                        className="w-8 h-8 brightness-0 invert"
                        src="https://raw.githubusercontent.com/punitdiwan/codeing-challenge/171f2b65bed3537ed71314c597aa4e0c04262f56/assets/restaurant_48px.svg"
                        alt="logo"
                    />
                    <h1 className="text-2xl font-semibold">Food's Restaurant</h1>
                </div>
                <div className="flex items-center justify-center gap-6">
                    <IconButton aria-label="cart" onClick={() => setOpen(true)}>
                        <StyledBadge badgeContent={totalItems} color="secondary">
                            <FaShoppingCart size={22} className="text-white" />
                        </StyledBadge>
                    </IconButton>
                    <div>
                        <VscListSelection onClick={handleClick} className="text-2xl cursor-pointer" />
                    </div>
                </div>
            </nav>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center mt-28 px-20">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="border border-gray-200 shadow-lg rounded-lg w-70 hover:scale-105 transition-transform bg-white"
                    >
                        <img
                            className="w-full h-44 object-cover rounded-t-lg"
                            src={item.img}
                            alt={item.name}
                        />
                        <div className="p-4 space-y-2">
                            <h1 className="text-lg font-semibold">{item.name}</h1>
                            <p className="text-gray-600">Price: ₹{item.price}</p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => handleAdd(item)}
                                    className="bg-blue-800 text-white w-12 h-10 rounded text-xl"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => handleRemove(item)}
                                    className="bg-gray-500 text-white w-12 h-10 rounded text-xl"
                                >
                                    −
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <Dialog
                open={opens}
                onClose={() => setOpen(false)}
                PaperProps={{
                    className: "rounded-lg shadow-lg w-[95%] sm:w-[500px] bg-white p-4 sm:p-6",
                }}
            >
                <DialogTitle className="text-lg sm:text-xl font-semibold text-gray-800 pb-2">
                    Order Summary
                </DialogTitle>

                <DialogContent className="space-y-4">
                    {Object.values(cart).length > 0 ? (
                        Object.values(cart).map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b border-gray-200 pb-2"
                            >
                                <span className="text-gray-700 font-medium">{item.name} :</span>

                                <div className="flex items-center gap-3">
                                    <span className="text-gray-700 font-medium w-6 text-center">
                                        {item.quantity}
                                    </span>
                                    <div className="flex gap-1">
                                        <button
                                            onClick={() => handleAdd(item)}
                                            className="bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold px-3 py-1 rounded shadow-sm"
                                        >
                                            +
                                        </button>
                                        <button
                                            onClick={() => handleRemove(item)}
                                            className="bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold px-3 py-1 rounded shadow-sm"
                                        >
                                            −
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center py-3">No items in cart</p>
                    )}

                    <div className="pt-3 font-semibold text-gray-800 text-base">
                        Total (INR): ₹{totalPrice}
                    </div>
                </DialogContent>

                <DialogActions className="flex justify-end gap-3 mt-2">
                    <Button
                        onClick={() => setOpen(false)}
                        className="!text-gray-600 !capitalize"
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={() => navigate('/checkout')}
                        variant="contained"
                        className="!bg-blue-700 hover:!bg-blue-800 !text-white !font-semibold !px-6 !py-2 !rounded"
                    >
                        Save and Checkout
                    </Button>
                </DialogActions>
            </Dialog>

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
                    <MenuItem onClick={handleClose}>
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
    );
};

export default Menus;
