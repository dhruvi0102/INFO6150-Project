import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import DateForm from './DateForm';
import { AuthContext } from '../../shared/contexts/AuthContext';
import { ThemeContext, themes} from '../../shared/contexts/ThemeContext';

const RentForm = (props) => {
    const { currentTheme, toggleTheme } = useContext(ThemeContext);
    const { userId, isLoggedIn } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName] = useState('')

    const order = {
        firstName: firstName,
        lastName: lastName,
        startDate: startDate,
        endDate: endDate,
        Rental: props.RentalId,
        customer: userId
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        props.onOrderHandler(order);
        setFirstName('');
        setLastName('')
    }

    return(
        <div className='rent-wrapper' style={{backgroundColor : currentTheme.formColor}} >
            <h3>HouseHop Rental Form</h3>
            <p>please fill the names of the guests</p>
            <form className='rent-form' onSubmit={onHandleSubmit}>
                <input type='text' style={{color: currentTheme.formContentColor}} name='firstName' value={firstName} placeholder='First Name' 
                required onChange={(e) => setFirstName(e.target.value)}/>
                <input type='text' style={{color: currentTheme.formContentColor }} name='lastName' value={lastName} placeholder='Last Name'
                required onChange={(e) => setLastName(e.target.value)}/>
                <DateForm  startDate={startDate} 
                     setStartDate={setStartDate}
                               endDate={endDate}
                         setEndDate={setEndDate}/>
                {
                    isLoggedIn 
                    ? <input type='submit' value='Rent'  />
                    : <p className='back-login'><NavLink to='/auth' >Log-in</NavLink></p>
                }
                
            </form>
        </div>
    )
}

export default RentForm;