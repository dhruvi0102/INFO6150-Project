import React, { Fragment,useContext } from 'react';
import { ThemeContext, themes} from '../../contexts/ThemeContext';
const Pagination = (props) => {

    const pageNumers = [];
    
    for(let i = 1; i <= Math.ceil(props.totalItems/props.itemsPerPage); i++ ){
        pageNumers.push(i)
    }
    const { currentTheme, toggleTheme } = useContext(ThemeContext);
    return (
        <Fragment>
            {pageNumers.length && 
            <ul className='pagination-nav'>
                <p>pages</p>
                {pageNumers.map(number => (
                    <li key={number} className='page-number'>
                        <button onClick={() => props.pagination(number)} className='page-button' style={{color: currentTheme.color}}>{number}</button>
                    </li>
                ))}
            </ul> }
        </Fragment>
    )

}

export default Pagination;