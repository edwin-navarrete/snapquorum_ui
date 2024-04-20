import React from 'react';

export const host = process.env.REACT_APP_API_HOST

console.log(`REACT_APP_API_HOST: ${process.env.REACT_APP_API_HOST}`)
const GlobalContext = React.createContext({
    "host": host,
});

export default GlobalContext;
