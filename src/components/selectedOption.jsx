"use client"
import { cost } from '../../utilies/index'
import { useState, useEffect} from 'react'
import {OptionIcons, SelectedOptionForm } from './index'
const SelectedOption = ({select}) => {
    const [costAll, setCostAll]=useState([]);
    useEffect(()=>{
        for(let i =0; i< cost.length; i++){
            Object.keys(cost[i]).join() === select &&(setCostAll(Object.values(cost[i])))
       }

    },[select])
    return(
        <>
         {select && (
            <div className="flex  max-sm:p-4 w-full flex max-sm:mt-2 md:mt-4 relative max-sm:flex-col md:flex-col lg:flex-row lg:justify-between  gap-2 text-sm">
                <div className="max-sm:w-full md:w-full lg:w-[60%]"> 
                    <SelectedOptionForm costAll={costAll}  setCostAll={setCostAll}/>
                 </div> 
                 <div className="relative items-center flex max-sm:p-2 max-sm:justify-center max-sm:w-full  md:justify-end md:items-end max-md:w-full lg:w-[30%]">
                   <OptionIcons/>
                 </div> 
            </div>
       
         )}
         </>
       
    )
}
export default SelectedOption