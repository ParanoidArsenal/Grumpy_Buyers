import React, { useState, useEffect} from 'react';
import './Terminals.css';
import {BrowserRouter, Route, Switch, Redirect, useRouteMatch} from 'react-router-dom';

const Terminals = () => {
    return(
        <div className="terminal-form-container">
            <form className="terminal-form">
                <label>
                    <span><b>Название терминала:</b></span>
                <input type="text" name="login"  placeholder="Введите название терминала" />
                    {/* // value = {login} */}
                    {/* // onChange={e => handleLoginChange( e.target.value)} /> */}
                </label>
                <label>
                <span><b>Описание:</b></span>
                <input type="text" name="password" placeholder="Введите описание терминала" />
                    {/* // value = {password} */}
                    {/* // onChange = {e => handlePasswordChange(e.target.value)}/> */}
                </label>
                {/* <input className = {`btn ${isActive}`} type="submit" value="Отправить" onClick={handleClick} /> */}
                <input className = {`terminal-btn`} type="submit" value="Добавить" onClick={(e) => e.target.preventDefault()} />
            </form>
        </div>
    );
    
};
export {Terminals};