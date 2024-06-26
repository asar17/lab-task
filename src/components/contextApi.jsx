"use client";
import { createContext, useContext, useState } from 'react';

const ThemeContext= createContext();

export const ThemeProvider = ({children}) =>{
    const [count22, setCount22]=useState(0)
    const [cost, setCost ] =useState([
        {
            "Cost - Weekday":"00.00",
            "Cost - Weekend":"00.00",
            "B2B - Weekday (Selling)":"00.00",
            "B2B - Weekend (Selling)":"00.00",
            "B2C - Weekday (Selling)":"00.00",
            "B2C - Weekend (Selling)":"00.00",

        }
        
    ]);
    const [selectedMonth, setSelectedMonth ]= useState([
        {
          dayNumber:'dd',
          month:'mm',
          day:'Weekday'
        }
    ]);
    const [datePicker,setDatePicker]=useState(false)
    
    return(
        <ThemeContext.Provider 
          value={{
            cost:[cost, setCost], 
            datePicker:[datePicker,setDatePicker],
            selectedMonth:[selectedMonth,setSelectedMonth],
            count:[count22,setCount22]
           }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);

