import React, { Fragment, useState,useContext } from 'react'
import { IoIosArrowDropup, IoIosArrowDropdown } from 'react-icons/io'
import { ThemeContext, themes} from '../../shared/contexts/ThemeContext';

const SortButtons = (props) => {
    const { currentTheme, toggleTheme } = useContext(ThemeContext);
    console.log(currentTheme);

    const [isUp, setIsUp] = useState(false);

    const toHightHandler = () => {
        setIsUp(true);
        props.onHighPrice()
    };

    const toLowHandler = () => {
        setIsUp(false);
        props.onLowPrice()
    };

    return(
        <Fragment>
            {
                isUp ?  <div className='sort-arrow' style={{color:currentTheme.cardBorderBottomColor}}>
                            <button onClick={toLowHandler}> 
                            <span style={{color:currentTheme.cardBorderBottomColor}}>Price order High-to-Low</span><IoIosArrowDropdown /></button>
                        </div>
                    :   <div className='sort-arrow'>              
                            <button onClick={toHightHandler}> 
                            <span style={{color:currentTheme.cardBorderBottomColor}}>Price order Low-to-High</span><IoIosArrowDropup /></button>
                        </div>
            }         
        </Fragment>
    )
}

export default SortButtons;