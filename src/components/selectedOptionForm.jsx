"use client"
import {useTheme} from './contextApi'
import { useEffect ,useState, useRef} from 'react'
import DatePicker from "react-multi-date-picker";

const SelectedOptionForm = ({costAll,setCostAll}) => {
    const [calender,setCalender]=useState([{}])
    let [index,setIndex] =useState(null);
    let [count,setCount]= useState(null);
    const [cost,setCost]=useTheme().cost;
    //const [count,setCount]=useTheme().count;
    const [datePicker,setDatePicker]=useTheme().datePicker;
    const [selectedMonth,setSelectedMonth]=useTheme().selectedMonth;
    const divRef=useRef()
    console.log('div ref',divRef)


  
    const handleCost = (e) => {
        setTimeout(()=>{
    
        const index=cost.findIndex((co)=>co[e.target.name])
        if(index > -1) {

            cost.splice(index,1)
            setCost([...cost,{
                [e.target.name]:Number([e.target.value]).toFixed(2) 
             }])
         }
         else{
            setCost([...cost,{
                [e.target.name]:Number([e.target.value]).toFixed(2) 
             }])
         }
        },2000)
        
        
    }
   
  

//to get month info
const setDate = (e,costItem) =>{

    costItem === 'من' ? (
        setCalender([...calender,{ من:e[0].day}])
    ):(
        setCalender([...calender,{ الي :e[0].day}])
    )


    let daysArray=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let indexDay= daysArray.indexOf(e[0].weekDay['name']);
    setIndex(indexDay)

    //get the day
    // setSelectedDay([...selectedDay,{
    //           ['monthNumber']:e[0].month['number'],
    //           ['dayNumber']:e[0].day,
    //           ['weekday']:e[0].weekDay['name'],
    //           ['monthLength']:e[0].month['length']
    // }])

    let arr=[];
    for(let i=e[0].day;i<=e[0].month['length'];i++){

        if(i === e[0].day){
         arr.push({
          ['dayNumber']:i,
          ['month']:e[0].month['number'],
          ['day']:e[0].weekDay['name']
         })
        }
         else{
           
            arr.push({
              ['dayNumber']:i,
              ['month']:e[0].month['number'],
              ['day']:index> daysArray.length-1? daysArray[count++]:daysArray[index++]
  
             })
        }
        
    }
   
      setSelectedMonth(arr)
  }
  useEffect(()=>{
    setCost(cost)
    setCalender(calender)
  },[cost,calender])
console.log('calender start end day',calender)

   
    return(
        <>
             <form className={`relative flex max-sm:flex-col gap-4 max-sm:text-center max-sm:gap-5  md:flex-wrap lg:flex-warp xl:flex-wrap md:gap-4 lg:gap-1 flex-1 xl:gap-4   xl:max-w-[95%]  `}>          
                        {costAll[0]?.map((costItem,i)=>(
                            <div className="relative flex flex-col gap-1 " key={i+"x"}>
                              <label htmlFor={costItem} className="text-[.65rem] font-semibold">{ costItem }</label>
                              <div className="flex flex-row justify-end items-center relative  text-sm ">
                               <input  type="number"  id={costItem} name={costItem}   placeholder={costItem === 'من' ? 'من':"" || costItem === 'الي'?'الي':""} className={`flex max-sm:w-full  border-2 border-solid border-gray md:size-44 md:h-auto rounded-md lg:h-auto xl:h-auto lg:size-44 xl:size-36 flex-1 ${costAll[0]?.length === 6 && 'xl:size-[150px] '} lg:h-auto xl:size-56 xl:h-auto text-lg relative p-1`} onChange={handleCost}/>
                                { costItem === 'الي' || costItem === 'من' ? 
                                   (
                                    <>
                                    
                                    {/* <DatePicker defaultValue={new Date()} value={calender} inputIcon={'one'}  onChange={(e)=>{setDate(e,costItem);} }/> */}

                                    <svg  onClick={()=>{setDatePicker(!datePicker); }} className=" absolute w-4 h-4  text-gray-500 dark:text-gray-400 ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                    {datePicker && <div ref={divRef} tabIndex={1} className=" max-sm:w-60 max-sm:ml-10  md:w-28 md:ml-9 lg:w-28 xl:w-40 lg:ml-9  absolute xl:ml-10 rounded-xl"><DatePicker  style={{backgroundColor:'white',width:'100%',height:'100%'}} value={calender}  onChange={(e)=>{setDate(e,costItem);} }/></div>}
                                    {datePicker && <p onClick={()=>{divRef.current?.focus(); setDatePicker(true)}} className=" absolute max-sm:ml-24 md:ml-11 lg:ml-12 xl:ml-16 max-sm:text-[.7rem] md:text-[.6rem] lg:text-[.55rem] xl:text-[.7rem] ">click  to choose date</p>}

                                    </>
                                    
                                   ):(null)
                                 }

                              </div>
                            </div>
                        )
                        )}
             </form>
             {/* onClick={()=>setDatePicker(!datePicker)} */}
               {/* <CostTable cost={cost} className="hidden"/> */}
             
        </>
    )
  
}
export default SelectedOptionForm