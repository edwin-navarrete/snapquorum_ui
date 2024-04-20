import React from 'react';

export const host = process.env.REACT_APP_API_HOST
export const ui_host = process.env.REACT_APP_GUI_URL

console.log(`REACT_APP_API_HOST: ${process.env.REACT_APP_API_HOST}`)
console.log(`REACT_APP_GUI_URL: ${process.env.REACT_APP_GUI_URL}`)
const GlobalContext = React.createContext({
    "host": host,
});

export default GlobalContext;
