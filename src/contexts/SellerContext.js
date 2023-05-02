import { createContext, useReducer } from "react";

export const SellerContext = createContext();
export const DispatchContext = createContext();

const initialState = {
    //change tis code with the form fields/seller info and id from the fakebuyers
    basket: []
};
function reducer(state, action) {
    switch (action.action) {
        case "ADD_INFO":
            console.log(state, action)
            return [];
    }

};


export const SellerProvider = ({ children }) => {
    //useReducer it is just a useState that returns a state and an update method
    const [data, dispatch] = useReducer(reducer, initialState);
    return (
        <SellerContext.Provider value={data}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </SellerContext.Provider>
    );
};