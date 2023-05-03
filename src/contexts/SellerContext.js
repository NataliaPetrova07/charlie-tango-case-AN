import { createContext, useReducer } from "react";

export const SellerContext = createContext();
export const DispatchContext = createContext();

const initialState = {
    //change tis code with the form fields/seller info and id from the fakebuyers
    //buyer selection
    price: 0,
    size: '',
    zip: '',
    type: '',
    id: '',
    name: '',
    email: '',
    phone: '',
    //add a field for address? - consetn is a boolean
    consent: false,
};

function reducer(state, action) {
    switch (action.action) {
        case "ADD_INFO":
            console.log(state, action)
            return {


            };
    }

};

/* 
case "mobile":
    state.mobile.value = payload.newValue;
    state.mobile.error = payload.error;
    return;
  case "email":
    state.email.value = payload.newValue;
    state.email.error = payload.error;
    return; */

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