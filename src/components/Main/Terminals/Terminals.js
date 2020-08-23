import React, { useState, useEffect} from 'react';
import './Terminals.css';
import {BrowserRouter, Route, Switch, Redirect, useRouteMatch} from 'react-router-dom';
import {Terminal} from './Terminal/Terminal';
import { nanoid } from "nanoid";

const Terminals = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [terminalList, setTerminalList] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        let newTerminal = {name, description, id: "terminal-" + nanoid()};
        setTerminalList([...terminalList, newTerminal])
    };

    const removeItem = (id) => {
        let new_terminalList = terminalList.filter(item => item.id !== id);
        setTerminalList(new_terminalList);
    };

    const terminalListComponent = terminalList.map(item => 
        // <Terminal name ={name} description = {description} />);
        <Terminal key = {item.id} {...item} removeItem = {removeItem} />);

    return(
        <>
            <form className="terminal-form">
                <label>
                    <span><b>Название терминала:</b></span>
                <input type="text" name="name"  placeholder="Введите название терминала"
                     value = {name}
                     onChange={e => setName(e.target.value)} />
                </label>
                <label>
                <span><b>Описание:</b></span>
                <input type="text" name="description" placeholder="Введите описание терминала"
                    value = {description}
                    onChange = {e => setDescription(e.target.value)}/>
                </label>
                <input className = {`terminal-btn`} type="submit" value="Добавить" onClick={(e) => handleClick(e)} />
            </form>
            <h1 className="title">Список терминалов:</h1>
            <div className="terminals-container">
                {terminalListComponent}
            </div>
            </>
    );
    
};
export {Terminals};