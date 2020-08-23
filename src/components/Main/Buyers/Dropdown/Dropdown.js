import React from 'react';
import './Dropdown.css';

const Dropdown = ({className, activeItem, items, setActive}) => {
    const dropdownItems = items.map((item, i) => 
        <li key = {i} onClick = {() => setActive(item)}> {item} </li>
    );
        return(
            <div className={`dropdown ${className}`}>
                <button className={`dropbtn btn`}>{activeItem}</button>
                <ul className={`dropdown-content ${className}`}>
                    {dropdownItems}
                </ul>
            </div>
        );   
};

export {Dropdown};

