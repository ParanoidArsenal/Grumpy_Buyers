import React, { useState, useEffect} from 'react';
import './Buyers.css';
import {BrowserRouter, Route, Switch, Redirect, useRouteMatch} from 'react-router-dom';
import {buyersList} from './BuyersList';
import {Dropdown} from './Dropdown/Dropdown';

const Buyers = () => {

    const sortTypes = [
        // 'По умолчанию',
        'По возрастанию среднего чека',
        'По убыванию среднего чека',
        'По возрастанию кол-ва покупок',
        'По убыванию кол-ва покупок',
        'По возрастанию общей выручки',
        'По убыванию общей выручки',
    ];

    const [sortType, setSort] = useState(sortTypes[0]);

    const [filterValue, setFilterValue] = useState('');
    
    const listDivisionTypes = [5, 10, 15];

    const [listDivision, setListDivision] = useState(listDivisionTypes[0]);


    const filterList = (listToFilter, filter) => {
        if(!filter){
            return listToFilter;
        }
        const regexp = new RegExp(filter, "i");

        return listToFilter.filter(item => item.name.match(regexp));
    };

    const sortList = (listToSort, sort) => {
        switch(sort){
            // case 'По умолчанию':
            //     listToSort.sort( (a,b) => a.defaul_index - b.defaul_index)
            //     break;
            case 'По возрастанию среднего чека':
                listToSort.sort( (a,b) => a.averageCheck - b.averageCheck)
                break;
            case 'По убыванию среднего чека':
                listToSort.sort( (a,b) => b.averageCheck - a.averageCheck)
                break;
            case 'По возрастанию кол-ва покупок':
                listToSort.sort( (a,b) => a.purchaseNumber - b.purchaseNumber)
                break;
            case 'По убыванию кол-ва покупок':
                listToSort.sort( (a,b) => b.purchaseNumber - a.purchaseNumber)
                break;
            case 'По возрастанию общей выручки':
                listToSort.sort( (a,b) => a.total - b.total)
                break;
            case 'По убыванию общей выручки':
                listToSort.sort( (a,b) => b.total - a.total)
                break;
            default:
                break;
        };
        return listToSort;
    };


    

        let buyersListItem = buyersList;
        buyersListItem = sortList(buyersList, sortType);
        buyersListItem = filterList(buyersList, filterValue);
        buyersListItem = buyersListItem.map((item, index) =>
        <tr key={index}>
            <td> {item.id} </td>
            <td> {item.name} </td>
            <td> {item.averageCheck} </td>
            <td> {item.purchaseNumber} </td>
            <td> {item.total} </td>
        </tr>);

        console.log(Array.apply(null, Array(5)).map(function (x, i) { return i; }));
        console.log('!!!!!W!!W!W');
        let pagination = <ul className='pagination'>
                        <li data-pev>{'<'}</li>
                        {/* {for(let i=0; i < listDivision; i++ )  } */}
                        <li data-page>1</li>
                        <li data-page>2</li>
                        <li data-pev>{'>'}</li>
        </ul>


        return(
           <>
                <div className = 'bar-container'>

                        <span>Сортировать:</span>
                        <Dropdown activeItem = {sortType} items = {sortTypes} setActive = {setSort} />

                        <span>Фильтрация по имени:</span>
                        <input type = 'text' value = {filterValue} onChange = {(e) => setFilterValue( e.target.value)}/>

                        <span>Отобразить покупателей по:</span>
                        <Dropdown activeItem = {listDivision} items = {listDivisionTypes} setActive = {setListDivision} />

                </div>
                <div className = 'table-container'>
                    <table className="buyers-table">
                        <thead>
                            <tr>
                                <th>ID Покупателя</th>
                                <th>Имя покупателя</th>
                                <th>Средний чек</th>
                                <th>Количество покупок</th>
                                <th>Общая выручка</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buyersListItem}  
                        </tbody>
                    </table>
                </div>
                {pagination}
            </>
        );
    
};
export {Buyers};