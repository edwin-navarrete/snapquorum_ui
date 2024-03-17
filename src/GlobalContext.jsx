import React from 'react';

export const host = '192.168.1.86'
export const ui_host = 'localhost'


const GlobalContext = React.createContext({
    "host": host,
});

export default GlobalContext;
