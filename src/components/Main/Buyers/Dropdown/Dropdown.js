import React from 'react';
import './Dropdown.css';

const Dropdown = ({activeItem, items, setActive}) => {
    const dropdownItems = items.map((item, i) => 
        <li key = {i} onClick = {() => setActive(item)}> {item} </li>
    );
        return(
            <div className="dropdown">
                <button className="dropbtn btn">{activeItem}</button>
                <ul className="dropdown-content">
                    {dropdownItems}
                </ul>
            </div>
        );   
};

export {Dropdown};

