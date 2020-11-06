import React from 'react';
import {Navbar} from 'react-bootstrap';

function AppBar({children, ...props}) {
const {title} = props;
    return (
        <Navbar bg="light">
            <Navbar.Brand>
                {title}
            </Navbar.Brand>
        </Navbar>
    );
}

export  default AppBar;