import{ RemoveIcon, UndoIcon, LockIcon}from '../../utilies/icons'
const OptionIcons = () => {
    const CreateOptionIcon = ({className,optionIconName, child,select }) => {
      return(
        <div className={className}>
           {optionIconName}
           {child  && child}
        </div>
      )

    }
    return(
        <div className="flex  md:gap-2 lg:gap-4 relative  max-md:mt-4 max-sm:flex-1 md:mt-6 max-sm:items-center max-sm:justify-between ">
            <CreateOptionIcon 
              className="relative  bg-red-500 rounded-md max-sm:w-10 max-sm:h-10 max-sm:mt-2 md:w-8 md:h-8 md:mt-2 lg:w-9 lg:h-9 lg:mt-3   flex justify-center items-center"
              optionIconName={<RemoveIcon/>}
            />

            <CreateOptionIcon 
              className="relative max-sm:w-24 max-sm:h-12 md:w-20 md:h-10 lg:w-20 lg:h-12 bg-black rounded-md flex justify-center items-center"
              optionIconName={<UndoIcon/>}
            />

            <CreateOptionIcon 
              className="relative  md:p-4 max-sm:w-32 max-sm:h-10 md:w-30 md:h-10 lg:w-[120px] lg:h-12 bg-black rounded-md flex justify-center items-center gap-2 py-6"
              optionIconName={<LockIcon/>}
              child={<p className='text-gray-300 text-[1.1rem] font-light -mb-2 relative'>تعديل</p>}
            />
        </div>
    )

}
export default OptionIcons