"use client"
import {useEffect,useState} from 'react'
import {useTheme} from './contextApi'
const OptionsForm = ({option,selectOption}) =>{
    const [options, setOptions]=useState(option)
    const [cost,setCost]=useTheme().cost;
    const [datePicker,setDatePicker]=useTheme().datePicker;
    useEffect(()=>{
        setOptions(option)

    },[options])
    return(
        <>
           <form className="flex flex-row max-sm:justify-center max-sm:gap-8 md:gap-6  w-[50%] max-sm:w-full  ">
                      {options.map((op)=>{
                        return(
                            <div key={op} className="flex max-sm:gap-1 gap-2 justify-center items-center ">
                                <input  
                                        type="radio" 
                                        name="choose" 
                                        id={op}
                                        value={op} 
                                        onClick={(e)=> {selectOption(e.target.value); setCost([{
                                                "Cost - Weekday":"00.00",
                                                "Cost - Weekend":"00.00",
                                                "B2B - Weekday (Selling)":"00.00",
                                                "B2B - Weekend (Selling)":"00.00",
                                                "B2C - Weekday (Selling)":"00.00",
                                                "B2C - Weekend (Selling)":"00.00",

                                        }]);  setDatePicker(datePicker && false); }}  
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                 /> 
                                <label htmlFor={op}>{op}</label>
                            </div>

                        )
                      })}   
   
             </form>
        </>
    )
}
export default OptionsForm
