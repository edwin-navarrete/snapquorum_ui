import React from 'react';

export const host = '192.168.1.22'
// export const host = '192.168.68.103'
// export const host = '192.168.68.105'
const GlobalContext = React.createContext({
    "host": host,
});

export default GlobalContext;
