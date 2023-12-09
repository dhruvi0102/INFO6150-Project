import React, { useState } from 'react'


const SearchForm = (props) => {

    const [ name, setName ] = useState('');

    const onSubmitNameHandler = (e) => {
        const convName = name.toLocaleLowerCase();
        const arr = convName.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        e.preventDefault();
        const convName2 = arr.join(" ");
        props.onSubmitNameHandler(convName2);
        console.log(name);
        setName('');
        
    };

    return(
        <div className='search-form'>
            <form onSubmit={onSubmitNameHandler}>
                    <input type='text' name='name' value={name} placeholder='Enter name.. model.. or type..'
                    required onChange={(e) => setName(e.target.value)} />
                    {
                        props.onSearch 
                        ? <button className='clear-search' onClick={props.onSearchClear} style = {{backgroundColor: 'white'}}>clear</button>
                        : <input type='submit' value='search' style = {{backgroundColor: 'white'}} />
                    }                   
            </form>
        </div>
    )
}

export default SearchForm;