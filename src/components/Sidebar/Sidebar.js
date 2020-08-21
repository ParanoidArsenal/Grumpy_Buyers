import React, { useEffect} from 'react';
import './Sidebar.css';
import {homeURL, getSession} from '../../helper';

const Sidebar = ({ avatar, login, children}) => {
    return(
        <div className = 'sidebar-container'>
            <div className = 'thumbnail'>
                <img src={avatar} />
            </div>
                <nav>
                    {children}
                </nav>
            <footer>
                <span> Copyright © 2020 </span>

            </footer>
        </div>
    );
    
};
export {Sidebar};