import React, { createContext, useState } from 'react';

export const Context = createContext("")
const Contexts = ({ children }) => {

    const [loadCartItems, setLoadCartItems] = useState(false)



    const contextValues = { loadCartItems, setLoadCartItems }

    return (
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
    );
};

export default Contexts;