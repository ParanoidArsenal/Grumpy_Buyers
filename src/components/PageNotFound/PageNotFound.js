import React from 'react';
import './PageNotFound.css';

const PageNotFound = ({history}) => {

    return(
        <div className = 'page-container page-404'>
            <div className = 'page-404'>
                <h1>Ошибка 404</h1>
                <h3> Страница не найдена!</h3>
            </div>
        </div>
    );
    
};
export {PageNotFound};