import React,{useContext } from 'react';
import { ThemeContext, themes} from '../../contexts/ThemeContext';
const CarInfoCard = (props) => {
    const { currentTheme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className='card-wrapper' >
            <img src={props.src} alt={props.alt}/>
            <p onClick={() => props.clicked(props.name)} style= {{borderColor:currentTheme.cardBorderBottomColor}}>{props.text}</p>
        </div>
    )
}

export default CarInfoCard;