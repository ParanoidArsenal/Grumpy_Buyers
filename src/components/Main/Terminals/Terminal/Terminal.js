import React, { useState, useEffect} from 'react';
import './Terminal.css';

const Terminal = ({name, description, id, removeItem}) => {

    // const [name, setName] = useState('');

    // const handleClick = (e) => {
    // };

    return(
        <div className="terminal-item">
            <p className="terminal-text"><span><b>Название:</b></span> {name}</p>
            <p className="terminal-text"><span><b>Описание:</b></span> {description}</p>
            <button onClick={(e) => {e.preventDefault(); removeItem(id)}}>Удалить</button>
        </div>
    );
    
};
export {Terminal};