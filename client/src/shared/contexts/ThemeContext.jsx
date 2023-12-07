import React, { createContext, useState } from 'react';
//import img1 from '../../assets/randiimg.webp'
//import img2 from '../../assets/randiimg.jpeg'
const color = '#1B263B';

export const themes = { 
    
    light: {
        backgroundColor: '#FFFFFF',
        color: '#2F3C7E',
       imagePeecheki: img2,
       cardColor:  "rgba(215, 215, 215, 0.318)",
       cardFontColor: '#2F3C7E',
       cardBorderBottomColor:'black',
       formColor : "white",
       formContentColor: "#2F3C7E"
    },
    dark: {
        backgroundColor: 'black',
        color: '#FBEAEB',
        imagePeecheki: img1,
        cardColor: "white",
        cardFontColor: '#2F3C7E',
        cardBorderBottomColor:'red',
        formColor : "red",
        formContentColor: "white"

    }
    
}

export const ThemeContext = createContext(themes.light);

const ThemeContextProvider = (props) => {

    const [ currentTheme, setCurrentTheme ] = useState(themes.light);

    const toggleTheme = () => {
        currentTheme === themes.light ? 
        setCurrentTheme(themes.dark):
        setCurrentTheme(themes.light)
    }

    return (
        <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider