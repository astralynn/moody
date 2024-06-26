import axios from "axios";
import { createContext, useState, useEffect } from "react"


export const Context = createContext();

export const ContextProvider = ({children}) => {
    const APIUrl = "http://localhost:9000";
    const [Data, setData] = useState([]);

    useEffect(() =>{
            try {
                axios.get(`${APIUrl}/products`).then(response => {
                    const data = response.data;
                    setData(() => data && data.length ? [...data] : [])
                }).catch(error => console.error(error))
                
            } catch (error) {
                alert(error?.messege);
                console.warn(error);
            }
    }, []);

    const values = {
        APIUrl, Data, setData
    }

    return <Context.Provider value={values}>
        {children}
    </Context.Provider>
}
