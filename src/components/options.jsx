"use client"
import {useState, React,useEffect} from 'react'
import {SelectedOption, OptionIcons, OptionsForm } from './index';
import {useTheme} from './contextApi'



const Options = ({option}) => {
    const [selectOption,setSelectOption]= useState("");
    const [refresh]=useTheme().refresh;   
      
    return(
        <div className="flex flex-col  max-sm:w-[100vw] relative ">
                <p  className="text-red-600 relative max-sm:text-[.8rem] max-sm:text-center">{refresh}</p>
                <h2 className={`max-sm:p-2 `} >(المدينة) ثنائي</h2>
                <div className="flex  max-sm:flex-col   justify-between md:gap-6  w-full">
                    <OptionsForm option={option} selectOption={setSelectOption}/>
                    <div className="flex max-sm:justify-center  max-sm:p-4">
                      {selectOption === "" && <OptionIcons select={selectOption}/>}
                    </div>
                </div>
               
                <SelectedOption select={selectOption} />
        </div>
    )

}
export default Options;