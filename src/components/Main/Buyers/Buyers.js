import React, { useState, useEffect} from 'react';
import './Buyers.css';
import './Buyer.css';
import {Redirect, Route, Switch, Link, useRouteMatch, useParams} from 'react-router-dom';
import {buyersList} from './BuyersList';
import {Dropdown} from './Dropdown/Dropdown';
import {Pagination} from './Pagination/Pagination';

const Buyers = () => {

    let { path, url } = useRouteMatch();

    const sortTypes = [
        // 'По умолчанию',
        'По возрастанию среднего чека',
        'По убыванию среднего чека',
        'По возрастанию кол-ва покупок',
        'По убыванию кол-ва покупок',
        'По возрастанию общей выручки',
        'По убыванию общей выручки',
    ];

    const handleFilterChange = (value) =>{
        setFilterValue(value);
    };

    const [sortType, setSort] = useState(sortTypes[0]);

    const [filterValue, setFilterValue] = useState('');
    
    const listDivisionTypes = [5, 10, 15];

    const [listDivision, setListDivision] = useState(listDivisionTypes[0]);
    const [activePage, setActivePage] = useState(1);


    const filterList = (listToFilter, filter) => {
        if(!filter){
            return listToFilter;
        }
        const regexp = new RegExp(filter, "i");

        return listToFilter.filter(item => item.name.match(regexp));
    };

    const sortList = (listToSort, sort) => {
        switch(sort){
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

        <tr key={item.id}>
        <td>
            <Link to={`${url}/${item.id}`}>
                {item.id}
            </Link>
        </td>
            <td> {item.name} </td>
            <td> {item.averageCheck} </td>
            <td> {item.purchaseNumber} </td>
            <td> {item.total} </td>
        </tr>);

        let totalPageNumber = Math.max(Math.ceil(buyersListItem.length/listDivision), 1);


        let activePageNumber = 1;

        if(activePage > totalPageNumber){
            activePageNumber = 1;
            setActivePage(1);
        }
        else{
            activePageNumber = activePage;
        }
        buyersListItem = buyersListItem.filter((item, index) => (
            index >= (activePage-1)*listDivision && index < activePage*listDivision
        ));

        return(
           <Switch>
                <Route exact path={path}>
                    <div className = 'bar-container'>
                            <span>Сортировать:</span>
                            <Dropdown activeItem = {sortType} items = {sortTypes} setActive = {setSort} />

                            <span>Фильтрация по имени:</span>
                            <input className = 'filter-input' type = 'text' value = {filterValue} onChange = {(e) => handleFilterChange(e.target.value)}/>
                            
                            <span>Отобразить покупателей по:</span>
                            <Dropdown className = 'listDivision' activeItem = {listDivision} items = {listDivisionTypes} setActive = {setListDivision} />
                    </div>
                    <h1 className="title">Покупатели:</h1>
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
                    <Pagination {...{activePageNumber, totalPageNumber, setActivePage}} />
                </Route>
                <Route exact path = {`${path}/:buyerID`}>
                    <BuyerPage buyersList = {buyersList} />
                </Route>
            </Switch>
        );
    
};


function BuyerPage({buyersList}){
    let {buyerID} = useParams();
    const buyer = buyersList.find(item => item.id === buyerID);
    if(!buyer)
        return(
            <Redirect to={"/404"} />
        )
    else{
        const {id, name, averageCheck, purchaseNumber, total} = buyer;
        return(
            <div className = 'buyer-page-container'>
                <div className = 'buyer-container'>
                    <p className=""><span><b>ID Покупателя:</b></span> {id}</p>
                    <p className=""><span><b>Имя покупателя:</b></span> {name}</p>
                    <p className=""><span><b>Средний чек:</b></span> {averageCheck}</p>
                    <p className=""><span><b>Количество покупок:</b></span> {purchaseNumber}</p>
                    <p className=""><span><b>Общая выручка:</b></span> {total}</p>
                </div>
            </div>
        );
    }

};

export {Buyers};