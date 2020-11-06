import React, {useState, useRef, useEffect} from "react";
import MenuItem from "@material-ui/core/MenuItem";

import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';

import {FaCaretDown} from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        borderRadius: theme.spacing(0)
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

function DropdownMenuList(
    {
        itemList,
        history,
        label,
        to,
        color,
        ...props
    }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleMouseEnter = () => {
        setOpen(true);
    }

    const handleClose = (event) => {
        setOpen(false);
    };

    const handleRedirect = (event, redirect = '/') => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
        history && history.push(redirect);

    }

    const handleMouseLeave = (event) => {
        setOpen(false);
    }


    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const handleClick = () => {
        if (to !== undefined && history !== undefined) {
            history.push(to);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            <div>
                <div
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={() => handleClick()}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleClose}
                    style={{cursor: to === undefined ? 'default' : 'pointer',
                        marginRight: 10, marginLeft: 10, color: color === undefined ? 'black' : color}}
                >
                    {label}
                    {
                        (itemList !== undefined && itemList.length > 0) && <FaCaretDown />
                    }
                </div>
                {
                    (itemList !== undefined && itemList.length > 0) &&
                    <Popper open={open} anchorEl={anchorRef.current}
                            role={undefined}
                            transition
                            disablePortal
                            placement='bottom-end'
                            style={{zIndex: 9999}}
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                    borderRadius: 0 }}
                            >
                                <Paper>
                                    <div
                                        onMouseEnter={handleMouseEnter}
                                    >
                                        <MenuList

                                            autoFocusItem={open}
                                                  id="menu-list-grow"
                                                  onKeyDown={handleListKeyDown}
                                                  onMouseLeave={handleMouseLeave}
                                                  onMouseEnter={handleMouseEnter}
                                        >
                                            {
                                                itemList.map((list, index) =>
                                                    <MenuItem
                                                        style={{borderRadius: 0}}
                                                        key={`menu_${index}`}
                                                        onClick={
                                                        (event) => handleRedirect(event, list.to)} >
                                                        {list.label}
                                                    </MenuItem>)
                                            }
                                        </MenuList>
                                    </div>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                }
            </div>
        </div>
    );
}

export default withRouter(DropdownMenuList);