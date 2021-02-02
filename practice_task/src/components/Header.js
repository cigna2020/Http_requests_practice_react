import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css';

const header = () => (
    <header className="Header">
        <nav>
            <ul>
                <NavLink to="/courses" >Go to all Courses</NavLink>
                <NavLink to="/users">Look at all Users</NavLink>
            </ul>
        </nav>
    </header>
);

export default header;