import axios from 'axios';
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = '$';


    // get token from local storage
    const [authHeader, setAuthHeader] = useState(localStorage.getItem('token') || '');


    // get doctors data
    const [doctors, setDoctors] = useState([]);
    const getAllDoctors = async () => {
        try {
            const response = await axios.get("http://localhost:3000/doctors/allDoctors", { headers: { 'Authorization': `${authHeader}` } });
            const { data } = response
            if (data.message === "success") {
                setDoctors(data.data);
                console.log(data);
            } else {
                console.log(data.message);
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    };





    if (authHeader) {
        useEffect(() => {
            getAllDoctors();
        }, [authHeader]);
    }


    const value = {
        doctors,
        currencySymbol,
        authHeader, setAuthHeader,
        getAllDoctors,
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;