"use client"
import DatePicker from "react-multi-date-picker";
import React, { useEffect, useState } from "react";
import {useTheme} from './contextApi'



const CostTable = () =>{
   const [cost,setCost]=useTheme().cost;
   const [selectedMonth,setSelectedMonth]=useTheme().selectedMonth;
   let initialTable= Array.from({length: 12}, () => selectedMonth.reduce((month)=>month));
  
useEffect(()=>{
  setCost(cost)
},[cost])

const InitialTableBody= ({option,costValue, inputValueDay,inputValueEnd,class22}) =>{
  return(
   <>
        <th className={`  relative flex max-sm:w-[100%] max-sm:h-[9.5%] md:min-w-[6.8%] lg:min-w-[5.8%] outline outline-solid outline-gray-200 italic  items-start px-2 pb-2 ${costValue==='B2B'|| costValue==='B2C'? 'text-[.8rem] font-semibold': 'text-[1.1rem] font-thin'} text-black pt-2 max-sm:justify-center max-sm:items-center max-sm:text-xl`}>{costValue}</th>
        <th className={`flex max-sm:flex-col relative flex-1 text-white font-light  md:h-14 text-sm  text-start italic ${class22} `}>

              {option.slice(0,11).map((month,i)=>
                ( 
                  <div className={` flex  flex-1 relative  justify-center  items-center outline outline-solid outline-gray-200  h-full px-1  box-border  lg:px-2 xl:px-2`} key={i}>
                      {/* <input type="text" value={month.day !=='Friday'? cost?.map((cost)=>cost[inputValueDay]):cost?.map((cost)=>cost[inputValueEnd]) } name={month.day !== 'Friday'?inputValueDay:inputValueEnd} className="flex-1 text-gray-600 text-start pr-1  border-solid border-gray border max-sm:size-10 md:size-10 md:h-6  text-center lg:size-14 lg:h-6 xl:size-28  xl:h-7 h-auto rounded-md" onChange={()=>{}}/> */}
                      <div className="text-gray-500 border border-solid border-gray-300 w-[100%] h-8 rounded-lg flex items-center px-2 text-[.7rem] bg-white">
                        <p>
                          { month.day !=='Friday'? cost?.map((cost)=>cost[inputValueDay]):cost?.map((cost)=>cost[inputValueEnd])}
                        </p>
                      </div>
                  </div>
                )  
              )}
        </th>
   </>
  )
}

  const CreateTableBody = ({costValue, inputValueDay,inputValueEnd,class22}) =>{
    return(
        <>
        
        
          {selectedMonth.length >1 ? 
              (
                <InitialTableBody  option ={selectedMonth} costValue={costValue} inputValueDay={inputValueDay} inputValueEnd={inputValueEnd}  class22={class22} />
              ): 
              (
                <InitialTableBody  option={initialTable} costValue={costValue} inputValueDay={inputValueDay} inputValueEnd={inputValueEnd}  class22={class22}/>
              )  
          } 
        </>     
    )
  }


  
  const  InitialTableHeader= ({option}) =>{
    return(
      <>
         <th className="flex flex-row flex-1 max-sm:flex-col gap-0.5 box-border  ">
                                {option.slice(0,11).map((month,i)=>(
                                <div className={` ${month.day=== 'Friday' ? "bg-[#0093AF] text-black":"bg-[#71797E] text-white"} md:text-[.5rem] lg:text-[.6rem] xl:text-[0.8rem] lg:w-[200%]   flex-1 flex  font-light w-[50%] text-sm  text-start flex flex-col justify-center items-start lg:gap-.5 italic px-2 py-2  max-sm:w-[100%]`} key={i}> 
                                  <span>{month.month.toString().length === 1 ? "0"+month.month:month.month}-{month.dayNumber}</span>
                                  <span>٩ شوال</span>
                                  <span>{ month.day}</span>
                                </div> 
   
                               ))}
                            
          </th>
      </>
    )
  }

    return(
        <div className="  flex flex-col relative  h-auto gap-2 mt-2 w-full relative  ">
                 <>
                  <table className="relative max-sm:w-screen  h-auto  flex max-sm:flex-row md:flex-col  max-sm:px-2">
                    <thead className="outline outline-solid outline-gray-200    h-auto  relative  ">
                      <tr className="flex flex-row  gap-0.5 md:w-[100%] max-sm:flex-col relative">
                          <th className="lg:w-[5.7%]  outline-2 min-h-20  font-thin italic flex items-end relative  px-2 pb-2  xl:text-lg text-gray-500 bg-gray-100 max-sm:text-[1.4rem] max-sm:items-center max-sm:p-7 max-sm:justify-center relative" >التاريخ</th>
                          {selectedMonth.length >1 ? 
                              (
                                <InitialTableHeader option ={selectedMonth}  />
                              ): 
                              (
                                <InitialTableHeader option={initialTable} />
                              )  
                          } 
                        </tr>
                    </thead>

                    <tbody className="flex flex-col max-sm:flex-row  max-sm:w-full">
                      <tr className="flex flex-1 max-sm:flex-col">
                        <CreateTableBody 
                          costValue="التكلفة" 
                          inputValueDay="Cost - Weekday"
                          inputValueEnd="Cost - Weekend"
                        />
                      </tr>
                      <tr className="flex flex-1 max-sm:flex-col">
                        <CreateTableBody 
                          costValue="B2B"
                          inputValueDay="B2B - Weekday (Selling)"
                          inputValueEnd="B2B - Weekend (Selling)"
                          class22="bg-[#E5E4E2]"
                        />
                      </tr>
                      <tr className="flex flex-1 max-sm:flex-col">
                        <CreateTableBody 
                          costValue="B2C"
                          inputValueDay="B2C - Weekday (Selling)"
                          inputValueEnd="B2C - Weekend (Selling)"
                        />
                      </tr>
                    </tbody> 
                  </table>
                  <div className="w-full h-1 bg-gray-100 my-6 "/>
                  </>
        </div>
    
)
}
export default CostTable