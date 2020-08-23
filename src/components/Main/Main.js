import React, { useState, useEffect} from 'react';
import './Main.css';
import {homeURL, getSession} from '../../helper';
import {Sidebar} from '../Sidebar/Sidebar';
import {BrowserRouter, Route, Switch, Redirect, useRouteMatch, Link} from 'react-router-dom';
import {Terminals} from './Terminals/Terminals';
import {Buyers} from './Buyers/Buyers';

const Main = ({history}) => {
    const session = getSession();
    let { path, url } = useRouteMatch();

    useEffect(() =>{
        if(!session){
            history.push('/Login');
        }
    }, [history]);

    return(
        <>
        <Sidebar {...session}>
                <Link to={`${url}/terminals`}>Терминалы</Link>
                <Link to={`${url}/buyers`}>Покупатели</Link>
         </Sidebar>
        <div className = 'main-page-container'>
        <Switch>
            <Route exact path ={path}> 
                <Redirect to = {`${path}/buyers`}/>
            </Route>
            <Route path = {`${path}/terminals`}>
                <Terminals />
            </Route>
            <Route path = {`${path}/buyers`}>
                <Buyers />
            </Route>
            <Redirect to={"/404"} />

        </Switch>

        </div>
        </>
    );
    
};
export {Main};