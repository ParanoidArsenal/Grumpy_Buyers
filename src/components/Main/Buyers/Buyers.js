import React, { useState, useEffect} from 'react';
import './Buyers.css';
import {BrowserRouter, Route, Switch, Redirect, useRouteMatch} from 'react-router-dom';

const Buyers = () => {
    console.log(`Buyers`);
    return(
        <div>
            <h1>
            Buyers
            </h1>
        </div>
    );
    
};
export {Buyers};