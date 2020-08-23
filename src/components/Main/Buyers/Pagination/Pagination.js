import React from 'react';
import './Pagination.css';

function Pagination( {activePageNumber, totalPageNumber, setActivePage}) {
    // const pages = Array.apply(null, Array(5)).map(function (x, i) { return i; })
    let pages = [];
    for(let i = 1; i <= totalPageNumber; i++){
        if(i === activePageNumber)
            pages.push(<li key={i} className = 'acivePage' data-page onClick = {() => setActivePage(i)}> {i} </li>);
        else
            pages.push(<li key={i} data-page onClick = {() => setActivePage(i)}>  {i} </li>);
    }

    const turnLeft = (numb, max) => {
        if(numb > max || numb < 1)
            return 1;
        else if(numb === 1)
            return max;
        else 
            return numb - 1;
    };

    
    const turnRight = (numb, max) => {
        if(numb > max || numb < 1)
            return 1;
        else if(numb === max)
            return 1;
        else 
            return numb + 1;
    };

  return (
    <ul className='pagination'>
        <li data-pev onClick = {() => setActivePage(turnLeft(activePageNumber, totalPageNumber))} >{'<'}</li>
        {pages}
        <li data-pev onClick = {() => setActivePage(turnRight(activePageNumber, totalPageNumber))} >{'>'}</li>
    </ul>
  );
}

export {Pagination};
