import React, {Fragment, useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import logo from '../../reo_logo.jpeg';
import {
    AppBar,
    Avatar,
    Toolbar,
    IconButton,
    InputBase,
    MenuItem,
    Menu,
    Drawer,
    List,
    ListItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { AiFillCloseSquare } from 'react-icons/ai';
import {FaMapMarkerAlt} from 'react-icons/fa'
import useScrollTrigger from "@material-ui/core/useScrollTrigger";



export default function AppBarWithSearch({title, children, ...props}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);

    const isMenuOpen = Boolean(anchorEl);

    const trigger = useScrollTrigger({disableHysteresis: true, threshold: 50});


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Fragment>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            </Menu>
        </Fragment>

    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (openDraw) => (
        <Drawer
            transitionDuration={550}
            anchor='right'
                open={openDraw}
                onBackdropClick={() => setOpenDrawer(false)}>
            <List>
                <ListItem onClick={() => setOpenDrawer(false)}>
                    <AiFillCloseSquare style={{width: 25, height: 25, position: 'absolute', right: 0, cursor: 'pointer'}} />
                </ListItem>
                <ListItem>
                    Drawer
                </ListItem>
            </List>
        </Drawer>
    );

    return (
        <div className={classes.grow}>
            <AppBar position='static' style={{backgroundColor: '#436c8a', paddingTop: 0}}>
                <Toolbar style={{paddingTop: 0}}>
                    <div style={{display: "flex", color: "white"}}>
                        <FaMapMarkerAlt style={{marginRight: 10}}/> Wonganga, Small Soppo Buea, Cameroon
                    </div>
                </Toolbar>
            </AppBar>
            <AppBar position={trigger ? 'fixed' : 'static'} style={{backgroundColor: 'white', boxShadow: "none"}}>
                <Toolbar>
                    <Avatar variant="square" style={{marginRight: 10, width: 60}}>
                        <img src={logo} alt="REO Logo" width={60}/>
                    </Avatar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search'}}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                            {children}


                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={() => setOpenDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon style={{color: 'gray'}}/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu(openDrawer)}
            {renderMenu}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: 0,
        color: 'gray',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        // marginRight: theme.spacing(2),
        marginLeft: 0,
        width: 'auto',
        border: '1px solid gray',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'gray',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(0.5, 0.5, 0.5, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));
